import {chain} from 'lodash';
import * as moment from "moment";
import {PRICE_PER_WORK_WEEK, MAX_WORK_WEEKS_PER_MONTH, EXCLUDED_WORK_DAYS} from "../config";

/**
 * Gets the number of the week of the month of a moment object
 * @param {moment.Moment} aMoment
 * @returns {number}
 */
const weekOfMonth = (aMoment: moment.Moment) => aMoment.week() - aMoment.clone().startOf('month').week() + 1;

/**
 * Gets the total cost of an item by the start date and end date
 * @param {string} startDate
 * @param {number} numberOfDays
 * @returns {string}
 */
export const getTotalCost = function ({startDate, numberOfDays}: { startDate: string; numberOfDays: number }) {
    const startDateMoment: moment.Moment = moment(startDate, ["MM-DD-YYYY", "YYYY-MM-DD", 'MM/DD/YYYY']);
    const validStartDatemoment = startDateMoment.isValid() ? startDateMoment : moment();

    return chain(numberOfDays).times(dayUnit => {
        const currentMoment = validStartDatemoment.clone().add(dayUnit, 'days');
        return EXCLUDED_WORK_DAYS.includes(currentMoment.format('dddd'))
            ? 0
            : Math.min(weekOfMonth(currentMoment), MAX_WORK_WEEKS_PER_MONTH) * PRICE_PER_WORK_WEEK;
    }).sum().value().toFixed(2);
};