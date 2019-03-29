import {
    ADD_FOOD,
    ADD_FOOD_SUCCESS,
    ADD_FOOD_FAILURE
} from '../constants';

export default class FoodActions {

    static addFood(food) {
        return {
            type: 'ADD_FOOD',
            payload: food
        }
    }

    static addFoodSuccess(successData) {
        return {
            type: 'ADD_FOOD_SUCCESS',
            payload: successData
        }
    }

    static addFoodFailure(error) {
        return {
            type: 'ADD_FOOD_FAILURE',
            error: error
        }
    }
}