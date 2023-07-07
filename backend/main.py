from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from config import DevConfig
from models import Recipe, User
from exts import db
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager,create_access_token, create_refresh_token,jwt_required

app = Flask(__name__)
app.config.from_object(DevConfig)

db.init_app(app)

migrate = Migrate(app, db)
JWTManager(app)

api = Api(app, doc="/docs")

# Модель (сериализация)
recipe_model = api.model(
    "Recipe",
    {
        "id": fields.Integer(),
        "title": fields.String(),
        "description": fields.String()
    }
)

signup_model = api.model(
    "SignUp",
    {
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String()
    }
)

login_model = api.model(
    "Login",
    {
        "username": fields.String(),
        "password": fields.String()
    }
)


@api.route('/signup')
class SignUp(Resource):
    @api.marshal_with(signup_model)
    @api.expect(signup_model)
    def post(self):
        data = request.get_json()

        username = data.get('username')

        db_user = User.query.filter_by(username=username).first()

        if db_user is not None:
            return jsonify({"message": f"Пользователь с именем {username} уже существует"})

        new_user = User(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password'))
        )

        new_user.save()

        return new_user


@api.route('/login')
class Login(Resource):
    def post(self):
        data = request.get_json()

        username = data.get('username')
        password = data.get('password')

        db_user=User.query.filter_by(username=username).first()
        if db_user and check_password_hash(db_user.password, password):
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            return jsonify(
                {"access_token": access_token, "refresh_token": refresh_token}
            )

@api.route('/recipes')
class RecipeResource(Resource):

    @api.marshal_list_with(recipe_model)
    def get(self):
        """Получает данные"""

        recipes = Recipe.query.all()
        return recipes

    @api.marshal_with(recipe_model)
    @api.expect(recipe_model)
    @jwt_required()
    def post(self):
        """Создает что-то"""
        data = request.get_json()

        new_recipe = Recipe(
            title=data.get('title'),
            description=data.get('description')
        )

        new_recipe.save()
        return new_recipe


@api.route('/recipe/<int:id>')
class RecipeResource(Resource):
    @api.marshal_with(recipe_model)
    def get(self, id):
        """Получить элемент по его id"""
        recipe = Recipe.query.get_or_404(id)

        return recipe

    @api.marshal_list_with(recipe_model)
    @jwt_required()
    def put(self, id):
        """Поменять элемент по его id"""

        recipe_to_update = Recipe.query.get_or_404(id)
        data = request.get_json()
        recipe_to_update.update(data.get('title'), data.get('description'))

        return recipe_to_update

    @api.marshal_list_with(recipe_model)
    def delete(self, id):
        """Удаляет элемент по его id"""
        recipe_to_delete = Recipe.query.get_or_404(id)

        recipe_to_delete.delete()

        return recipe_to_delete


@api.route("/hello")
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello World"}


@app.shell_context_processor
def make_shell_context():
    return {
        "db": db,
        "Recipe": Recipe
    }


if __name__ == '__main__':
    app.run()
