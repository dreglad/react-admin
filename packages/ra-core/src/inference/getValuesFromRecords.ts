import isNil from 'lodash/isNil.js';
import castArray from 'lodash/castArray.js';
import forOwn from 'lodash/forOwn.js';

/**
 * Gets a list of values indexed by field based on a list of records
 *
 * @example
 * const records = [
 *     {
 *         id: 1,
 *         title: "Lorem Ipsum",
 *         views: 254,
 *         user_id: 123,
 *     },
 *     {
 *         id: 2,
 *         title: "Sic Dolor amet",
 *         views: 65,
 *         user_id: 456,
 *     },
 * ];
 * getValuesFromRecords(records);
 * // {
 * //    id: [1, 2],
 * //    title: ['Lorem Ipsum', 'Sic Dolor amet'],
 * //    views: [254, 65],
 * //    user_id: [123, 456],
 * // }
 */
export default (records: any[]) => {
    const values: any = {};
    records.forEach(record => {
        forOwn(record, (value, fieldName) => {
            if (!values[fieldName]) {
                values[fieldName] = [];
            }
            if (!isNil(value)) {
                values[fieldName].push(...castArray(value));
            }
        });
    });
    return values;
};
