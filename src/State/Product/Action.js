import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    console.log(reqData);
    let apiString = `/api/products?category=${category}`;
    if (colors.length !== 0) apiString += `&&colors=${colors}`;
    if (sizes) apiString += `&&sizes=${sizes}`;
    if (minPrice) apiString += `&&minPrice=${minPrice}`;
    if (maxPrice) apiString += `&&maxPrice=${maxPrice}`;
    if (minDiscount) apiString += `&&minDiscount=${minDiscount}`;
    if (stock) apiString += `&&stock=${stock}`;
    if (sort) apiString += `&&sort=${sort}`;
    if (pageNumber) apiString += `&&pageNumber=${pageNumber}`;
    if (pageSize) apiString += `&&pageSize=${pageSize}`;
    const { data } = await api.get(apiString);
    console.log(data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
