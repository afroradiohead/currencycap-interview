import {APIGatewayEvent, Handler} from 'aws-lambda';
import {getTotalCost} from "./helpers";
import {get} from 'lodash';


/**
 * Get Bobs's banana budget
 * @param {APIGatewayEvent} event
 * @returns {Promise<{statusCode: number; body: string}>}
 */
export const getBananaBudget: Handler = async (event: APIGatewayEvent) => {
  return {
      statusCode: 200,
      body: JSON.stringify({
          totalCost: getTotalCost({
              startDate: get(event, 'queryStringParameters.startDate') || undefined,
              numberOfDays: parseInt(get(event, 'queryStringParameters.numberOfDays'))|| 1
          })
      })
  };
};