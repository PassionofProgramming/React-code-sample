import { combineReducers } from 'redux';
import authReducer from './authReducer';
import DashboardReducer from './dashboardReducer';
import FoodReducer from './foodReducer';
import ExerciseReducer from './exerciseReducer';
import ProgressReducer from './progressReducer';
import ProfileReducer from './profileReducer';

const rootReducer = combineReducers({
    authReducer: authReducer,
    dashboardReducer: DashboardReducer,
    foodReducer: FoodReducer,
    exerciseReducer: ExerciseReducer,
    progressReducer: ProgressReducer,
    profileReducer: ProfileReducer,
})

export default rootReducer