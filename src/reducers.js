import * as types from "./actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export function stockReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features.concat(action.payload)],
          price : state.car.price + action.payload.price
        }
      };
    case types.REMOVE_FEATURE:
      return {
        ...state, 
        car: {
          ...state.car, 
          features: [...state.car.features.filter(el => el.id !== action.payload.id)],
          price : state.car.price - action.payload.price

        }
      };
     
    default:
      return state;
  }
}
