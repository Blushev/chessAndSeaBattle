from flask import request
from flask_jwt_extended import jwt_required
from flask_restx import Namespace, Resource, fields

from models import Recipe

recipe_ns = Namespace('recipe', description="namespace for recipes")
# Модель (сериализация)
recipe_model = recipe_ns.model(
    "Recipe",
    {
        "id": fields.Integer(),
        "title": fields.String(),
        "description": fields.String()
    }
)


@recipe_ns.route('/recipes')
class RecipeResource(Resource):

    @recipe_ns.marshal_list_with(recipe_model)
    def get(self):
        """Получает данные"""

        recipes = Recipe.query.all()
        return recipes

    @recipe_ns.marshal_with(recipe_model)
    @recipe_ns.expect(recipe_model)
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


@recipe_ns.route('/recipe/<int:id>')
class RecipeResource(Resource):
    @recipe_ns.marshal_with(recipe_model)
    def get(self, id):
        """Получить элемент по его id"""
        recipe = Recipe.query.get_or_404(id)

        return recipe

    @recipe_ns.marshal_list_with(recipe_model)
    @jwt_required()
    def put(self, id):
        """Поменять элемент по его id"""

        recipe_to_update = Recipe.query.get_or_404(id)
        data = request.get_json()
        recipe_to_update.update(data.get('title'), data.get('description'))

        return recipe_to_update

    @recipe_ns.marshal_list_with(recipe_model)
    def delete(self, id):
        """Удаляет элемент по его id"""
        recipe_to_delete = Recipe.query.get_or_404(id)

        recipe_to_delete.delete()

        return recipe_to_delete
