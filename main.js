/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/_array.js":
/*!*************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/_array.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Array = void 0;
const array_binary_index_of_1 = __webpack_require__(/*! ./impl/array-binary-index-of */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-index-of.js");
const array_is_array_1 = __webpack_require__(/*! ./impl/array-is-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-is-array.js");
const array_binary_last_index_of_1 = __webpack_require__(/*! ./impl/array-binary-last-index-of */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-last-index-of.js");
const array_map_1 = __webpack_require__(/*! ./impl/array-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map.js");
const array_copy_into_1 = __webpack_require__(/*! ./impl/array-copy-into */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-copy-into.js");
const array_flat_map_1 = __webpack_require__(/*! ./impl/array-flat-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-flat-map.js");
const array_for_each_1 = __webpack_require__(/*! ./impl/array-for-each */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-for-each.js");
const array_index_1 = __webpack_require__(/*! ./impl/array-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-index.js");
const array_intersect_1 = __webpack_require__(/*! ./impl/array-intersect */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-intersect.js");
const array_last_1 = __webpack_require__(/*! ./impl/array-last */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-last.js");
const array_normalize_empty_to_undefined_1 = __webpack_require__(/*! ./impl/array-normalize-empty-to-undefined */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-empty-to-undefined.js");
const array_normalize_nullish_to_empty_1 = __webpack_require__(/*! ./impl/array-normalize-nullish-to-empty */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-nullish-to-empty.js");
const array_collect_1 = __webpack_require__(/*! ./impl/array-collect */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-collect.js");
const array_remove_many_1 = __webpack_require__(/*! ./impl/array-remove-many */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-many.js");
const array_remove_one_1 = __webpack_require__(/*! ./impl/array-remove-one */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-one.js");
const array_replace_one_1 = __webpack_require__(/*! ./impl/array-replace-one */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-replace-one.js");
const array_compact_1 = __webpack_require__(/*! ./impl/array-compact */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact.js");
const array_compact_map_1 = __webpack_require__(/*! ./impl/array-compact-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact-map.js");
const array_union_1 = __webpack_require__(/*! ./impl/array-union */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-union.js");
const array_push_unique_1 = __webpack_require__(/*! ./impl/array-push-unique */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-push-unique.js");
const array_empty_array_1 = __webpack_require__(/*! ./impl/array-empty-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-empty-array.js");
const array_generate_range_1 = __webpack_require__(/*! ./impl/array-generate-range */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-generate-range.js");
const array_map_range_1 = __webpack_require__(/*! ./impl/array-map-range */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map-range.js");
const array_contains_1 = __webpack_require__(/*! ./impl/array-contains */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-contains.js");
const array_insert_at_index_1 = __webpack_require__(/*! ./impl/array-insert-at-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-insert-at-index.js");
const array_symmetric_difference_1 = __webpack_require__(/*! ./impl/array-symmetric-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-symmetric-difference.js");
const array_set_difference_1 = __webpack_require__(/*! ./impl/array-set-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-set-difference.js");
/**
 * @public
 * Utilities that apply to `Array` and `ArrayLike`.
 */
class _Array {
    constructor() {
    }
}
exports._Array = _Array;
/** {@inheritDoc arrayBinaryIndexOf} */
_Array.binaryIndexOf = array_binary_index_of_1.arrayBinaryIndexOf;
/** {@inheritDoc arrayBinaryLastIndexOf} */
_Array.binaryLastIndexOf = array_binary_last_index_of_1.arrayBinaryLastIndexOf;
/** {@inheritDoc arrayCollect} */
_Array.collect = array_collect_1.arrayCollect;
/** {@inheritDoc arrayCompact} */
_Array.compact = array_compact_1.arrayCompact;
/** {@inheritDoc arrayCompactMap} */
_Array.compactMap = array_compact_map_1.arrayCompactMap;
/** {@inheritDoc (arrayContains:2)} */
_Array.contains = array_contains_1.arrayContains;
/** {@inheritDoc arrayCopyInto} */
_Array.copyInto = array_copy_into_1.arrayCopyInto;
/** {@inheritDoc arrayEmptyArray} */
_Array.emptyArray = array_empty_array_1.arrayEmptyArray;
/** {@inheritDoc arrayFlatMap} */
_Array.flatMap = array_flat_map_1.arrayFlatMap;
/** {@inheritDoc arrayForEach} */
_Array.forEach = array_for_each_1.arrayForEach;
/** {@inheritDoc arrayGenerateRange} */
_Array.generateRange = array_generate_range_1.arrayGenerateRange;
/** {@inheritDoc arrayIndex} */
_Array.index = array_index_1.arrayIndex;
/** {@inheritDoc arrayInsertAtIndex} */
_Array.insertAtIndex = array_insert_at_index_1.arrayInsertAtIndex;
/** {@inheritDoc arrayIntersect} */
_Array.intersect = array_intersect_1.arrayIntersect;
/** {@inheritDoc arrayIsArray} */
_Array.isArray = array_is_array_1.arrayIsArray;
/** {@inheritDoc arrayLast} */
_Array.last = array_last_1.arrayLast;
/** {@inheritDoc arrayMap} */
_Array.map = array_map_1.arrayMap;
/** {@inheritDoc arrayMapRange} */
_Array.mapRange = array_map_range_1.arrayMapRange;
/** {@inheritDoc arrayNormalizeEmptyToUndefined} */
_Array.normalizeEmptyToUndefined = array_normalize_empty_to_undefined_1.arrayNormalizeEmptyToUndefined;
/** {@inheritDoc arrayNormalizeNullishToEmpty} */
_Array.normalizeNullishToEmpty = array_normalize_nullish_to_empty_1.arrayNormalizeNullishToEmpty;
/** {@inheritDoc arrayPushUnique} */
_Array.pushUnique = array_push_unique_1.arrayPushUnique;
/** {@inheritDoc arrayRemoveMany} */
_Array.removeMany = array_remove_many_1.arrayRemoveMany;
/** {@inheritDoc arrayRemoveOne} */
_Array.removeOne = array_remove_one_1.arrayRemoveOne;
/** {@inheritDoc arrayReplaceOne} */
_Array.replaceOne = array_replace_one_1.arrayReplaceOne;
/** {@inheritDoc arraySetDifference} */
_Array.setDifference = array_set_difference_1.arraySetDifference;
/** {@inheritDoc arraySymmetricDifference} */
_Array.symmetricDifference = array_symmetric_difference_1.arraySymmetricDifference;
/** {@inheritDoc arrayUnion} */
_Array.union = array_union_1.arrayUnion;
//# sourceMappingURL=_array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-index-of.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-index-of.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayBinaryIndexOf = void 0;
const binary_find_insertion_index_1 = __webpack_require__(/*! ./binary-find-insertion-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/binary-find-insertion-index.js");
/**
 * @public
 * Performs a bisection search of an 'indexable' object, i.e. can be accessed by index, for example `Array`. Custom data structures are also supported.
 * @param indexable - The thing to be searched. This must be sorted ascending.
 * @param comparisonValueToSearchFor - The comparison value which is being searched for.
 * @param getComparisonValueAtIndex - A function that provides the value for comparison at a given index.
 * @param length - The number of elements in the structure `indexable` to search.
 * @param start - The start index.
 * @returns The index of the searched for item, else -1 if it cannot be found.
 *
 * @example
 * ```typescript
 * // searching for the number 3 with start index 1 & length 2
 *  const index = arrayBinaryIndexOf([1, 2, 3, 4], 3, (a, i) => a[i], 2, 1);
 *  // index is 2
 * ```
 *
 * @remarks
 * The `indexable` parameter must be sorted ascending. Where there are multiple equal values the lowest index will be returned.
 *
 * See {@link arrayBinaryIndexOf}.
 */
function arrayBinaryIndexOf(indexable, comparisonValueToSearchFor, getComparisonValueAtIndex, length, start) {
    const index = (0, binary_find_insertion_index_1.binaryFindInsertionIndex)(indexable, comparisonValueToSearchFor, getComparisonValueAtIndex, isLowGetLowest, (v) => v, length, start);
    if (getComparisonValueAtIndex(indexable, index) === comparisonValueToSearchFor) {
        return index;
    }
    else {
        return -1;
    }
}
exports.arrayBinaryIndexOf = arrayBinaryIndexOf;
function isLowGetLowest(comparisonValueToSearchFor, currentComparisonValue) {
    return currentComparisonValue < comparisonValueToSearchFor;
}
//# sourceMappingURL=array-binary-index-of.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-last-index-of.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-last-index-of.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayBinaryLastIndexOf = void 0;
const binary_find_insertion_index_1 = __webpack_require__(/*! ./binary-find-insertion-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/binary-find-insertion-index.js");
/**
 * @public
 * Performs a bisection search of an 'indexable' object, i.e. can be accessed by index, for example `Array`. Custom data structures are also supported.
 * @param indexable - The thing to be searched. This must be sorted ascending.
 * @param comparisonValueToSearchFor - The comparison value which is being searched for.
 * @param getComparisonValueAtIndex - A function that provides the value for comparison at a given index.
 * @param length - The number of elements in the structure `indexable` to search.
 * @param start - The start index.
 * @returns The index of the searched for item, else -1 if it cannot be found.
 *
 * @example
 * ```typescript
 * // searching for the number 3 with start index 1 & length 2
 *  const index = arrayBinaryIndexOf([1, 2, 3, 4], 3, (a, i) => a[i], 2, 1);
 *  // index is 2
 * ```
 *
 * @remarks
 * The `indexable` parameter must be sorted ascending. Where there are multiple equal values the highest index will be returned.
 *
 * See {@link arrayBinaryLastIndexOf}.
 */
function arrayBinaryLastIndexOf(indexable, comparisonValueToSearchFor, getComparisonValueAtIndex, length, start) {
    const index = (0, binary_find_insertion_index_1.binaryFindInsertionIndex)(indexable, comparisonValueToSearchFor, getComparisonValueAtIndex, isLowGetHighest, (v) => v - 1, length, start);
    if (getComparisonValueAtIndex(indexable, index) === comparisonValueToSearchFor) {
        return index;
    }
    else {
        return -1;
    }
}
exports.arrayBinaryLastIndexOf = arrayBinaryLastIndexOf;
function isLowGetHighest(comparisonValueToSearchFor, currentComparisonValue) {
    return currentComparisonValue <= comparisonValueToSearchFor;
}
//# sourceMappingURL=array-binary-last-index-of.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-collect.js":
/*!*************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-collect.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayCollect = void 0;
/**
 * @public
 * Like `Array.reduce` but without the requirement to return the value in the callback.
 *
 * @remarks
 * See {@link arrayCollect}.
 */
function arrayCollect(items, collected, collect) {
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        collect(collected, items[i], i);
    }
    return collected;
}
exports.arrayCollect = arrayCollect;
//# sourceMappingURL=array-collect.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact-map.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact-map.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayCompactMap = void 0;
/**
 * @public
 * Like _Array.map but where the callback returns null it will be omitted from the result.
 *
 * @remarks
 * See {@link arrayCompactMap}.
 */
function arrayCompactMap(items, map) {
    const mapped = [];
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        const transformed = map(items[i], i);
        if (transformed !== null) {
            mapped.push(transformed);
        }
    }
    return mapped;
}
exports.arrayCompactMap = arrayCompactMap;
//# sourceMappingURL=array-compact-map.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact.js":
/*!*************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayCompact = void 0;
/**
 * @public
 * Strips null and undefined items from arrays (non mutative).
 *
 * @remarks
 * See {@link arrayCompact}.
 */
function arrayCompact(items) {
    const result = [];
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        const item = items[i];
        if (item != null) {
            result.push(item);
        }
    }
    return result;
}
exports.arrayCompact = arrayCompact;
//# sourceMappingURL=array-compact.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-contains.js":
/*!**************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-contains.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayContains = void 0;
function arrayContains(items, item) {
    return items.indexOf(item) !== -1;
}
exports.arrayContains = arrayContains;
//# sourceMappingURL=array-contains.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-copy-into.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-copy-into.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayCopyInto = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Make an array contain the same items as another.
 * @param from - The array to copy from.
 * @param to - The array to copy into and resize.
 * @param startIndex - The index to start with in the from array.
 * @param length - The index to end with in the from array.
 *
 * @remarks
 * See {@link arrayCopyInto}.
 */
function arrayCopyInto(from, to, startIndex = 0, length = from.length) {
    const end = startIndex + length;
    to.length = length;
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(startIndex >= 0, "negative indexes are not supported");
        _debug_1._Debug.assert(end <= from.length, "length would overflow array");
    });
    for (let i = 0; startIndex < end; ++startIndex, ++i) {
        to[i] = from[startIndex];
    }
}
exports.arrayCopyInto = arrayCopyInto;
//# sourceMappingURL=array-copy-into.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-empty-array.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-empty-array.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayEmptyArray = void 0;
/**
 * @public
 * An empty readonly array, useful to avoid GC pressure.
 */
exports.arrayEmptyArray = [];
//# sourceMappingURL=array-empty-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-flat-map.js":
/*!**************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-flat-map.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayFlatMap = void 0;
/**
 * @public
 * Iterate over `ArrayLike` calling a callback against it, the callback returns `ArrayLike` which is concatenated into a single `Array`.
 *
 * @param items - The items to iterate over.
 * @param mapCallback - The return from this callback is concatenated to the result, unless null is returned in which case the result is omitted.
 *
 * @returns The output of `mapCallback` flattened into a single array.
 *
 * @remarks
 * See {@link arrayFlatMap}.
 */
function arrayFlatMap(items, mapCallback) {
    const result = [];
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        const currentResult = mapCallback(items[i], i);
        if (currentResult === null) {
            continue;
        }
        let start = result.length;
        result.length += currentResult.length;
        for (let j = 0, jEnd = currentResult.length; j < jEnd; ++j) {
            result[start++] = currentResult[j];
        }
    }
    return result;
}
exports.arrayFlatMap = arrayFlatMap;
//# sourceMappingURL=array-flat-map.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-for-each.js":
/*!**************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-for-each.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayForEach = void 0;
/**
 * @public
 * Like `Array.forEach`.
 * @remarks
 * Has more consistent performance characteristics cross platform than the built in `Array.forEach`.
 *
 * See {@link arrayForEach}.
 */
function arrayForEach(items, callback) {
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        callback(items[i], i);
    }
}
exports.arrayForEach = arrayForEach;
//# sourceMappingURL=array-for-each.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-generate-range.js":
/*!********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-generate-range.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayGenerateRange = void 0;
const array_map_range_1 = __webpack_require__(/*! ./array-map-range */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map-range.js");
const fp_identity_1 = __webpack_require__(/*! ../../fp/impl/fp-identity */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js");
/**
 * @public
 * Generates a range of integers output in an `Array`.
 *
 * @param from - The value to start from (inclusive).
 * @param to - The value to finish with (inclusive).
 *
 * @returns An array [from, from + 1, ..., to -1, to].
 *
 * @remarks
 * Where `from` and `to` are equal a length 1 array is returned, NaN input is not supported.
 *
 * See {@link arrayGenerateRange}.
 */
function arrayGenerateRange(from, to) {
    return (0, array_map_range_1.arrayMapRange)(from, to, fp_identity_1.fpIdentity);
}
exports.arrayGenerateRange = arrayGenerateRange;
//# sourceMappingURL=array-generate-range.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-index.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-index.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayIndex = void 0;
/**
 * @public
 * Populates a `Map` given a key creating function and `ArrayLike`.
 *
 * @remarks
 * keys which are null are omitted.
 *
 * See {@link arrayIndex}.
 */
function arrayIndex(items, getKey) {
    const indexed = new Map();
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        const item = items[i];
        const key = getKey(item, i);
        if (key !== null) {
            indexed.set(key, item);
        }
    }
    return indexed;
}
exports.arrayIndex = arrayIndex;
//# sourceMappingURL=array-index.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-insert-at-index.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-insert-at-index.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayInsertAtIndex = void 0;
/**
 * @public
 * Modifies input array by inserting at given index.
 * @param items - The array to modify.
 * @param itemToInsert - The thing to insert.
 * @param insertAtIndex - Where to insert it. Pun intended.
 *
 * @remarks
 * See {@link arrayInsertAtIndex}.
 */
function arrayInsertAtIndex(items, itemToInsert, insertAtIndex) {
    items.splice(insertAtIndex, 0, itemToInsert);
}
exports.arrayInsertAtIndex = arrayInsertAtIndex;
//# sourceMappingURL=array-insert-at-index.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-intersect.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-intersect.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayIntersect = void 0;
const array_index_1 = __webpack_require__(/*! ./array-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-index.js");
const fp_identity_1 = __webpack_require__(/*! ../../fp/impl/fp-identity */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js");
/**
 * @public
 * Given two `ArrayLike`, provides the items common between them in an `Array`.
 *
 * @remarks
 * See {@link arrayIntersect}.
 */
function arrayIntersect(a, b, getComparisonValue = fp_identity_1.fpIdentity) {
    const result = [];
    const bIndex = (0, array_index_1.arrayIndex)(b, getComparisonValue);
    for (let i = 0, iEnd = a.length; i < iEnd; ++i) {
        const item = a[i];
        if (bIndex.has(getComparisonValue(item, i))) {
            result.push(item);
        }
    }
    return result;
}
exports.arrayIntersect = arrayIntersect;
//# sourceMappingURL=array-intersect.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-is-array.js":
/*!**************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-is-array.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayIsArray = void 0;
/**
 * @public
 * Checks if the parameter is an instance of `Array` or is a view of `ArrayBuffer`.
 *
 * @remarks
 * See {@link arrayIsArray}.
 */
function arrayIsArray(obj) {
    return obj instanceof Array || ArrayBuffer.isView(obj);
}
exports.arrayIsArray = arrayIsArray;
//# sourceMappingURL=array-is-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-last.js":
/*!**********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-last.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayLast = void 0;
/**
 * @public
 * Gets the last value in `ArrayLike`.
 *
 * @returns The first value in `map`, otherwise `undefined` where size 0.
 *
 * @remarks
 * See {@link mapFirstValue}.
 */
function arrayLast(items) {
    if (items.length === 0) {
        return undefined;
    }
    return items[items.length - 1];
}
exports.arrayLast = arrayLast;
//# sourceMappingURL=array-last.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map-range.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map-range.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayMapRange = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Like {@link arrayMap} with integer range as input.
 *
 * @param from - The value to start from (inclusive).
 * @param to - The value to finish with (inclusive).
 * @param callback - Called for each value in the range.
 *
 * @returns An array of results from the callback.
 *
 * @remarks
 * Where `from` and `to` are equal a length 1 array is returned, NaN input is not supported.
 *
 * See {@link arrayMapRange}.
 */
function arrayMapRange(from, to, callback) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(!isNaN(from) && !isNaN(to), "NaN range not supported");
    });
    const range = to - from;
    const length = Math.abs(range) + 1;
    const increment = Math.sign(range);
    const array = new Array(length);
    for (let i = 0; i < length; ++i) {
        array[i] = callback(from, i);
        from += increment;
    }
    return array;
}
exports.arrayMapRange = arrayMapRange;
//# sourceMappingURL=array-map-range.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map.js":
/*!*********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayMap = void 0;
/**
 * @public
 * Like `Array.map`.
 * @remarks
 * Has more consistent performance characteristics cross platform than the built in `Array.map`
 *
 * See {@link arrayMap}.
 */
function arrayMap(items, callback) {
    const mapped = new Array(items.length);
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        mapped[i] = callback(items[i], i);
    }
    return mapped;
}
exports.arrayMap = arrayMap;
//# sourceMappingURL=array-map.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-empty-to-undefined.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-empty-to-undefined.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayNormalizeEmptyToUndefined = void 0;
/**
 * @public
 * Replaces length 0 `ArrayLike` with `undefined`.
 * @returns `array` if it's an `ArrayLike` of length greater than 0, otherwise `undefined`.
 *
 * @remarks
 * See {@link arrayNormalizeEmptyToUndefined}.
 */
function arrayNormalizeEmptyToUndefined(array) {
    if (array == null || array.length === 0) {
        return undefined;
    }
    return array;
}
exports.arrayNormalizeEmptyToUndefined = arrayNormalizeEmptyToUndefined;
//# sourceMappingURL=array-normalize-empty-to-undefined.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-nullish-to-empty.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-nullish-to-empty.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayNormalizeNullishToEmpty = void 0;
/**
 * @public
 * Replaces `null` / `undefined` with an empty `Array`.
 * @returns `array` if it's an `Array` of length greater than 0, otherwise an empty `Array`.
 *
 * @remarks
 * See {@link arrayNormalizeNullishToEmpty}.
 */
function arrayNormalizeNullishToEmpty(array) {
    if (array == null) {
        return [];
    }
    return array;
}
exports.arrayNormalizeNullishToEmpty = arrayNormalizeNullishToEmpty;
//# sourceMappingURL=array-normalize-nullish-to-empty.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-push-unique.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-push-unique.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayPushUnique = void 0;
const fp_identity_1 = __webpack_require__(/*! ../../fp/impl/fp-identity */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js");
/**
 * @public
 * Like `Array.push` but checks if the value is unique first.
 *
 * @returns true if an element was pushed.
 *
 * @remarks
 * See {@link arrayPushUnique}.
 */
function arrayPushUnique(items, itemToPush, getComparisonValue = fp_identity_1.fpIdentity) {
    const comparisonValue = getComparisonValue(itemToPush);
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        if (getComparisonValue(items[i]) === comparisonValue) {
            return false;
        }
    }
    items.push(itemToPush);
    return true;
}
exports.arrayPushUnique = arrayPushUnique;
//# sourceMappingURL=array-push-unique.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-many.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-many.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayRemoveMany = void 0;
/**
 * @public
 * Removes each item in `itemsToRemove` from `items` (including any repeated items).
 *
 * @returns The number of items that were removed.
 *
 * @remarks
 * See {@link arrayRemoveMany}.
 */
function arrayRemoveMany(items, itemsToRemove) {
    const setOfItemsToRemove = new Set(itemsToRemove);
    let index = items.length;
    let removedItems = 0;
    while (index-- > 0) {
        if (setOfItemsToRemove.has(items[index])) {
            items.splice(index, 1);
            ++removedItems;
        }
    }
    return removedItems;
}
exports.arrayRemoveMany = arrayRemoveMany;
//# sourceMappingURL=array-remove-many.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-one.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-one.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayRemoveOne = void 0;
/**
 * @public
 * Removes either 0 or one item from items, even if itemToRemove appears more than once.
 *
 * @returns true if an item was removed.
 *
 * @remarks
 * The lowest indexed item will be removed where there is more than one match.
 *
 * See {@link arrayRemoveOne}.
 */
function arrayRemoveOne(items, itemToRemove) {
    const index = items.indexOf(itemToRemove);
    if (index === -1) {
        return false;
    }
    items.splice(index, 1);
    return true;
}
exports.arrayRemoveOne = arrayRemoveOne;
//# sourceMappingURL=array-remove-one.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-replace-one.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-replace-one.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayReplaceOne = void 0;
/**
 * @public
 * Replaces the first match of itemToRemove with replaceWith.
 *
 * @returns true if an element was replaced.
 *
 * @remarks
 * See {@link arrayReplaceOne}.
 */
function arrayReplaceOne(items, itemToRemove, replaceWith) {
    const index = items.indexOf(itemToRemove);
    if (index === -1) {
        return false;
    }
    items[index] = replaceWith;
    return true;
}
exports.arrayReplaceOne = arrayReplaceOne;
//# sourceMappingURL=array-replace-one.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-set-difference.js":
/*!********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-set-difference.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arraySetDifference = void 0;
/**
 * @public
 *
 * @returns items in A not in B.
 *
 * @remarks
 * See {@link arraySetDifference}.
 */
function arraySetDifference(a, b) {
    const result = new Set();
    for (let i = 0, iEnd = a.length; i < iEnd; ++i) {
        const item = a[i];
        if (!b.has(item)) {
            result.add(item);
        }
    }
    return result;
}
exports.arraySetDifference = arraySetDifference;
//# sourceMappingURL=array-set-difference.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-symmetric-difference.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-symmetric-difference.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arraySymmetricDifference = void 0;
/**
 * @public
 *
 * @remarks
 * See {@link arraySymmetricDifference}.
 */
function arraySymmetricDifference(a, b, aSet = new Set(a), bSet = new Set(b)) {
    const result = new Set();
    for (let i = 0, iEnd = a.length; i < iEnd; ++i) {
        const item = a[i];
        if (!bSet.has(item)) {
            result.add(item);
        }
    }
    for (let i = 0, iEnd = b.length; i < iEnd; ++i) {
        const item = b[i];
        if (!aSet.has(item)) {
            result.add(item);
        }
    }
    return result;
}
exports.arraySymmetricDifference = arraySymmetricDifference;
//# sourceMappingURL=array-symmetric-difference.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-union.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-union.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayUnion = void 0;
const fp_identity_1 = __webpack_require__(/*! ../../fp/impl/fp-identity */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js");
const map_values_to_array_1 = __webpack_require__(/*! ../../map/impl/map-values-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-values-to-array.js");
/**
 * @public
 * Given an `ArrayLike` of `ArrayLike`, provides all unique items in an `Array`.
 *
 * @remarks
 * See {@link arrayUnion}.
 */
function arrayUnion(items, getComparisonValue = fp_identity_1.fpIdentity) {
    const result = new Map();
    for (let i = 0, iEnd = items.length; i < iEnd; ++i) {
        const innerItems = items[i];
        for (let j = 0, jEnd = innerItems.length; j < jEnd; ++j) {
            const item = innerItems[j];
            result.set(getComparisonValue(item, j), item);
        }
    }
    return (0, map_values_to_array_1.mapValuesToArray)(result);
}
exports.arrayUnion = arrayUnion;
//# sourceMappingURL=array-union.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/binary-find-insertion-index.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/binary-find-insertion-index.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.binaryFindInsertionIndex = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const math_bound_1 = __webpack_require__(/*! ../../math/impl/math-bound */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound.js");
/**
 * @internal
 */
function binaryFindInsertionIndex(indexable, comparisonValueToSearchFor, getComparisonValueAtIndex, isLow, adjustValue, length, startIndex = 0) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(startIndex < length, "start index must be within bounds");
        let prev = -Infinity;
        _debug_1._Debug.assert(comparisonValueToSearchFor === comparisonValueToSearchFor, "NaN is not a permissible comparison value");
        if (!_debug_1._Debug.isFlagSet("DEBUG_DISABLE_EXPENSIVE_CHECKS")) {
            for (let i = startIndex; i < length; ++i) {
                const current = getComparisonValueAtIndex(indexable, i);
                _debug_1._Debug.assert(current === current, "NaN is not a permissible comparison value");
                _debug_1._Debug.assert(current >= prev, "expected data to be sorted");
                prev = current;
            }
        }
    });
    let low = startIndex;
    let high = length;
    while (low < high) {
        const midIndex = (low + high) >> 1;
        const currentComparisonValue = getComparisonValueAtIndex(indexable, midIndex);
        // i.e. the comparison value is less than the value we're searching for
        if (isLow(comparisonValueToSearchFor, currentComparisonValue)) {
            low = midIndex + 1;
        }
        else {
            high = midIndex;
        }
    }
    return (0, math_bound_1.mathBound)(adjustValue(high), startIndex, length - 1);
}
exports.binaryFindInsertionIndex = binaryFindInsertionIndex;
//# sourceMappingURL=binary-find-insertion-index.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/margin2d/get-margin2d-ctor.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/margin2d/get-margin2d-ctor.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMargin2dCtor = void 0;
const mat2_factory_1 = __webpack_require__(/*! ../../mat2/mat2-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2-factory.js");
const range2d_1 = __webpack_require__(/*! ../range2d/range2d */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/range2d.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const get_mat2_ctor_1 = __webpack_require__(/*! ../../mat2/get-mat2-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/get-mat2-ctor.js");
/**
 * @internal
 */
function getMargin2dCtor(ctor) {
    var _a;
    return _a = class Margin2dImpl extends (0, get_mat2_ctor_1.getMat2Ctor)(ctor) {
            getLeft() {
                return this[0];
            }
            getRight() {
                return this[1];
            }
            getTop() {
                return this[2];
            }
            getBottom() {
                return this[3];
            }
            setLeft(value) {
                this[0] = value;
            }
            setRight(value) {
                this[1] = value;
            }
            setTop(value) {
                this[2] = value;
            }
            setBottom(value) {
                this[3] = value;
            }
            sumX() {
                return this[0] + this[1];
            }
            sumY() {
                return this[2] + this[3];
            }
            getInnerRange(range, result = this.constructor.rangeCtor.factory.createOneEmpty()) {
                result[0] = range[0] + this[0]; // xMin
                result[1] = range[1] - this[1]; // xMax
                result[2] = range[2] + this[3]; // yMin
                result[3] = range[3] - this[2]; // yMax
                return result;
            }
            mat3TransformLength(mat, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo.setLeft(mat.getTransformedXLength(0, this.getLeft()));
                writeTo.setRight(mat.getTransformedXLength(0, this.getRight()));
                writeTo.setTop(mat.getTransformedYLength(0, this.getTop()));
                writeTo.setBottom(mat.getTransformedYLength(0, this.getBottom()));
                return writeTo;
            }
        },
        _a.factory = new mat2_factory_1.Mat2Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a.rangeCtor = range2d_1.Range2d.getCtor(ctor),
        _a;
}
exports.getMargin2dCtor = getMargin2dCtor;
//# sourceMappingURL=get-margin2d-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/margin2d/margin2d.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/margin2d/margin2d.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Margin2d = void 0;
const get_margin2d_ctor_1 = __webpack_require__(/*! ./get-margin2d-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/margin2d/get-margin2d-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
const mat2_1 = __webpack_require__(/*! ../../mat2/mat2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2.js");
/**
 * @public
 * 2x2 matrix representing margins on a rectangle.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Margin2d extends mat2_1.Mat2 {
    static getCtor(ctor) {
        return this.constructors.get(ctor);
    }
    getLeft() {
        throw new Error();
    }
    getRight() {
        throw new Error();
    }
    getTop() {
        throw new Error();
    }
    getBottom() {
        throw new Error();
    }
    setLeft(_value) {
        throw new Error();
    }
    setRight(_value) {
        throw new Error();
    }
    setTop(_value) {
        throw new Error();
    }
    setBottom(_value) {
        throw new Error();
    }
    update(..._args) {
        throw new Error();
    }
    sumX() {
        throw new Error();
    }
    sumY() {
        throw new Error();
    }
    getInnerRange(_range, _result) {
        throw new Error();
    }
    /**
     * Applies `Mat3.getTransformedXLength` `Mat3.getTransformedYLength` with a minimum of 0 and a maximum of
     * whatever the margin is.
     */
    mat3TransformLength(_mat, _writeTo) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Margin2d = Margin2d;
Margin2d.f64 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Float64Array);
Margin2d.f32 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Float32Array);
Margin2d.u32 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Uint32Array);
Margin2d.i32 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Int32Array);
Margin2d.u16 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Uint16Array);
Margin2d.i16 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Int16Array);
Margin2d.u8c = (0, get_margin2d_ctor_1.getMargin2dCtor)(Uint8ClampedArray);
Margin2d.u8 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Uint8Array);
Margin2d.i8 = (0, get_margin2d_ctor_1.getMargin2dCtor)(Int8Array);
Margin2d.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Margin2d);
//# sourceMappingURL=margin2d.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/get-range2d-ctor.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/get-range2d-ctor.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRange2dCtor = void 0;
const get_mat2_ctor_1 = __webpack_require__(/*! ../../mat2/get-mat2-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/get-mat2-ctor.js");
const vec2_1 = __webpack_require__(/*! ../../vec2/vec2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2.js");
const mat2_factory_1 = __webpack_require__(/*! ../../mat2/mat2-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2-factory.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const _debug_1 = __webpack_require__(/*! ../../../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const mat3_1 = __webpack_require__(/*! ../../mat3/mat3 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3.js");
/**
 * @internal
 */
function getRange2dCtor(ctor) {
    var _a;
    return _a = class Range2dImpl extends (0, get_mat2_ctor_1.getMat2Ctor)(ctor) {
            setXMin(value) {
                this[0] = value;
            }
            setXMax(value) {
                this[1] = value;
            }
            setYMin(value) {
                this[2] = value;
            }
            setYMax(value) {
                this[3] = value;
            }
            getXMin() {
                return this[0];
            }
            getXMax() {
                return this[1];
            }
            getYMin() {
                return this[2];
            }
            getYMax() {
                return this[3];
            }
            getRange(result = this.constructor.vec2Ctor.factory.createOneEmpty()) {
                result.setX(this.getXRange());
                result.setY(this.getYRange());
                return result;
            }
            getXRange() {
                return this[1] - this[0];
            }
            getYRange() {
                return this[3] - this[2];
            }
            getXMaxAbs() {
                const xMinAbs = Math.abs(this.getXMin());
                const xMaxAbs = Math.abs(this.getXMax());
                return xMinAbs > xMaxAbs ? xMinAbs : xMaxAbs;
            }
            getYMaxAbs() {
                const yMinAbs = Math.abs(this.getYMin());
                const yMaxAbs = Math.abs(this.getYMax());
                return yMinAbs > yMaxAbs ? yMinAbs : yMaxAbs;
            }
            getCenter(result = this.constructor.vec2Ctor.factory.createOneEmpty()) {
                result.setX(this.getXCenter());
                result.setY(this.getYCenter());
                return result;
            }
            getXCenter() {
                return (this[0] + this[1]) * 0.5;
            }
            getYCenter() {
                return (this[2] + this[3]) * 0.5;
            }
            mat3Multiply(mat, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo.setXMin(mat.getVec3MultiplyX(this.getXMin()));
                writeTo.setXMax(mat.getVec3MultiplyX(this.getXMax()));
                writeTo.setYMin(mat.getVec3MultiplyY(this.getYMin()));
                writeTo.setYMax(mat.getVec3MultiplyY(this.getYMax()));
                return writeTo;
            }
            unionRange(range, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo[0] = this[0] > range[0] ? range[0] : this[0];
                writeTo[1] = this[1] < range[1] ? range[1] : this[1];
                writeTo[2] = this[2] > range[2] ? range[2] : this[2];
                writeTo[3] = this[3] < range[3] ? range[3] : this[3];
                return writeTo;
            }
            extendRange(x, y, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo[0] = this[0] > x ? x : this[0];
                writeTo[1] = this[1] < x ? x : this[1];
                writeTo[2] = this[2] > y ? y : this[2];
                writeTo[3] = this[3] < y ? y : this[3];
                return writeTo;
            }
            getRangeTransform(toRange, result = this.constructor.mat3Ctor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.runBlock(() => {
                    _debug_1._Debug.assert(this.getXRange() !== 0, "divide by 0");
                    _debug_1._Debug.assert(this.getYRange() !== 0, "divide by 0");
                });
                const xSf = toRange.getXRange() / this.getXRange();
                const ySf = toRange.getYRange() / this.getYRange();
                result[0] = xSf;
                result[1] = 0;
                result[2] = 0;
                result[3] = 0;
                result[4] = ySf;
                result[5] = 0;
                result[6] = toRange.getXMin() - this.getXMin() * xSf;
                result[7] = toRange.getYMin() - this.getYMin() * ySf;
                result[8] = 1;
                return result;
            }
            isPointInRange(point) {
                const x = point.getX();
                const y = point.getY();
                return x >= this.getXMin() && x <= this.getXMax() && y >= this.getYMin() && y <= this.getYMax();
            }
            doesRangeIntersect(range) {
                return (Math.abs((this[0] + this[1]) - (range[0] + range[1])) < (this.getXRange() + range.getXRange()))
                    && (Math.abs(((this[2] + this[3])) - (range[2] + range[3])) < (this.getYRange() + range.getYRange()));
            }
            containsRange(range) {
                return this.getXMin() <= range.getXMin()
                    && this.getXMax() >= range.getXMax()
                    && this.getYMin() <= range.getYMin()
                    && this.getYMax() >= range.getYMax();
            }
            scaleRelativeTo(scalingFactor, relativeTo, result = this.constructor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.assert(this.isPointInRange(relativeTo), "relativeTo must be inside the range");
                const difference = this
                    .getCenter(this.constructor.tmpVec)
                    .subtract(relativeTo, this.constructor.tmpVec);
                // multiply by 2 as we want to compare to half the range
                // make the difference relative, varies from -1 to 1
                difference.setX(2 * difference.getX() / this.getXRange());
                difference.setY(2 * difference.getY() / this.getYRange());
                const newXRange = this.getXRange() * scalingFactor;
                const newYRange = this.getYRange() * scalingFactor;
                const halfXDiff = 0.5 * (this.getXRange() - newXRange);
                const halfYDiff = 0.5 * (this.getYRange() - newYRange);
                const newXMin = this.getXMin() + halfXDiff - halfXDiff * difference.getX();
                result.setXMin(newXMin);
                result.setXMax(newXMin + newXRange);
                const newYMin = this.getYMin() + halfYDiff - halfYDiff * difference.getY();
                result.setYMin(newYMin);
                result.setYMax(newYMin + newYRange);
                return result;
            }
            bound(boundTo) {
                if (this.getXRange() > boundTo.getXRange()) {
                    this.setXMin(boundTo.getXMin());
                    this.setXMax(boundTo.getXMax());
                }
                else if (this.getXMax() > boundTo.getXMax()) {
                    const range = this.getXRange();
                    this.setXMax(boundTo.getXMax());
                    this.setXMin(boundTo.getXMax() - range);
                }
                else if (this.getXMin() < boundTo.getXMin()) {
                    const range = this.getXRange();
                    this.setXMin(boundTo.getXMin());
                    this.setXMax(boundTo.getXMin() + range);
                }
                if (this.getYRange() > boundTo.getYRange()) {
                    this.setYMin(boundTo.getYMin());
                    this.setYMax(boundTo.getYMax());
                }
                else if (this.getYMax() > boundTo.getYMax()) {
                    const range = this.getYRange();
                    this.setYMax(boundTo.getYMax());
                    this.setYMin(boundTo.getYMax() - range);
                }
                else if (this.getYMin() < boundTo.getYMin()) {
                    const range = this.getYRange();
                    this.setYMin(boundTo.getYMin());
                    this.setYMax(boundTo.getYMin() + range);
                }
            }
            ensureAABB() {
                if (this[0] > this[1]) {
                    const tmp = this[0];
                    this[0] = this[1];
                    this[1] = tmp;
                }
                if (this[2] > this[3]) {
                    const tmp = this[2];
                    this[2] = this[3];
                    this[3] = tmp;
                }
            }
            ensureMinRange(xMinRange, yMinRange) {
                const xRange = this.getXRange();
                if (xRange < xMinRange) {
                    const diff = (xMinRange - xRange) * 0.5;
                    this.setXMin(this.getXMin() - diff);
                    this.setXMax(this.getXMax() + diff);
                }
                const yRange = this.getYRange();
                if (yRange < yMinRange) {
                    const diff = (yMinRange - yRange) * 0.5;
                    this.setYMin(this.getYMin() - diff);
                    this.setYMax(this.getYMax() + diff);
                }
            }
            translateBy(dx, dy) {
                this.setXMin(this.getXMin() + dx);
                this.setXMax(this.getXMax() + dx);
                this.setYMin(this.getYMin() + dy);
                this.setYMax(this.getYMax() + dy);
            }
        },
        _a.factory = new mat2_factory_1.Mat2Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a.vec2Ctor = vec2_1.Vec2.getCtor(ctor),
        _a.mat3Ctor = mat3_1.Mat3.getCtor(ctor),
        _a.tmpVec = _a.vec2Ctor.factory.createOneEmpty(),
        _a;
}
exports.getRange2dCtor = getRange2dCtor;
//# sourceMappingURL=get-range2d-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/range2d.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/range2d.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range2d = void 0;
const mat2_1 = __webpack_require__(/*! ../../mat2/mat2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2.js");
const get_range2d_ctor_1 = __webpack_require__(/*! ./get-range2d-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/get-range2d-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * 2x2 matrix representing a 2d range.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Range2d extends mat2_1.Mat2 {
    static getCtor(ctor) {
        return Range2d.constructors.get(ctor);
    }
    setXMin(_value) {
        throw new Error();
    }
    setXMax(_value) {
        throw new Error();
    }
    setYMin(_value) {
        throw new Error();
    }
    setYMax(_value) {
        throw new Error();
    }
    getXMin() {
        throw new Error();
    }
    getXMax() {
        throw new Error();
    }
    getYMin() {
        throw new Error();
    }
    getYMax() {
        throw new Error();
    }
    update(..._args) {
        throw new Error();
    }
    getRange(_result) {
        throw new Error();
    }
    getXRange() {
        throw new Error();
    }
    getYRange() {
        throw new Error();
    }
    getXMaxAbs() {
        throw new Error();
    }
    getYMaxAbs() {
        throw new Error();
    }
    getCenter(_result) {
        throw new Error();
    }
    getXCenter() {
        throw new Error();
    }
    getYCenter() {
        throw new Error();
    }
    mat3Multiply(_mat, _writeTo) {
        throw new Error();
    }
    unionRange(_range, _writeTo) {
        throw new Error();
    }
    extendRange(_x, _y, _writeTo) {
        throw new Error();
    }
    /**
     * Creates a transform matrix that maps values in this range onto `_toRange`.
     */
    getRangeTransform(_toRange, _result) {
        throw new Error();
    }
    isPointInRange(_point) {
        throw new Error();
    }
    doesRangeIntersect(_range) {
        throw new Error();
    }
    containsRange(_range) {
        throw new Error();
    }
    /* eslint-disable no-irregular-whitespace */
    /**
     * Scales the range relative to a point (may not be outside of the range).
     *
     * @remarks
     * If the point is at a boundary, then the range will be scaled such that that boundary is not changed. Where the
     * point is away from a boundary, the updated range will have boundaries proportional to the distance from the center
     * of the range.
     *
     * E.g. scaling factor of 0.5, P represents the position of the point in the range:
     *```
     * XMin                      XMax
     *  |P-------------------------|
     *  |-------------|
     *
     *  |------------P-------------|
     *        |-------------|
     *```
     */
    /* eslint-enable no-irregular-whitespace */
    scaleRelativeTo(_scalingFactor, _relativeTo, _result) {
        throw new Error();
    }
    /**
     * Bound this range to the argument.
     *
     * @remarks
     * Where this range is larger than the bounding range, it will be resized to fit.
     * Where this range is smaller than the bounding range but not contained, it will be moved maintaining its size. It
     * Will be moved such that the the side furthest from the bounding range will be at the edge of the boundary.
     */
    bound(_boundTo) {
        throw new Error();
    }
    ensureAABB() {
        throw new Error();
    }
    /**
     * Bound this range to be at least as large as the argument.
     *
     * @remarks
     * Where this range is smaller than the bounding range, it will be resized to be the minimum. This is done by adding
     * equally to both the min and max.
     */
    ensureMinRange(_xMinRange, _yMinRange) {
        throw new Error();
    }
    /**
     * Shifts the range by (dx, dy).
     */
    translateBy(_dx, _dy) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Range2d = Range2d;
Range2d.f64 = (0, get_range2d_ctor_1.getRange2dCtor)(Float64Array);
Range2d.f32 = (0, get_range2d_ctor_1.getRange2dCtor)(Float32Array);
Range2d.u32 = (0, get_range2d_ctor_1.getRange2dCtor)(Uint32Array);
Range2d.i32 = (0, get_range2d_ctor_1.getRange2dCtor)(Int32Array);
Range2d.u16 = (0, get_range2d_ctor_1.getRange2dCtor)(Uint16Array);
Range2d.i16 = (0, get_range2d_ctor_1.getRange2dCtor)(Int16Array);
Range2d.u8c = (0, get_range2d_ctor_1.getRange2dCtor)(Uint8ClampedArray);
Range2d.u8 = (0, get_range2d_ctor_1.getRange2dCtor)(Uint8Array);
Range2d.i8 = (0, get_range2d_ctor_1.getRange2dCtor)(Int8Array);
Range2d.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Range2d);
//# sourceMappingURL=range2d.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ATypedArrayTuple = void 0;
/**
 * @public
 * Common methods of typed arrays, extend to make typed array tuples.
 */
class ATypedArrayTuple {
    /**
     * Returns the this object after copying a section of the array identified by start and end
     * to the same array starting at position target
     * @param _target - If target is negative, it is treated as length+target where length is the
     * length of the array.
     * @param _start - If start is negative, it is treated as length+start. If end is negative, it
     * is treated as length+end.
     * @param _end - If not specified, length of the this object is used as its default value.
     */
    copyWithin(_target, _start, _end) {
        throw new Error();
    }
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param _callbackfn - A function that accepts up to three arguments. The every method calls
     * the _callbackfn function for each element in array1 until the _callbackfn returns false,
     * or until the end of the array.
     * @param _thisArg - An object to which the this keyword can refer in the _callbackfn function.
     * If _thisArg is omitted, undefined is used as the this value.
     */
    every(_callbackfn, _thisArg) {
        throw new Error();
    }
    /**
     * Returns the this object after filling the section identified by start and end with value
     * @param _value - value to fill array section with
     * @param _start - index to start filling the array at. If start is negative, it is treated as
     * length+start where length is the length of the array.
     * @param _end - index to stop filling the array at. If end is negative, it is treated as
     * length+end.
     */
    fill(_value, _start, _end) {
        throw new Error();
    }
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param _callbackfn - A function that accepts up to three arguments. The filter method calls
     * the _callbackfn function one time for each element in the array.
     * @param _thisArg - An object to which the this keyword can refer in the _callbackfn function.
     * If _thisArg is omitted, undefined is used as the this value.
     */
    filter(_callbackfn, _thisArg) {
        throw new Error();
    }
    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param _predicate - find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param _thisArg - If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    find(_predicate, _thisArg) {
        throw new Error();
    }
    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     * @param _predicate - find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param _thisArg - If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    findIndex(_predicate, _thisArg) {
        throw new Error();
    }
    /**
     * Performs the specified action for each element in an array.
     * @param _callbackfn -  A function that accepts up to three arguments. forEach calls the
     * _callbackfn function one time for each element in the array.
     * @param _thisArg -  An object to which the this keyword can refer in the _callbackfn function.
     * If _thisArg is omitted, undefined is used as the this value.
     */
    forEach(_callbackfn, _thisArg) {
        throw new Error();
    }
    /**
     * Returns the index of the first occurrence of a value in an array.
     * @param _searchElement - The value to locate in the array.
     * @param _fromIndex - The array index at which to begin the search. If fromIndex is omitted, the
     *  search starts at index 0.
     */
    indexOf(_searchElement, _fromIndex) {
        throw new Error();
    }
    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param _separator - A string used to separate one element of an array from the next in the
     * resulting String. If omitted, the array elements are separated with a comma.
     */
    join(_separator) {
        throw new Error();
    }
    /**
     * Returns the index of the last occurrence of a value in an array.
     * @param _searchElement - The value to locate in the array.
     * @param _fromIndex - The array index at which to begin the search. If fromIndex is omitted, the
     * search starts at index 0.
     */
    lastIndexOf(_searchElement, _fromIndex) {
        throw new Error();
    }
    /**
     * Calls a defined callback function on each element of an array, and returns an array that
     * contains the results.
     * @param _callbackfn - A function that accepts up to three arguments. The map method calls the
     * _callbackfn function one time for each element in the array.
     * @param _thisArg - An object to which the this keyword can refer in the _callbackfn function.
     * If _thisArg is omitted, undefined is used as the this value.
     */
    map(_callbackfn, _thisArg) {
        throw new Error();
    }
    reduce(__callbackfn, _initialValue) {
        throw new Error();
    }
    reduceRight(__callbackfn, _initialValue) {
        throw new Error();
    }
    /**
     * Reverses the elements in an Array.
     */
    reverse() {
        throw Error();
    }
    set(_array, _offset) {
        throw new Error();
    }
    slice(_start, _end) {
        throw new Error();
    }
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param _callbackfn - A function that accepts up to three arguments. The some method calls the
     * _callbackfn function for each element in array1 until the _callbackfn returns true, or until
     * the end of the array.
     * @param _thisArg - An object to which the this keyword can refer in the _callbackfn function.
     * If _thisArg is omitted, undefined is used as the this value.
     */
    some(_callbackfn, _thisArg) {
        throw new Error();
    }
    /**
     * Sorts an array.
     * @param _compareFn - The name of the function used to determine the order of the elements. If
     * omitted, the elements are sorted in ascending, ASCII character order.
     */
    sort(_compareFn) {
        throw new Error();
    }
    /**
     * Gets a new this view of the ArrayBuffer store for this array, referencing the elements
     * at begin, inclusive, up to end, exclusive.
     * @param _begin - The index of the beginning of the array.
     * @param _end - The index of the end of the array.
     */
    subarray(_begin, _end) {
        throw new Error();
    }
    /**
     * Converts a number to a string by using the current locale.
     */
    toLocaleString() {
        throw new Error();
    }
    /**
     * Returns a string representation of an array.
     */
    toString() {
        throw new Error();
    }
}
exports.ATypedArrayTuple = ATypedArrayTuple;
//# sourceMappingURL=a-typed-array-tuple.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ATypedTupleFactory = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class ATypedTupleFactory {
    constructor(length, bytesPerElement, dataView) {
        this.length = length;
        this.bytesPerElement = bytesPerElement;
        this.dataView = dataView;
    }
    copyFromBuffer(memoryDataView, pointer, writeTo = this.createOneEmpty(), littleEndian = ATypedTupleFactory.littleEndian) {
        const bytesPerElement = this.bytesPerElement;
        for (let i = 0, iEnd = this.length; i < iEnd; ++i) {
            writeTo[i] = this.dataView.getValue(memoryDataView, pointer, littleEndian);
            pointer += bytesPerElement;
        }
        return writeTo;
    }
    copyToBuffer(memoryDataView, writeFrom, pointer, littleEndian = ATypedTupleFactory.littleEndian) {
        const bytesPerElement = this.bytesPerElement;
        for (let i = 0, iEnd = this.length; i < iEnd; ++i) {
            this.dataView.setValue(memoryDataView, pointer, writeFrom[i], littleEndian);
            pointer += bytesPerElement;
        }
    }
}
exports.ATypedTupleFactory = ATypedTupleFactory;
ATypedTupleFactory.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=a-typed-tuple-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/get-mat2-ctor.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/get-mat2-ctor.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMat2Ctor = void 0;
const mat2_factory_1 = __webpack_require__(/*! ./mat2-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2-factory.js");
const _debug_1 = __webpack_require__(/*! ../../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const vec2_1 = __webpack_require__(/*! ../vec2/vec2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2.js");
/**
 * @internal
 */
function getMat2Ctor(ctor) {
    var _a;
    return _a = class Mat2Impl extends ctor {
            constructor(bufferOrLength = 4, offset, length) {
                super(bufferOrLength, offset, length);
            }
            update(a1, a2, a3, a4) {
                this[0] = a1;
                this[1] = a2;
                this[2] = a3;
                this[3] = a4;
            }
            setIdentityMatrix() {
                this[0] = 1;
                this[1] = 0;
                this[2] = 0;
                this[3] = 1;
                return this;
            }
            getValueAt(column, row) {
                DEBUG_MODE && _debug_1._Debug.assert(column >= 0 && column < 2 && row >= 0 && row < 2, "out of bounds");
                return this[row * 2 + column];
            }
            setValueAt(column, row, value) {
                DEBUG_MODE && _debug_1._Debug.assert(column >= 0 && column < 2 && row >= 0 && row < 2, "out of bounds");
                this[row * 2 + column] = value;
            }
            setScalingMatrix(scalingFactor) {
                this[0] = scalingFactor;
                this[1] = 0;
                this[2] = 0;
                this[3] = 1;
                return this;
            }
            setTranslationMatrix(translation) {
                this[0] = 1;
                this[1] = 0;
                this[2] = translation;
                this[3] = 1;
                return this;
            }
            multiplyMat2(mat, result = this.constructor.factory.createOneEmpty()) {
                const [a0, a1, a2, a3] = this;
                const [b0, b1, b2, b3] = mat;
                result[0] = a0 * b0 + a1 * b2;
                result[1] = a0 * b1 + a1 * b3;
                result[2] = a2 * b0 + a3 * b2;
                result[3] = a2 * b1 + a3 * b3;
                return result;
            }
            getVec2MultiplyX(x) {
                return this[0] * x + this[2];
            }
            getRow(row, writeTo = this.constructor.vec2Ctor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.assert(row >= 0 && row < 2, "index out of bounds");
                writeTo[0] = this.getValueAt(0, row);
                writeTo[1] = this.getValueAt(1, row);
                return writeTo;
            }
            setRow(row, writeFrom) {
                DEBUG_MODE && _debug_1._Debug.assert(row >= 0 && row < 2, "index out of bounds");
                this.setValueAt(0, row, writeFrom[0]);
                this.setValueAt(1, row, writeFrom[1]);
            }
            getLoggableValue() {
                return [
                    [this[0], this[1]],
                    [this[2], this[3]],
                ];
            }
            copyFromBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyFromBuffer(memoryDataView, pointer, this, littleEndian);
            }
            copyToBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyToBuffer(memoryDataView, this, pointer, littleEndian);
            }
            castToBaseType() {
                return this;
            }
        },
        _a.factory = new mat2_factory_1.Mat2Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a.vec2Ctor = vec2_1.Vec2.getCtor(ctor),
        _a;
}
exports.getMat2Ctor = getMat2Ctor;
//# sourceMappingURL=get-mat2-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2-factory.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2-factory.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mat2Factory = void 0;
const a_typed_tuple_factory_1 = __webpack_require__(/*! ../a-typed-tuple-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js");
class Mat2Factory extends a_typed_tuple_factory_1.ATypedTupleFactory {
    constructor(ctor, dataView) {
        super(4, ctor.BYTES_PER_ELEMENT, dataView);
        this.ctor = ctor;
    }
    createOne(c1r1, c1r2, c2r1, c2r2) {
        const a = this.createOneEmpty();
        a[0] = c1r1;
        a[1] = c1r2;
        a[2] = c2r1;
        a[3] = c2r2;
        return a;
    }
    createOneEmpty() {
        return new this.ctor();
    }
    copyFromBuffer(memoryDataView, pointer, writeTo = this.createOneEmpty(), littleEndian = Mat2Factory.littleEndian) {
        writeTo[0] = this.dataView.getValue(memoryDataView, pointer, littleEndian);
        writeTo[1] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        writeTo[2] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        writeTo[3] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        return writeTo;
    }
    copyToBuffer(memoryDataView, writeFrom, pointer, littleEndian = Mat2Factory.littleEndian) {
        this.dataView.setValue(memoryDataView, pointer, writeFrom[0], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[1], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[2], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[3], littleEndian);
    }
}
exports.Mat2Factory = Mat2Factory;
//# sourceMappingURL=mat2-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mat2 = void 0;
const a_typed_array_tuple_1 = __webpack_require__(/*! ../a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
const get_mat2_ctor_1 = __webpack_require__(/*! ./get-mat2-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/get-mat2-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * Row major 2x2 matrix.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Mat2 extends a_typed_array_tuple_1.ATypedArrayTuple {
    static getCtor(ctor) {
        return Mat2.constructors.get(ctor);
    }
    update(..._args) {
        throw new Error();
    }
    setIdentityMatrix() {
        throw new Error();
    }
    getValueAt(_column, _row) {
        throw new Error();
    }
    setValueAt(_column, _row, _value) {
        throw new Error();
    }
    setScalingMatrix(_scalingFactor) {
        throw new Error();
    }
    setTranslationMatrix(_translation) {
        throw new Error();
    }
    multiplyMat2(_mat, _result) {
        throw new Error();
    }
    getVec2MultiplyX(_x) {
        throw new Error();
    }
    getRow(_row, _writeTo) {
        throw new Error();
    }
    setRow(_row, _writeFrom) {
        throw new Error();
    }
    getLoggableValue() {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Mat2 = Mat2;
Mat2.f64 = (0, get_mat2_ctor_1.getMat2Ctor)(Float64Array);
Mat2.f32 = (0, get_mat2_ctor_1.getMat2Ctor)(Float32Array);
Mat2.u32 = (0, get_mat2_ctor_1.getMat2Ctor)(Uint32Array);
Mat2.i32 = (0, get_mat2_ctor_1.getMat2Ctor)(Int32Array);
Mat2.u16 = (0, get_mat2_ctor_1.getMat2Ctor)(Uint16Array);
Mat2.i16 = (0, get_mat2_ctor_1.getMat2Ctor)(Int16Array);
Mat2.u8c = (0, get_mat2_ctor_1.getMat2Ctor)(Uint8ClampedArray);
Mat2.u8 = (0, get_mat2_ctor_1.getMat2Ctor)(Uint8Array);
Mat2.i8 = (0, get_mat2_ctor_1.getMat2Ctor)(Int8Array);
Mat2.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Mat2);
//# sourceMappingURL=mat2.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/get-mat3-ctor.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/get-mat3-ctor.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMat3Ctor = void 0;
const mat3_factory_1 = __webpack_require__(/*! ./mat3-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3-factory.js");
const _debug_1 = __webpack_require__(/*! ../../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const vec3_1 = __webpack_require__(/*! ../vec3/vec3 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3.js");
/**
 * @internal
 */
function getMat3Ctor(ctor) {
    var _a;
    return _a = class Mat3Impl extends ctor {
            constructor(bufferOrLength = 9, offset, length) {
                super(bufferOrLength, offset, length);
            }
            setIdentityMatrix() {
                this.fill(0);
                this[0] = 1;
                this[4] = 1;
                this[8] = 1;
                return this;
            }
            getValueAt(column, row) {
                DEBUG_MODE && _debug_1._Debug.assert(column >= 0 && column < 3 && row >= 0 && row < 3, "out of bounds");
                return this[row * 3 + column];
            }
            setValueAt(column, row, value) {
                DEBUG_MODE && _debug_1._Debug.assert(column >= 0 && column < 3 && row >= 0 && row < 3, "out of bounds");
                this[row * 3 + column] = value;
            }
            getRow(row, writeTo = this.constructor.vec3Ctor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.assert(row >= 0 && row < 3, "index out of bounds");
                writeTo[0] = this.getValueAt(0, row);
                writeTo[1] = this.getValueAt(1, row);
                writeTo[2] = this.getValueAt(2, row);
                return writeTo;
            }
            setRow(row, writeFrom) {
                DEBUG_MODE && _debug_1._Debug.assert(row >= 0 && row < 3, "index out of bounds");
                this.setValueAt(0, row, writeFrom[0]);
                this.setValueAt(1, row, writeFrom[1]);
                this.setValueAt(2, row, writeFrom[2]);
            }
            setRotationMatrix(angle) {
                const sine = Math.sin(angle);
                const cosine = Math.cos(angle);
                this[0] = cosine;
                this[1] = -sine;
                this[2] = 0;
                this[3] = sine;
                this[4] = cosine;
                this[5] = 0;
                this[6] = 0;
                this[7] = 0;
                this[8] = 1;
                return this;
            }
            setScalingMatrix(scalingFactorX, scalingFactorY) {
                this[0] = scalingFactorX;
                this[1] = 0;
                this[2] = 0;
                this[3] = 0;
                this[4] = scalingFactorY;
                this[5] = 0;
                this[6] = 0;
                this[7] = 0;
                this[8] = 1;
                return this;
            }
            setTranslationMatrix(translationX, translationY) {
                this[0] = 1;
                this[1] = 0;
                this[2] = 0;
                this[3] = 0;
                this[4] = 1;
                this[5] = 0;
                this[6] = translationX;
                this[7] = translationY;
                this[8] = 1;
                return this;
            }
            multiplyMat3(mat, result = this.constructor.factory.createOneEmpty()) {
                const [a0, a1, a2, a3, a4, a5, a6, a7, a8] = this;
                const [b0, b1, b2, b3, b4, b5, b6, b7, b8] = mat;
                result[0] = a0 * b0 + a1 * b3 + a2 * b6;
                result[1] = a0 * b1 + a1 * b4 + a2 * b7;
                result[2] = a0 * b2 + a1 * b5 + a2 * b8;
                result[3] = a3 * b0 + a4 * b3 + a5 * b6;
                result[4] = a3 * b1 + a4 * b4 + a5 * b7;
                result[5] = a3 * b2 + a4 * b5 + a5 * b8;
                result[6] = a6 * b0 + a7 * b3 + a8 * b6;
                result[7] = a6 * b1 + a7 * b4 + a8 * b7;
                result[8] = a6 * b2 + a7 * b5 + a8 * b8;
                return result;
            }
            getVec3MultiplyX(x) {
                return this[0] * x + this[3] * x + this[6];
            }
            getVec3MultiplyY(y) {
                return this[1] * y + this[4] * y + this[7];
            }
            getTransformedXLength(min, max) {
                return this.getVec3MultiplyX(max) - this.getVec3MultiplyX(min);
            }
            getTransformedYLength(min, max) {
                return this.getVec3MultiplyY(max) - this.getVec3MultiplyY(min);
            }
            getLoggableValue() {
                return [
                    [this[0], this[1], this[2]],
                    [this[3], this[4], this[5]],
                    [this[6], this[7], this[8]],
                ];
            }
            copyFromBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyFromBuffer(memoryDataView, pointer, this, littleEndian);
            }
            copyToBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyToBuffer(memoryDataView, this, pointer, littleEndian);
            }
            castToBaseType() {
                return this;
            }
        },
        _a.factory = new mat3_factory_1.Mat3Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a.vec3Ctor = vec3_1.Vec3.getCtor(ctor),
        _a;
}
exports.getMat3Ctor = getMat3Ctor;
//# sourceMappingURL=get-mat3-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3-factory.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3-factory.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mat3Factory = void 0;
const a_typed_tuple_factory_1 = __webpack_require__(/*! ../a-typed-tuple-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js");
class Mat3Factory extends a_typed_tuple_factory_1.ATypedTupleFactory {
    constructor(ctor, dataView) {
        super(9, ctor.BYTES_PER_ELEMENT, dataView);
        this.ctor = ctor;
    }
    createOneEmpty() {
        return new this.ctor();
    }
    createOne(c1r1, c2r1, c3r1, c1r2, c2r2, c3r2, c1r3, c2r3, c3r3) {
        const a = this.createOneEmpty();
        a[0] = c1r1;
        a[1] = c2r1;
        a[2] = c3r1;
        a[3] = c1r2;
        a[4] = c2r2;
        a[5] = c3r2;
        a[6] = c1r3;
        a[7] = c2r3;
        a[8] = c3r3;
        return a;
    }
}
exports.Mat3Factory = Mat3Factory;
//# sourceMappingURL=mat3-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mat3 = void 0;
const a_typed_array_tuple_1 = __webpack_require__(/*! ../a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
const get_mat3_ctor_1 = __webpack_require__(/*! ./get-mat3-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/get-mat3-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * Row major 3x3 matrix.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Mat3 extends a_typed_array_tuple_1.ATypedArrayTuple {
    static getCtor(ctor) {
        return Mat3.constructors.get(ctor);
    }
    setIdentityMatrix() {
        throw new Error();
    }
    getValueAt(_column, _row) {
        throw new Error();
    }
    setValueAt(_column, _row, _value) {
        throw new Error();
    }
    getRow(_row, _writeTo) {
        throw new Error();
    }
    setRow(_row, _writeFrom) {
        throw new Error();
    }
    /**
     * counter clockwise, in radians
     */
    setRotationMatrix(_angle) {
        throw new Error();
    }
    setScalingMatrix(_scalingFactorX, _scalingFactorY) {
        throw new Error();
    }
    setTranslationMatrix(_translationX, _translationY) {
        throw new Error();
    }
    multiplyMat3(_mat, _result) {
        throw new Error();
    }
    getVec3MultiplyX(_x) {
        throw new Error();
    }
    getVec3MultiplyY(_y) {
        throw new Error();
    }
    /**
     * Apply this transform as if it were x in a vec3 to both min and max, return the difference.
     */
    getTransformedXLength(_min, _max) {
        throw new Error();
    }
    /**
     * Apply this transform as if it were y in a vec3 to both min and max, return the difference.
     */
    getTransformedYLength(_min, _max) {
        throw new Error();
    }
    getLoggableValue() {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Mat3 = Mat3;
Mat3.f64 = (0, get_mat3_ctor_1.getMat3Ctor)(Float64Array);
Mat3.f32 = (0, get_mat3_ctor_1.getMat3Ctor)(Float32Array);
Mat3.u32 = (0, get_mat3_ctor_1.getMat3Ctor)(Uint32Array);
Mat3.i32 = (0, get_mat3_ctor_1.getMat3Ctor)(Int32Array);
Mat3.u16 = (0, get_mat3_ctor_1.getMat3Ctor)(Uint16Array);
Mat3.i16 = (0, get_mat3_ctor_1.getMat3Ctor)(Int16Array);
Mat3.u8c = (0, get_mat3_ctor_1.getMat3Ctor)(Uint8ClampedArray);
Mat3.u8 = (0, get_mat3_ctor_1.getMat3Ctor)(Uint8Array);
Mat3.i8 = (0, get_mat3_ctor_1.getMat3Ctor)(Int8Array);
Mat3.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Mat3);
//# sourceMappingURL=mat3.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/get-mat4-ctor.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/get-mat4-ctor.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMat4Ctor = void 0;
const mat4_factory_1 = __webpack_require__(/*! ./mat4-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/mat4-factory.js");
const _debug_1 = __webpack_require__(/*! ../../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const vec4_1 = __webpack_require__(/*! ../vec4/vec4 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4.js");
/**
 * @internal
 */
function getMat4Ctor(ctor) {
    var _a;
    return _a = class Mat4Impl extends ctor {
            constructor(bufferOrLength = 16, offset, length) {
                super(bufferOrLength, offset, length);
            }
            setIdentityMatrix() {
                this.fill(0);
                this[0] = 1;
                this[5] = 1;
                this[10] = 1;
                this[15] = 1;
                return this;
            }
            getValueAt(column, row) {
                DEBUG_MODE && _debug_1._Debug.assert(column >= 0 && column < 4 && row >= 0 && row < 4, "out of bounds");
                return this[row * 4 + column];
            }
            setValueAt(column, row, value) {
                DEBUG_MODE && _debug_1._Debug.assert(column >= 0 && column < 4 && row >= 0 && row < 4, "out of bounds");
                this[row * 4 + column] = value;
            }
            getRow(row, writeTo = this.constructor.vec4Ctor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.assert(row >= 0 && row < 4, "index out of bounds");
                writeTo[0] = this.getValueAt(0, row);
                writeTo[1] = this.getValueAt(1, row);
                writeTo[2] = this.getValueAt(2, row);
                writeTo[3] = this.getValueAt(3, row);
                return writeTo;
            }
            setRow(row, writeFrom) {
                DEBUG_MODE && _debug_1._Debug.assert(row >= 0 && row < 4, "index out of bounds");
                this.setValueAt(0, row, writeFrom[0]);
                this.setValueAt(1, row, writeFrom[1]);
                this.setValueAt(2, row, writeFrom[2]);
                this.setValueAt(3, row, writeFrom[3]);
            }
            getLoggableValue() {
                return [
                    [this[0], this[1], this[2], this[3]],
                    [this[4], this[5], this[6], this[7]],
                    [this[8], this[9], this[10], this[11]],
                    [this[12], this[13], this[14], this[15]],
                ];
            }
            copyFromBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyFromBuffer(memoryDataView, pointer, this, littleEndian);
            }
            copyToBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyToBuffer(memoryDataView, this, pointer, littleEndian);
            }
            castToBaseType() {
                return this;
            }
        },
        _a.factory = new mat4_factory_1.Mat4Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a.vec4Ctor = vec4_1.Vec4.getCtor(ctor),
        _a;
}
exports.getMat4Ctor = getMat4Ctor;
//# sourceMappingURL=get-mat4-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/mat4-factory.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/mat4-factory.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mat4Factory = void 0;
const a_typed_tuple_factory_1 = __webpack_require__(/*! ../a-typed-tuple-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js");
class Mat4Factory extends a_typed_tuple_factory_1.ATypedTupleFactory {
    constructor(ctor, dataView) {
        super(16, ctor.BYTES_PER_ELEMENT, dataView);
        this.ctor = ctor;
    }
    createOneEmpty() {
        return new this.ctor();
    }
    createOne(c1r1, c2r1, c3r1, c4r1, c1r2, c2r2, c3r2, c4r2, c1r3, c2r3, c3r3, c4r3, c1r4, c2r4, c3r4, c4r4) {
        const a = this.createOneEmpty();
        a[0] = c1r1;
        a[1] = c2r1;
        a[2] = c3r1;
        a[3] = c4r1;
        a[4] = c1r2;
        a[5] = c2r2;
        a[6] = c3r2;
        a[7] = c4r2;
        a[8] = c1r3;
        a[9] = c2r3;
        a[10] = c3r3;
        a[11] = c4r3;
        a[12] = c1r4;
        a[13] = c2r4;
        a[14] = c3r4;
        a[15] = c4r4;
        return a;
    }
}
exports.Mat4Factory = Mat4Factory;
//# sourceMappingURL=mat4-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/mat4.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/mat4.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mat4 = void 0;
const a_typed_array_tuple_1 = __webpack_require__(/*! ../a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
const get_mat4_ctor_1 = __webpack_require__(/*! ./get-mat4-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/get-mat4-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * Row major 4x4 matrix.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Mat4 extends a_typed_array_tuple_1.ATypedArrayTuple {
    static getCtor(ctor) {
        return Mat4.constructors.get(ctor);
    }
    setIdentityMatrix() {
        throw new Error();
    }
    getValueAt(_column, _row) {
        throw new Error();
    }
    setValueAt(_column, _row, _value) {
        throw new Error();
    }
    getRow(_row, _writeTo) {
        throw new Error();
    }
    setRow(_row, _writeFrom) {
        throw new Error();
    }
    getLoggableValue() {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Mat4 = Mat4;
Mat4.f64 = (0, get_mat4_ctor_1.getMat4Ctor)(Float64Array);
Mat4.f32 = (0, get_mat4_ctor_1.getMat4Ctor)(Float32Array);
Mat4.u32 = (0, get_mat4_ctor_1.getMat4Ctor)(Uint32Array);
Mat4.i32 = (0, get_mat4_ctor_1.getMat4Ctor)(Int32Array);
Mat4.u16 = (0, get_mat4_ctor_1.getMat4Ctor)(Uint16Array);
Mat4.i16 = (0, get_mat4_ctor_1.getMat4Ctor)(Int16Array);
Mat4.u8c = (0, get_mat4_ctor_1.getMat4Ctor)(Uint8ClampedArray);
Mat4.u8 = (0, get_mat4_ctor_1.getMat4Ctor)(Uint8Array);
Mat4.i8 = (0, get_mat4_ctor_1.getMat4Ctor)(Int8Array);
Mat4.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Mat4);
//# sourceMappingURL=mat4.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/float32-data-view.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/float32-data-view.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Float32DataView = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class Float32DataView {
    getValue(dataView, ptr, littleEndian = Float32DataView.littleEndian) {
        return dataView.getFloat32(ptr, littleEndian);
    }
    setValue(dataView, ptr, value, littleEndian = Float32DataView.littleEndian) {
        dataView.setFloat32(ptr, value, littleEndian);
    }
}
exports.Float32DataView = Float32DataView;
Float32DataView.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=float32-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/float64-data-view.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/float64-data-view.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Float64DataView = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class Float64DataView {
    getValue(dataView, ptr, littleEndian = Float64DataView.littleEndian) {
        return dataView.getFloat64(ptr, littleEndian);
    }
    setValue(dataView, ptr, value, littleEndian = Float64DataView.littleEndian) {
        dataView.setFloat64(ptr, value, littleEndian);
    }
}
exports.Float64DataView = Float64DataView;
Float64DataView.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=float64-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int16-data-view.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int16-data-view.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Int16DataView = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class Int16DataView {
    getValue(dataView, ptr, littleEndian = Int16DataView.littleEndian) {
        return dataView.getInt16(ptr, littleEndian);
    }
    setValue(dataView, ptr, value, littleEndian = Int16DataView.littleEndian) {
        dataView.setInt16(ptr, value, littleEndian);
    }
}
exports.Int16DataView = Int16DataView;
Int16DataView.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=int16-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int32-data-view.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int32-data-view.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Int32DataView = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class Int32DataView {
    getValue(dataView, ptr, littleEndian = Int32DataView.littleEndian) {
        return dataView.getInt32(ptr, littleEndian);
    }
    setValue(dataView, ptr, value, littleEndian = Int32DataView.littleEndian) {
        dataView.setInt32(ptr, value, littleEndian);
    }
}
exports.Int32DataView = Int32DataView;
Int32DataView.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=int32-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int8-data-view.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int8-data-view.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Int8DataView = void 0;
class Int8DataView {
    getValue(dataView, ptr) {
        return dataView.getInt8(ptr);
    }
    setValue(dataView, ptr, value) {
        dataView.setInt8(ptr, value);
    }
}
exports.Int8DataView = Int8DataView;
//# sourceMappingURL=int8-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NormalizedDataViewProvider = void 0;
const float64_data_view_1 = __webpack_require__(/*! ./float64-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/float64-data-view.js");
const float32_data_view_1 = __webpack_require__(/*! ./float32-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/float32-data-view.js");
const int32_data_view_1 = __webpack_require__(/*! ./int32-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int32-data-view.js");
const uint32_data_view_1 = __webpack_require__(/*! ./uint32-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint32-data-view.js");
const int16_data_view_1 = __webpack_require__(/*! ./int16-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int16-data-view.js");
const uint16_data_view_1 = __webpack_require__(/*! ./uint16-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint16-data-view.js");
const int8_data_view_1 = __webpack_require__(/*! ./int8-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/int8-data-view.js");
const uint8_data_view_1 = __webpack_require__(/*! ./uint8-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint8-data-view.js");
const uint8_clamped_data_view_1 = __webpack_require__(/*! ./uint8-clamped-data-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint8-clamped-data-view.js");
/**
 * @public
 * Provides {@link INormalizedDataView}.
 */
class NormalizedDataViewProvider {
    constructor() {
    }
    static getView(typedArrayCtor) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return NormalizedDataViewProvider.views.get(typedArrayCtor);
    }
}
exports.NormalizedDataViewProvider = NormalizedDataViewProvider;
NormalizedDataViewProvider.views = new Map([
    [Float64Array, new float64_data_view_1.Float64DataView()],
    [Float32Array, new float32_data_view_1.Float32DataView()],
    [Int32Array, new int32_data_view_1.Int32DataView()],
    [Uint32Array, new uint32_data_view_1.Uint32DataView()],
    [Int16Array, new int16_data_view_1.Int16DataView()],
    [Uint16Array, new uint16_data_view_1.Uint16DataView()],
    [Int8Array, new int8_data_view_1.Int8DataView()],
    [Uint8Array, new uint8_data_view_1.Uint8DataView()],
    [Uint8ClampedArray, new uint8_clamped_data_view_1.Uint8ClampedDataView()],
]);
//# sourceMappingURL=normalized-data-view-provider.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint16-data-view.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint16-data-view.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Uint16DataView = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class Uint16DataView {
    getValue(dataView, ptr, littleEndian = Uint16DataView.littleEndian) {
        return dataView.getUint16(ptr, littleEndian);
    }
    setValue(dataView, ptr, value, littleEndian = Uint16DataView.littleEndian) {
        dataView.setUint16(ptr, value, littleEndian);
    }
}
exports.Uint16DataView = Uint16DataView;
Uint16DataView.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=uint16-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint32-data-view.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint32-data-view.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Uint32DataView = void 0;
const is_little_endian_1 = __webpack_require__(/*! ../../../web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
class Uint32DataView {
    getValue(dataView, ptr, littleEndian = Uint32DataView.littleEndian) {
        return dataView.getUint32(ptr, littleEndian);
    }
    setValue(dataView, ptr, value, littleEndian = Uint32DataView.littleEndian) {
        dataView.setUint32(ptr, value, littleEndian);
    }
}
exports.Uint32DataView = Uint32DataView;
Uint32DataView.littleEndian = is_little_endian_1.isLittleEndian;
//# sourceMappingURL=uint32-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint8-clamped-data-view.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint8-clamped-data-view.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Uint8ClampedDataView = void 0;
class Uint8ClampedDataView {
    getValue(dataView, ptr) {
        return dataView.getUint8(ptr);
    }
    setValue(dataView, ptr, value) {
        dataView.setUint8(ptr, value);
    }
}
exports.Uint8ClampedDataView = Uint8ClampedDataView;
//# sourceMappingURL=uint8-clamped-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint8-data-view.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/uint8-data-view.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Uint8DataView = void 0;
class Uint8DataView {
    getValue(dataView, ptr) {
        return dataView.getUint8(ptr);
    }
    setValue(dataView, ptr, value) {
        dataView.setUint8(ptr, value);
    }
}
exports.Uint8DataView = Uint8DataView;
//# sourceMappingURL=uint8-data-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.populateTypedArrayConstructorMap = void 0;
/**
 * @internal
 */
function populateTypedArrayConstructorMap(constructors) {
    const m = new Map();
    m.set(Float64Array, constructors.f64);
    m.set(Float32Array, constructors.f32);
    m.set(Int32Array, constructors.i32);
    m.set(Uint32Array, constructors.u32);
    m.set(Int16Array, constructors.i16);
    m.set(Uint16Array, constructors.u16);
    m.set(Int8Array, constructors.i8);
    m.set(Uint8Array, constructors.u8);
    m.set(Uint8ClampedArray, constructors.u8c);
    return m;
}
exports.populateTypedArrayConstructorMap = populateTypedArrayConstructorMap;
//# sourceMappingURL=populate-typed-array-constructor-map.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/get-vec2-ctor.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/get-vec2-ctor.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVec2Ctor = void 0;
const vec2_factory_1 = __webpack_require__(/*! ./vec2-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2-factory.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
/**
 * @internal
 */
function getVec2Ctor(ctor) {
    var _a;
    return _a = class Vec2Impl extends ctor {
            constructor(bufferOrLength = 2, offset, length) {
                super(bufferOrLength, offset, length);
            }
            getX() {
                return this[0];
            }
            getY() {
                return this[1];
            }
            getMagnitude() {
                const x = this[0];
                const y = this[1];
                return Math.sqrt(x * x + y * y);
            }
            getMagnitudeSquared() {
                const x = this[0];
                const y = this[1];
                return x * x + y * y;
            }
            update(x, y) {
                this[0] = x;
                this[1] = y;
            }
            setX(x) {
                this[0] = x;
            }
            setY(y) {
                this[1] = y;
            }
            add(vec, result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[0] + vec[0];
                result[1] = this[1] + vec[1];
                return result;
            }
            subtract(vec, result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[0] - vec[0];
                result[1] = this[1] - vec[1];
                return result;
            }
            vec2Multiply(value, result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[0] * value[0];
                result[1] = this[1] * value[1];
                return result;
            }
            scalarMultiply(value, result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[0] * value;
                result[1] = this[1] * value;
                return result;
            }
            vec2Divide(value, result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[0] / value[0];
                result[1] = this[1] / value[1];
                return result;
            }
            scalarDivide(value, result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[0] / value;
                result[1] = this[1] / value;
                return result;
            }
            normalize(result = this.constructor.factory.createOneEmpty()) {
                const magnitude = this.getMagnitude();
                this.scalarDivide(magnitude, result);
                return result;
            }
            getNormal(result = this.constructor.factory.createOneEmpty()) {
                result[0] = this[1];
                result[1] = -this[0];
                return result;
            }
            dotProduct(vec) {
                return this[0] * vec[0] + this[1] * vec[1];
            }
            mat3Multiply(mat, result = this.constructor.factory.createOneEmpty()) {
                result[0] = mat[0] * this[0] + mat[3] * this[0] + mat[6];
                result[1] = mat[1] * this[1] + mat[4] * this[1] + mat[7];
                return result;
            }
            bound2d(range) {
                if (this[0] < range.getXMin()) {
                    this[0] = range.getXMin();
                }
                else if (this[0] > range.getXMax()) {
                    this[0] = range.getXMax();
                }
                if (this[1] < range.getYMin()) {
                    this[1] = range.getYMin();
                }
                else if (this[1] > range.getYMax()) {
                    this[1] = range.getYMax();
                }
            }
            translate2d(dx, dy) {
                this[0] += dx;
                this[1] += dy;
            }
            getLoggableValue() {
                return [
                    [this[0], this[1]],
                ];
            }
            copyFromBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyFromBuffer(memoryDataView, pointer, this, littleEndian);
            }
            copyToBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyToBuffer(memoryDataView, this, pointer, littleEndian);
            }
            castToBaseType() {
                return this;
            }
        },
        _a.factory = new vec2_factory_1.Vec2Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a;
}
exports.getVec2Ctor = getVec2Ctor;
//# sourceMappingURL=get-vec2-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/range1d/get-range1d-ctor.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/range1d/get-range1d-ctor.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRange1dCtor = void 0;
const normalized_data_view_provider_1 = __webpack_require__(/*! ../../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const _debug_1 = __webpack_require__(/*! ../../../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const get_vec2_ctor_1 = __webpack_require__(/*! ../get-vec2-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/get-vec2-ctor.js");
const vec2_factory_1 = __webpack_require__(/*! ../vec2-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2-factory.js");
const mat2_1 = __webpack_require__(/*! ../../mat2/mat2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2.js");
/**
 * @internal
 */
function getRange1dCtor(ctor) {
    var _a;
    return _a = class Range1dImpl extends (0, get_vec2_ctor_1.getVec2Ctor)(ctor) {
            setMin(value) {
                this[0] = value;
            }
            setMax(value) {
                this[1] = value;
            }
            getMin() {
                return this[0];
            }
            getMax() {
                return this[1];
            }
            getRange() {
                return this[1] - this[0];
            }
            getCenter() {
                return (this[0] + this[1]) * 0.5;
            }
            mat2Multiply(mat, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo.setMin(mat.getVec2MultiplyX(this.getMin()));
                writeTo.setMax(mat.getVec2MultiplyX(this.getMax()));
                return writeTo;
            }
            unionRange(range, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo[0] = this[0] > range[0] ? range[0] : this[0];
                writeTo[1] = this[1] < range[1] ? range[1] : this[1];
                return writeTo;
            }
            extendRange(value, writeTo = this.constructor.factory.createOneEmpty()) {
                writeTo[0] = this[0] > value ? value : this[0];
                writeTo[1] = this[1] < value ? value : this[1];
                return writeTo;
            }
            getRangeTransform(toRange, result = this.constructor.mat2Ctor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.assert(this.getRange() !== 0, "divide by 0");
                const sf = toRange.getRange() / this.getRange();
                result[0] = sf;
                result[1] = 0;
                result[2] = toRange.getMin() - this.getMin() * sf;
                result[3] = 1;
                return result;
            }
            isValueInRange1d(value) {
                return value >= this.getMin() && value <= this.getMax();
            }
            scaleRelativeTo(scalingFactor, relativeTo, result = this.constructor.factory.createOneEmpty()) {
                DEBUG_MODE && _debug_1._Debug.assert(this.isValueInRange1d(relativeTo), "relativeTo must be inside the range");
                let difference = this.getCenter() - relativeTo;
                // multiply by 2 as we want to compare to half the range
                // make the difference relative, varies from -1 to 1
                difference = 2 * difference / this.getRange();
                const newRange = this.getRange() * scalingFactor;
                const halfDiff = 0.5 * (this.getRange() - newRange);
                const newMin = this.getMin() + halfDiff - halfDiff * difference;
                result.setMin(newMin);
                result.setMax(newMin + newRange);
                return result;
            }
            bound1d(boundTo) {
                if (this.getRange() > boundTo.getRange()) {
                    this.setMin(boundTo.getMin());
                    this.setMax(boundTo.getMax());
                }
                else if (this.getMax() > boundTo.getMax()) {
                    const range = this.getRange();
                    this.setMax(boundTo.getMax());
                    this.setMin(boundTo.getMax() - range);
                }
                else if (this.getMin() < boundTo.getMin()) {
                    const range = this.getRange();
                    this.setMin(boundTo.getMin());
                    this.setMax(boundTo.getMin() + range);
                }
            }
            translate1d(dv) {
                this.setMin(this.getMin() + dv);
                this.setMax(this.getMax() + dv);
            }
        },
        _a.factory = new vec2_factory_1.Vec2Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a.mat2Ctor = mat2_1.Mat2.getCtor(ctor),
        _a;
}
exports.getRange1dCtor = getRange1dCtor;
//# sourceMappingURL=get-range1d-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/range1d/range1d.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/range1d/range1d.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range1d = void 0;
const get_range1d_ctor_1 = __webpack_require__(/*! ./get-range1d-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/range1d/get-range1d-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
const vec2_1 = __webpack_require__(/*! ../vec2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2.js");
/**
 * @public
 * Vec2 representing a 1d range.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Range1d extends vec2_1.Vec2 {
    static getCtor(ctor) {
        return Range1d.constructors.get(ctor);
    }
    setMin(_value) {
        throw new Error();
    }
    setMax(_value) {
        throw new Error();
    }
    getMin() {
        throw new Error();
    }
    getMax() {
        throw new Error();
    }
    getRange() {
        throw new Error();
    }
    getCenter() {
        throw new Error();
    }
    mat2Multiply(_mat, _writeTo) {
        throw new Error();
    }
    unionRange(_range, _writeTo) {
        throw new Error();
    }
    extendRange(_value, _writeTo) {
        throw new Error();
    }
    /**
     * Creates a transform matrix that maps values in this range onto `_toRange`.
     */
    getRangeTransform(_toRange, _result) {
        throw new Error();
    }
    isValueInRange1d(_value) {
        throw new Error();
    }
    /* eslint-disable no-irregular-whitespace */
    /**
     * Scales the range relative to a point (may not be outside of the range).
     *
     * @remarks
     * If the point is at a boundary, then the range will be scaled such that that boundary is not changed. Where the
     * point is away from a boundary, the updated range will have boundaries proportional to the distance from the center
     * of the range.
     *
     * E.g. scaling factor of 0.5, P represents the position of the point in the range:
     *```
     *  min                       max
     *  |P-------------------------|
     *  |-------------|
     *
     *  |------------P-------------|
     *        |-------------|
     *```
     */
    /* eslint-enable no-irregular-whitespace */
    scaleRelativeTo(_scalingFactor, _relativeTo, _result) {
        throw new Error();
    }
    /**
     * Bound this range to the argument.
     *
     * @remarks
     * Where this range is larger than the bounding range, it will be resized to fit.
     * Where this range is smaller than the bounding range but not contained, it will be moved maintaining its size. It
     * Will be moved such that the the side furthest from the bounding range will be at the edge of the boundary.
     */
    bound1d(_boundTo) {
        throw new Error();
    }
    /**
     * Shifts the range by dv.
     */
    translate1d(_dv) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Range1d = Range1d;
Range1d.f64 = (0, get_range1d_ctor_1.getRange1dCtor)(Float64Array);
Range1d.f32 = (0, get_range1d_ctor_1.getRange1dCtor)(Float32Array);
Range1d.u32 = (0, get_range1d_ctor_1.getRange1dCtor)(Uint32Array);
Range1d.i32 = (0, get_range1d_ctor_1.getRange1dCtor)(Int32Array);
Range1d.u16 = (0, get_range1d_ctor_1.getRange1dCtor)(Uint16Array);
Range1d.i16 = (0, get_range1d_ctor_1.getRange1dCtor)(Int16Array);
Range1d.u8c = (0, get_range1d_ctor_1.getRange1dCtor)(Uint8ClampedArray);
Range1d.u8 = (0, get_range1d_ctor_1.getRange1dCtor)(Uint8Array);
Range1d.i8 = (0, get_range1d_ctor_1.getRange1dCtor)(Int8Array);
Range1d.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Range1d);
//# sourceMappingURL=range1d.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2-factory.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2-factory.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vec2Factory = void 0;
const a_typed_tuple_factory_1 = __webpack_require__(/*! ../a-typed-tuple-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js");
class Vec2Factory extends a_typed_tuple_factory_1.ATypedTupleFactory {
    constructor(ctor, dataView) {
        super(2, ctor.BYTES_PER_ELEMENT, dataView);
        this.ctor = ctor;
    }
    createOneEmpty() {
        return new this.ctor();
    }
    createOne(x, y) {
        const a = this.createOneEmpty();
        a[0] = x;
        a[1] = y;
        return a;
    }
    copyFromBuffer(memoryDataView, pointer, writeTo = this.createOneEmpty(), littleEndian = Vec2Factory.littleEndian) {
        writeTo[0] = this.dataView.getValue(memoryDataView, pointer, littleEndian);
        writeTo[1] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        return writeTo;
    }
    copyToBuffer(memoryDataView, writeFrom, pointer, littleEndian = Vec2Factory.littleEndian) {
        this.dataView.setValue(memoryDataView, pointer, writeFrom[0], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[1], littleEndian);
    }
}
exports.Vec2Factory = Vec2Factory;
//# sourceMappingURL=vec2-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vec2 = void 0;
const a_typed_array_tuple_1 = __webpack_require__(/*! ../a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
const get_vec2_ctor_1 = __webpack_require__(/*! ./get-vec2-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/get-vec2-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * Vector 2.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Vec2 extends a_typed_array_tuple_1.ATypedArrayTuple {
    static getCtor(ctor) {
        return Vec2.constructors.get(ctor);
    }
    getX() {
        throw new Error();
    }
    getY() {
        throw new Error();
    }
    getMagnitude() {
        throw new Error();
    }
    getMagnitudeSquared() {
        throw new Error();
    }
    update(_x, _y) {
        throw new Error();
    }
    setX(_x) {
        throw new Error();
    }
    setY(_y) {
        throw new Error();
    }
    add(_vec, _result) {
        throw new Error();
    }
    subtract(_vec, _result) {
        throw new Error();
    }
    scalarMultiply(_value, _result) {
        throw new Error();
    }
    /**
     * Multiply `this` by `_value`.
     */
    vec2Multiply(_value, _result) {
        throw new Error();
    }
    scalarDivide(_value, _result) {
        throw new Error();
    }
    /**
     * Divide `this` by `_value`.
     */
    vec2Divide(_value, _result) {
        throw new Error();
    }
    /**
     * Returns a unit vector in the direction of this vector.
     */
    normalize(_result) {
        throw new Error();
    }
    /**
     * Returns the normal to this vector.
     */
    getNormal(_result) {
        throw new Error();
    }
    dotProduct(_vec) {
        throw new Error();
    }
    mat3Multiply(_mat, _result) {
        throw new Error();
    }
    /**
     * If this point is outside of the range, set that dimension to the extrema of the range.
     * @param _range - The range to be bound to, inclusive.
     */
    bound2d(_range) {
        throw new Error();
    }
    /**
     * Shifts this position by the arguments.
     */
    translate2d(_dx, _dy) {
        throw new Error();
    }
    getLoggableValue() {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Vec2 = Vec2;
Vec2.f64 = (0, get_vec2_ctor_1.getVec2Ctor)(Float64Array);
Vec2.f32 = (0, get_vec2_ctor_1.getVec2Ctor)(Float32Array);
Vec2.u32 = (0, get_vec2_ctor_1.getVec2Ctor)(Uint32Array);
Vec2.i32 = (0, get_vec2_ctor_1.getVec2Ctor)(Int32Array);
Vec2.u16 = (0, get_vec2_ctor_1.getVec2Ctor)(Uint16Array);
Vec2.i16 = (0, get_vec2_ctor_1.getVec2Ctor)(Int16Array);
Vec2.u8c = (0, get_vec2_ctor_1.getVec2Ctor)(Uint8ClampedArray);
Vec2.u8 = (0, get_vec2_ctor_1.getVec2Ctor)(Uint8Array);
Vec2.i8 = (0, get_vec2_ctor_1.getVec2Ctor)(Int8Array);
Vec2.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Vec2);
//# sourceMappingURL=vec2.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/get-vec3-ctor.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/get-vec3-ctor.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVec3Ctor = void 0;
const vec3_factory_1 = __webpack_require__(/*! ./vec3-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3-factory.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
/**
 * @internal
 */
function getVec3Ctor(ctor) {
    var _a;
    return _a = class Vec3Impl extends ctor {
            constructor(bufferOrLength = 3, offset, length) {
                super(bufferOrLength, offset, length);
            }
            getX() {
                return this[0];
            }
            getY() {
                return this[1];
            }
            getZ() {
                return this[2];
            }
            getMagnitude() {
                const x = this[0];
                const y = this[1];
                const z = this[2];
                return Math.sqrt(x * x + y * y + z * z);
            }
            getMagnitudeSquared() {
                const x = this[0];
                const y = this[1];
                const z = this[2];
                return x * x + y * y + z * z;
            }
            dotProduct(vec) {
                return this[0] * vec[0] + this[1] * vec[1] + this[2] * vec[2];
            }
            update(x, y, z) {
                this[0] = x;
                this[1] = y;
                this[2] = z;
            }
            setX(x) {
                this[0] = x;
            }
            setY(y) {
                this[1] = y;
            }
            setZ(z) {
                this[2] = z;
            }
            getLoggableValue() {
                return [
                    [this[0], this[1], this[2]],
                ];
            }
            copyFromBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyFromBuffer(memoryDataView, pointer, this, littleEndian);
            }
            copyToBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyToBuffer(memoryDataView, this, pointer, littleEndian);
            }
            castToBaseType() {
                return this;
            }
        },
        _a.factory = new vec3_factory_1.Vec3Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a;
}
exports.getVec3Ctor = getVec3Ctor;
//# sourceMappingURL=get-vec3-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3-factory.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3-factory.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vec3Factory = void 0;
const a_typed_tuple_factory_1 = __webpack_require__(/*! ../a-typed-tuple-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js");
class Vec3Factory extends a_typed_tuple_factory_1.ATypedTupleFactory {
    constructor(ctor, dataView) {
        super(3, ctor.BYTES_PER_ELEMENT, dataView);
        this.ctor = ctor;
    }
    createOneEmpty() {
        return new this.ctor();
    }
    createOne(x, y, z) {
        const a = this.createOneEmpty();
        a[0] = x;
        a[1] = y;
        a[2] = z;
        return a;
    }
    copyFromBuffer(memoryDataView, pointer, writeTo = this.createOneEmpty(), littleEndian = Vec3Factory.littleEndian) {
        writeTo[0] = this.dataView.getValue(memoryDataView, pointer, littleEndian);
        writeTo[1] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        writeTo[2] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        return writeTo;
    }
    copyToBuffer(memoryDataView, writeFrom, pointer, littleEndian = Vec3Factory.littleEndian) {
        this.dataView.setValue(memoryDataView, pointer, writeFrom[0], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[1], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[2], littleEndian);
    }
}
exports.Vec3Factory = Vec3Factory;
//# sourceMappingURL=vec3-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vec3 = void 0;
const a_typed_array_tuple_1 = __webpack_require__(/*! ../a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
const get_vec3_ctor_1 = __webpack_require__(/*! ./get-vec3-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/get-vec3-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * Vector 3.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Vec3 extends a_typed_array_tuple_1.ATypedArrayTuple {
    static getCtor(ctor) {
        return Vec3.constructors.get(ctor);
    }
    getX() {
        throw new Error();
    }
    getY() {
        throw new Error();
    }
    getZ() {
        throw new Error();
    }
    getMagnitude() {
        throw new Error();
    }
    getMagnitudeSquared() {
        throw new Error();
    }
    dotProduct(_vec) {
        throw new Error();
    }
    update(_x, _y, _z) {
        throw new Error();
    }
    setX(_x) {
        throw new Error();
    }
    setY(_y) {
        throw new Error();
    }
    setZ(_z) {
        throw new Error();
    }
    getLoggableValue() {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Vec3 = Vec3;
Vec3.f64 = (0, get_vec3_ctor_1.getVec3Ctor)(Float64Array);
Vec3.f32 = (0, get_vec3_ctor_1.getVec3Ctor)(Float32Array);
Vec3.u32 = (0, get_vec3_ctor_1.getVec3Ctor)(Uint32Array);
Vec3.i32 = (0, get_vec3_ctor_1.getVec3Ctor)(Int32Array);
Vec3.u16 = (0, get_vec3_ctor_1.getVec3Ctor)(Uint16Array);
Vec3.i16 = (0, get_vec3_ctor_1.getVec3Ctor)(Int16Array);
Vec3.u8c = (0, get_vec3_ctor_1.getVec3Ctor)(Uint8ClampedArray);
Vec3.u8 = (0, get_vec3_ctor_1.getVec3Ctor)(Uint8Array);
Vec3.i8 = (0, get_vec3_ctor_1.getVec3Ctor)(Int8Array);
Vec3.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Vec3);
//# sourceMappingURL=vec3.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/get-vec4-ctor.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/get-vec4-ctor.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVec4Ctor = void 0;
const vec4_factory_1 = __webpack_require__(/*! ./vec4-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4-factory.js");
const normalized_data_view_provider_1 = __webpack_require__(/*! ../normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
const rgba_color_packer_1 = __webpack_require__(/*! ../../../colors/rgba-color-packer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/rgba-color-packer.js");
/**
 * @internal
 */
function getVec4Ctor(ctor) {
    var _a;
    return _a = class Vec4Impl extends ctor {
            constructor(bufferOrLength = 4, offset, length) {
                super(bufferOrLength, offset, length);
            }
            setRGBAColor(packedRGBA, normalize = false) {
                if (normalize) {
                    // 1 / 255
                    this[0] = rgba_color_packer_1.RgbaColorPacker.unpackR(packedRGBA) * 0.00392156862745098;
                    this[1] = rgba_color_packer_1.RgbaColorPacker.unpackG(packedRGBA) * 0.00392156862745098;
                    this[2] = rgba_color_packer_1.RgbaColorPacker.unpackB(packedRGBA) * 0.00392156862745098;
                    this[3] = rgba_color_packer_1.RgbaColorPacker.unpackA(packedRGBA) * 0.00392156862745098;
                }
                else {
                    this[0] = rgba_color_packer_1.RgbaColorPacker.unpackR(packedRGBA);
                    this[1] = rgba_color_packer_1.RgbaColorPacker.unpackG(packedRGBA);
                    this[2] = rgba_color_packer_1.RgbaColorPacker.unpackB(packedRGBA);
                    this[3] = rgba_color_packer_1.RgbaColorPacker.unpackA(packedRGBA);
                }
                return this;
            }
            /**
             * @param normalized - Is the data normalized (i.e. ranges from 0 - 1)? If so it will be multiplied up by 255.
             */
            getPackedRGBAColor(normalized = false) {
                if (normalized) {
                    return rgba_color_packer_1.RgbaColorPacker.packColor(this[0] * 255, this[1] * 255, this[2] * 255, this[3] * 255);
                }
                else {
                    return rgba_color_packer_1.RgbaColorPacker.packColor(this[0], this[1], this[2], this[3]);
                }
            }
            getX() {
                return this[0];
            }
            getY() {
                return this[1];
            }
            getZ() {
                return this[2];
            }
            getW() {
                return this[3];
            }
            update(x, y, z, w) {
                this[0] = x;
                this[1] = y;
                this[2] = z;
                this[3] = w;
            }
            setX(x) {
                this[0] = x;
            }
            setY(y) {
                this[1] = y;
            }
            setZ(z) {
                this[2] = z;
            }
            setW(w) {
                this[3] = w;
            }
            getLoggableValue() {
                return [
                    [this[0], this[1], this[2]],
                ];
            }
            copyFromBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyFromBuffer(memoryDataView, pointer, this, littleEndian);
            }
            copyToBuffer(memoryDataView, pointer, littleEndian) {
                this.constructor.factory.copyToBuffer(memoryDataView, this, pointer, littleEndian);
            }
            castToBaseType() {
                return this;
            }
        },
        _a.factory = new vec4_factory_1.Vec4Factory(_a, normalized_data_view_provider_1.NormalizedDataViewProvider.getView(ctor)),
        _a;
}
exports.getVec4Ctor = getVec4Ctor;
//# sourceMappingURL=get-vec4-ctor.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4-factory.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4-factory.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vec4Factory = void 0;
const a_typed_tuple_factory_1 = __webpack_require__(/*! ../a-typed-tuple-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-tuple-factory.js");
class Vec4Factory extends a_typed_tuple_factory_1.ATypedTupleFactory {
    constructor(ctor, dataView) {
        super(4, ctor.BYTES_PER_ELEMENT, dataView);
        this.ctor = ctor;
    }
    createOneEmpty() {
        return new this.ctor();
    }
    createOne(x, y, z, w) {
        const a = this.createOneEmpty();
        a[0] = x;
        a[1] = y;
        a[2] = z;
        a[3] = w;
        return a;
    }
    copyFromBuffer(memoryDataView, pointer, writeTo = this.createOneEmpty(), littleEndian = Vec4Factory.littleEndian) {
        writeTo[0] = this.dataView.getValue(memoryDataView, pointer, littleEndian);
        writeTo[1] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        writeTo[2] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        writeTo[3] = this.dataView.getValue(memoryDataView, pointer += this.bytesPerElement, littleEndian);
        return writeTo;
    }
    copyToBuffer(memoryDataView, writeFrom, pointer, littleEndian = Vec4Factory.littleEndian) {
        this.dataView.setValue(memoryDataView, pointer, writeFrom[0], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[1], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[2], littleEndian);
        this.dataView.setValue(memoryDataView, pointer += this.bytesPerElement, writeFrom[3], littleEndian);
    }
}
exports.Vec4Factory = Vec4Factory;
//# sourceMappingURL=vec4-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vec4 = void 0;
const a_typed_array_tuple_1 = __webpack_require__(/*! ../a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
const get_vec4_ctor_1 = __webpack_require__(/*! ./get-vec4-ctor */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/get-vec4-ctor.js");
const populate_typed_array_constructor_map_1 = __webpack_require__(/*! ../populate-typed-array-constructor-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/populate-typed-array-constructor-map.js");
/**
 * @public
 * Vector 4.
 *
 * @remarks
 * See static properties for constructors. Instances are not an extension of this class, but of the static members.
 */
class Vec4 extends a_typed_array_tuple_1.ATypedArrayTuple {
    static getCtor(ctor) {
        return Vec4.constructors.get(ctor);
    }
    /**
     * @param _packedRGBA - The number to be unpacked.
     * @param _normalize - If true, normalize components between 0 - 1.
     */
    setRGBAColor(_packedRGBA, _normalize) {
        throw new Error();
    }
    /**
     * @param _normalized - Format of the color stored in the Vec4, if true 0 - 1, else 0 - 255.
     */
    getPackedRGBAColor(_normalized) {
        throw new Error();
    }
    getX() {
        throw new Error();
    }
    getY() {
        throw new Error();
    }
    getZ() {
        throw new Error();
    }
    getW() {
        throw new Error();
    }
    update(_x, _y, _z, _w) {
        throw new Error();
    }
    setX(_x) {
        throw new Error();
    }
    setY(_y) {
        throw new Error();
    }
    setZ(_z) {
        throw new Error();
    }
    setW(_w) {
        throw new Error();
    }
    getLoggableValue() {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyFromBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * If endianness is not supplied the platform's endianness will be used.
     */
    copyToBuffer(_memoryDataView, _pointer, _littleEndian) {
        throw new Error();
    }
    /**
     * Although the typed array tuples extend a typed array, they are not structurally compatible.
     * This function returns the argument passed without modification but cast as the underlying storage type, e.g. Float32Array.
     */
    castToBaseType() {
        throw new Error();
    }
}
exports.Vec4 = Vec4;
Vec4.f64 = (0, get_vec4_ctor_1.getVec4Ctor)(Float64Array);
Vec4.f32 = (0, get_vec4_ctor_1.getVec4Ctor)(Float32Array);
Vec4.u32 = (0, get_vec4_ctor_1.getVec4Ctor)(Uint32Array);
Vec4.i32 = (0, get_vec4_ctor_1.getVec4Ctor)(Int32Array);
Vec4.u16 = (0, get_vec4_ctor_1.getVec4Ctor)(Uint16Array);
Vec4.i16 = (0, get_vec4_ctor_1.getVec4Ctor)(Int16Array);
Vec4.u8c = (0, get_vec4_ctor_1.getVec4Ctor)(Uint8ClampedArray);
Vec4.u8 = (0, get_vec4_ctor_1.getVec4Ctor)(Uint8Array);
Vec4.i8 = (0, get_vec4_ctor_1.getVec4Ctor)(Int8Array);
Vec4.constructors = (0, populate_typed_array_constructor_map_1.populateTypedArrayConstructorMap)(Vec4);
//# sourceMappingURL=vec4.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-buffer.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-buffer.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircularBuffer = void 0;
const array_copy_into_1 = __webpack_require__(/*! ../array/impl/array-copy-into */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-copy-into.js");
/**
 * @public
 * Presents an array as if it were circular, going past the end or start loops around.
 *
 * @remarks
 * Supports negative indexes.
 */
class CircularBuffer {
    constructor(values) {
        this.values = values;
        this.size = values.length;
    }
    static createEmpty(size) {
        return new CircularBuffer(new Array(size));
    }
    static createOne(initialValues) {
        return new CircularBuffer(initialValues);
    }
    clone() {
        const clone = CircularBuffer.createEmpty(this.size);
        (0, array_copy_into_1.arrayCopyInto)(this.values, clone.values);
        return clone;
    }
    getValue(index) {
        return this.values[this.getAdjustedIndex(index)];
    }
    setValue(index, value) {
        this.values[this.getAdjustedIndex(index)] = value;
    }
    /**
     * returns the value stored at the index and sets the provided value
     */
    getSetValue(index, value) {
        const adjustedIndex = this.getAdjustedIndex(index);
        const previousValue = this.values[adjustedIndex];
        this.values[adjustedIndex] = value;
        return previousValue;
    }
    getAdjustedIndex(index) {
        const length = this.values.length;
        const remainder = index % length;
        if (remainder >= 0) {
            return remainder;
        }
        return length + remainder;
    }
}
exports.CircularBuffer = CircularBuffer;
//# sourceMappingURL=circular-buffer.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-fifo-stack.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-fifo-stack.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircularFIFOStack = exports.ECircularStackOverflowMode = void 0;
const circular_buffer_1 = __webpack_require__(/*! ./circular-buffer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-buffer.js");
const _production_1 = __webpack_require__(/*! ../production/_production */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js");
/**
 * @public
 * Sets the behavior of {@link CircularFIFOStack} when a value is pushed which won't fit.
 *
 * @remarks
 * Does not affect underflow, which is always considered exceptional.
 */
var ECircularStackOverflowMode;
(function (ECircularStackOverflowMode) {
    /**
     * Do nothing.
     */
    ECircularStackOverflowMode[ECircularStackOverflowMode["NoOp"] = 1] = "NoOp";
    /**
     * Throw an error if the buffer overflows.
     */
    ECircularStackOverflowMode[ECircularStackOverflowMode["Exception"] = 2] = "Exception";
    /**
     * Overwrite the first value.
     */
    ECircularStackOverflowMode[ECircularStackOverflowMode["Overwrite"] = 3] = "Overwrite";
    /**
     * Doubles the stack size and copies in place, running in O(size).
     */
    ECircularStackOverflowMode[ECircularStackOverflowMode["Grow"] = 4] = "Grow";
})(ECircularStackOverflowMode = exports.ECircularStackOverflowMode || (exports.ECircularStackOverflowMode = {}));
/**
 * @public
 * Circular first in first out stack.
 *
 * @remarks
 * See {@link ECircularStackOverflowMode} for details of overflow behavior.
 */
class CircularFIFOStack {
    constructor(capacity, mode = ECircularStackOverflowMode.Grow) {
        this.start = 0;
        this.end = 0;
        this.capacity = capacity;
        this.mode = mode;
        this.buffer = circular_buffer_1.CircularBuffer.createEmpty(capacity);
    }
    getCapacity() {
        return this.capacity;
    }
    /**
     * Pushes a value to the top of the stack (depending on `mode`).
     */
    push(value) {
        if (this.start + this.buffer.size == this.end) {
            switch (this.mode) {
                case ECircularStackOverflowMode.NoOp:
                    return;
                case ECircularStackOverflowMode.Exception:
                    _production_1._Production.error("Attempted to push to full stack.");
                    break;
                case ECircularStackOverflowMode.Overwrite:
                    this.pop();
                    break;
                case ECircularStackOverflowMode.Grow:
                    this.growStack();
                    break;
                default:
                    _production_1._Production.assertValueIsNever(this.mode);
            }
        }
        this.buffer.setValue(this.end++, value);
    }
    /**
     * Remove the bottom element in the stack and return it.
     *
     * @remarks
     * Attempting to pop an empty stack is considered exceptional regardless of `mode`. You can
     * call `getIsEmpty` or `getRemainingCapacity` to determine if pop is safe to call.
     */
    pop() {
        if (this.getIsEmpty()) {
            _production_1._Production.error("Attempted to pop empty stack.");
        }
        // null out the value to avoid memory leaks
        return this.buffer.getSetValue(this.start++, null);
    }
    getIsEmpty() {
        return this.start == this.end;
    }
    getRemainingCapacity() {
        return this.start + this.capacity - this.end;
    }
    growStack() {
        const largerCircularStack = new CircularFIFOStack(this.capacity * 2, this.mode);
        let size = this.capacity;
        while (size--) {
            const valueToCopy = this.pop();
            largerCircularStack.push(valueToCopy);
        }
        this.buffer = largerCircularStack.buffer;
        this.capacity *= 2;
        this.start = largerCircularStack.start;
        this.end = largerCircularStack.end;
    }
}
exports.CircularFIFOStack = CircularFIFOStack;
//# sourceMappingURL=circular-fifo-stack.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/dirty-checked-unique-collection.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/dirty-checked-unique-collection.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DirtyCheckedUniqueCollection = void 0;
/**
 * @public
 * {@inheritDoc IDirtyCheckedUniqueCollection}
 */
class DirtyCheckedUniqueCollection {
    constructor(itemsToCopy) {
        this.itemsArray = [];
        this.isDirty = true;
        this.itemsSet = new Set(itemsToCopy);
    }
    add(item) {
        this.itemsSet.add(item);
        this.isDirty = true;
    }
    remove(item) {
        const deletedItem = this.itemsSet.delete(item);
        this.isDirty || (this.isDirty = deletedItem);
    }
    has(item) {
        return this.itemsSet.has(item);
    }
    clear() {
        this.isDirty || (this.isDirty = this.itemsSet.size > 0);
        this.itemsSet.clear();
    }
    getArray() {
        if (this.isDirty) {
            this.itemsArray = Array.from(this.itemsSet);
            this.isDirty = false;
        }
        return this.itemsArray;
    }
    getSet() {
        return this.itemsSet;
    }
}
exports.DirtyCheckedUniqueCollection = DirtyCheckedUniqueCollection;
//# sourceMappingURL=dirty-checked-unique-collection.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/e-rgba-masks.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/e-rgba-masks.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERgbaMasks = exports.ERgbaShift = void 0;
/**
 * @public
 * Bit offset for packed RGBA colors.
 *
 * @remarks
 * After masking zero fill right shift to unpack.
 * Left shift to pack (0-255 as input).
 * Stored as ABGR to allow packing of RGB into float32.
 */
var ERgbaShift;
(function (ERgbaShift) {
    ERgbaShift[ERgbaShift["R"] = 0] = "R";
    ERgbaShift[ERgbaShift["G"] = 8] = "G";
    ERgbaShift[ERgbaShift["B"] = 16] = "B";
    ERgbaShift[ERgbaShift["A"] = 24] = "A";
})(ERgbaShift = exports.ERgbaShift || (exports.ERgbaShift = {}));
/**
 * @public
 * Bit mask for packed RGBA colors.
 */
var ERgbaMasks;
(function (ERgbaMasks) {
    ERgbaMasks[ERgbaMasks["R"] = 255] = "R";
    ERgbaMasks[ERgbaMasks["G"] = 65280] = "G";
    ERgbaMasks[ERgbaMasks["B"] = 16711680] = "B";
    ERgbaMasks[ERgbaMasks["A"] = -16777216] = "A";
})(ERgbaMasks = exports.ERgbaMasks || (exports.ERgbaMasks = {}));
//# sourceMappingURL=e-rgba-masks.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/rgba-color-packer.js":
/*!*************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/rgba-color-packer.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RgbaColorPacker = void 0;
const e_rgba_masks_1 = __webpack_require__(/*! ./e-rgba-masks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/e-rgba-masks.js");
/**
 * @public
 * Utility for packing and unpacking RGBA into int32 with one byte per channel.
 */
class RgbaColorPacker {
    /**
     * @param color - Bit packed color.
     * @returns a value between 0 - 255 representing the red component.
     */
    static unpackR(color) {
        return (color & e_rgba_masks_1.ERgbaMasks.R) >>> e_rgba_masks_1.ERgbaShift.R;
    }
    /**
     * @param color - Bit packed color.
     * @returns a value between 0 - 255 representing the green component.
     */
    static unpackG(color) {
        return (color & e_rgba_masks_1.ERgbaMasks.G) >>> e_rgba_masks_1.ERgbaShift.G;
    }
    /**
     * @param color - Bit packed color.
     * @returns a value between 0 - 255 representing the blue component.
     */
    static unpackB(color) {
        return (color & e_rgba_masks_1.ERgbaMasks.B) >>> e_rgba_masks_1.ERgbaShift.B;
    }
    /**
     * @param color - Bit packed color.
     * @returns a value between 0 - 255 representing the alpha component.
     */
    static unpackA(color) {
        return (color & e_rgba_masks_1.ERgbaMasks.A) >>> e_rgba_masks_1.ERgbaShift.A;
    }
    /**
     *
     * @param r - Red 0 - 255.
     * @param g - Green 0 - 255.
     * @param b - Blue 0 - 255.
     * @param a - Alpha 0 - 255.
     */
    static packColor(r, g, b, a) {
        return (r << e_rgba_masks_1.ERgbaShift.R) |
            (g << e_rgba_masks_1.ERgbaShift.G) |
            (b << e_rgba_masks_1.ERgbaShift.B) |
            (a << e_rgba_masks_1.ERgbaShift.A);
    }
    /**
     * Given a packed color, produce a dom color string like `rgba(255, 255, 255, 1)`.
     */
    static makeDomColorString(color) {
        const tmp = RgbaColorPacker.colorStringTmp;
        tmp[1] = (color & e_rgba_masks_1.ERgbaMasks.R) >>> e_rgba_masks_1.ERgbaShift.R;
        tmp[3] = (color & e_rgba_masks_1.ERgbaMasks.G) >>> e_rgba_masks_1.ERgbaShift.G;
        tmp[5] = (color & e_rgba_masks_1.ERgbaMasks.B) >>> e_rgba_masks_1.ERgbaShift.B;
        tmp[7] = ((color & e_rgba_masks_1.ERgbaMasks.A) >>> e_rgba_masks_1.ERgbaShift.A) * 0.00392156862745098; // divide by 255
        return tmp.join("");
    }
    /**
     * Given a packed color, produce a dom color string like `#FF0000`.
     *
     * @remarks
     * Made up of only 6 components, the alpha channel will be masked out.
     */
    static getHexColorString(value) {
        if (value !== value) {
            return "NaN";
        }
        // mask off the alpha channel
        value = value & (~e_rgba_masks_1.ERgbaMasks.A);
        // switch from ABGR to RGB
        value = ((value & 0xFF) << 16) | (value & 0xFF00) | ((value & 0xFF0000) >> 16);
        RgbaColorPacker.hexColorTmp[1] = value
            .toString(16)
            .toUpperCase()
            .padStart(6, "0");
        return RgbaColorPacker.hexColorTmp.join("");
    }
    static generateRandomPackedRGBA() {
        return ((Math.random() * 255) << e_rgba_masks_1.ERgbaShift.R) |
            ((Math.random() * 255) << e_rgba_masks_1.ERgbaShift.G) |
            ((Math.random() * 255) << e_rgba_masks_1.ERgbaShift.B) |
            ((Math.random() * 255) << e_rgba_masks_1.ERgbaShift.A);
    }
}
exports.RgbaColorPacker = RgbaColorPacker;
RgbaColorPacker.colorStringTmp = ["rgba(", 1, ",", 3, ",", 5, ",", 7, ")"];
RgbaColorPacker.hexColorTmp = ["#", 0];
//# sourceMappingURL=rgba-color-packer.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js":
/*!*************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Debug = void 0;
const get_global_1 = __webpack_require__(/*! ../runtime/get-global */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/runtime/get-global.js");
/**
 * @public
 * Utilities for debug builds.
 */
class _Debug {
    static get label() {
        return _Debug._label;
    }
    static set label(label) {
        _Debug._label = label;
    }
    /**
     * Most debuggers will ignore `debugger` statements in node_modules.
     * Skirt around this by letting the consumer set their own callback for this.
     *
     * @param onBreakpoint - called on debug assert etc, you should provide a function with a `debugger` statement.
     *
     * @example
     * ```typescript
     * // the braces are not optional
     * _Debug.configureBreakpoint(() => { debugger; })
     * ```
     */
    static configureBreakpoint(onBreakpoint) {
        _Debug.onBreakpoint = onBreakpoint;
    }
    /**
     * Convenience method to run multiple asserts.
     *
     * @returns A boolean value to make linting happy...
     *
     * @example
     * ```typescript
     * DEBUG_MODE && _Debug.runBlock(() => {
     *     _Debug.assert(someCondition, "someCondition was wrong");
     *     // ...
     * });
     * ```
     */
    static runBlock(cb) {
        cb();
        return true;
    }
    /**
     * Convenience method to run multiple asserts if flag set.
     *
     * @returns A boolean value to make linting happy...
     *
     * @remarks
     * Must still be hidden behind DEBUG_MODE check for dead code removal.
     *
     * @example
     * ```typescript
     * DEBUG_MODE && _Debug.conditionalBlock("SOME_FLAG", () => {
     *     _Debug.assert(someCondition, "someCondition was wrong");
     *     // ...
     * });
     * ```
     */
    static conditionalBlock(flag, cb) {
        if (this.isFlagSet(flag)) {
            cb();
        }
        return true;
    }
    /**
     * Throws an `Error` with the given message if the condition is false.
     *
     * @returns A boolean value to make linting happy...
     *
     * @example
     * ```typescript
     * function foo(a1: number) {
     *     // not suitable for a production check, the programmer lied about the input type they supplied
     *     DEBUG_MODE && _Debug.assert(a1 != null, "a1 must be supplied");
     * }
     * ```
     *
     * @remarks
     * If `DEBUG_DISABLE_BREAKPOINT_FLAG` is false or unset then a breakpoint will be hit first.
     *
     *
     * Debug asserts are useful for providing hints to the programmer that they aren't meeting the contract of the API.
     */
    static assert(condition, errorMessage) {
        if (!condition) {
            if (!_Debug.isFlagSet("DEBUG_DISABLE_BREAKPOINT")) {
                _Debug.breakpoint();
            }
            throw new Error(`assert fail: ${errorMessage}`);
        }
        return true;
    }
    /**
     * Throws an `Error` with the given message.
     * @returns A boolean value to make linting happy... will never return.
     *
     * @example
     * ```typescript
     * if (errorCondition) {
     *     // in debug mode we error
     *     DEBUG_MODE && _Debug.error("oopsy");
     *     // in production we fall back to some other behavior
     *     return errorConditionValue;
     * }
     * ```
     *
     * @remarks
     * If `DEBUG_MODE` is true and `DEBUG_DISABLE_BREAKPOINT` is false or unset then a breakpoint will be hit first.
     */
    static error(message) {
        if (!_Debug.isFlagSet("DEBUG_DISABLE_BREAKPOINT")) {
            _Debug.breakpoint();
        }
        throw new Error(message);
    }
    /**
     * Used in place of `debugger` statements when writing libraries. Should generally not be used directly.
     */
    static breakpoint() {
        _Debug.onBreakpoint();
        return true;
    }
    /**
     * Logging which can be conditionally enabled by setting `DEBUG_VERBOSE` to true.
     *
     * @example
     * ```typescript
     * function foo(a1: number) {
     *     DEBUG_MODE && _Debug.verboseLog(`got me a ${a1}`);
     * }
     * ```
     */
    static verboseLog(message, ancillaryObject) {
        if (!_Debug.isFlagSet("DEBUG_VERBOSE")) {
            return;
        }
        if (ancillaryObject == null) {
            console.debug(message);
        }
        else {
            console.debug(message, ancillaryObject);
        }
    }
    static getStackTrace() {
        const error = new Error();
        let stack = error.stack;
        if (stack == null) {
            try {
                // noinspection ExceptionCaughtLocallyJS
                throw error;
            }
            catch (e) {
                stack = e.stack;
            }
        }
        return stack.toString();
    }
    /**
     * Used to set debug flags in an environment independent way.
     */
    static setFlag(flag, value) {
        (0, get_global_1.getGlobal)()[flag] = value;
    }
    /**
     * Used to get debug flags in an environment independent way.
     */
    static isFlagSet(flag) {
        return Boolean((0, get_global_1.getGlobal)()[flag]);
    }
}
exports._Debug = _Debug;
_Debug.onBreakpoint = () => {
    // eslint-disable-next-line no-debugger
    debugger;
};
_Debug._label = undefined;
//# sourceMappingURL=_debug.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-namepace.js":
/*!*********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-namepace.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RcJsUtilDebugImpl = void 0;
const get_global_1 = __webpack_require__(/*! ../runtime/get-global */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/runtime/get-global.js");
const debug_weak_value_1 = __webpack_require__(/*! ./debug-weak-value */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-value.js");
const _debug_1 = __webpack_require__(/*! ./_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const debug_weak_broadcast_event_1 = __webpack_require__(/*! ./debug-weak-broadcast-event */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-broadcast-event.js");
const debug_shared_object_life_cycle_checks_1 = __webpack_require__(/*! ./debug-shared-object-life-cycle-checks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-shared-object-life-cycle-checks.js");
const fp_no_op_1 = __webpack_require__(/*! ../fp/impl/fp-no-op */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-no-op.js");
/**
 * @public
 * Exposed as RcJsUtilDebug in the global namespace when DEBUG_MODE is set to true.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var RcJsUtilDebugImpl;
(function (RcJsUtilDebugImpl) {
})(RcJsUtilDebugImpl = exports.RcJsUtilDebugImpl || (exports.RcJsUtilDebugImpl = {}));
DEBUG_MODE && _debug_1._Debug.runBlock(() => {
    RcJsUtilDebugImpl.onAllocate = new debug_weak_broadcast_event_1.DebugWeakBroadcastEvent("debugOnAllocate");
    RcJsUtilDebugImpl.protectedViews = new debug_weak_value_1.DebugWeakValue();
    RcJsUtilDebugImpl.error = (message) => (0, fp_no_op_1.fpNoOp)(_debug_1._Debug.error(message));
    RcJsUtilDebugImpl.sharedObjectLifeCycleChecks = new debug_shared_object_life_cycle_checks_1.DebugSharedObjectLifeCycleChecks();
    RcJsUtilDebugImpl.uniquePointers = new Set();
    (0, get_global_1.getGlobal)()["RcJsUtilDebug"] = RcJsUtilDebugImpl;
});
//# sourceMappingURL=debug-namepace.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-pointer.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-pointer.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugPointer = void 0;
const _debug_1 = __webpack_require__(/*! ./_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const number_get_hex_string_1 = __webpack_require__(/*! ../number/impl/number-get-hex-string */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/number-get-hex-string.js");
const array_insert_at_index_1 = __webpack_require__(/*! ../array/impl/array-insert-at-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-insert-at-index.js");
class DebugPointer {
    constructor(pointer, objectConstructor, isStatic, instanceLabel = _debug_1._Debug.label) {
        this.pointer = pointer;
        this.objectConstructor = objectConstructor;
        this.isStatic = isStatic;
        this.instanceLabel = instanceLabel;
        this.creationCallstack = _debug_1._Debug.getStackTrace();
    }
    toString() {
        const lines = [
            `WASM address: ${(0, number_get_hex_string_1.numberGetHexString)(this.pointer)}`,
            `Js constructor name: ${this.objectConstructor.name}`,
            "\nCall site stack trace follows:",
            this.creationCallstack,
        ];
        if (this.instanceLabel != null) {
            (0, array_insert_at_index_1.arrayInsertAtIndex)(lines, `Instance label : ${this.instanceLabel}`, 2);
        }
        return lines.join("\n");
    }
}
exports.DebugPointer = DebugPointer;
//# sourceMappingURL=debug-pointer.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-protected-view.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-protected-view.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugProtectedView = void 0;
const _debug_1 = __webpack_require__(/*! ./_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const array_contains_1 = __webpack_require__(/*! ../array/impl/array-contains */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-contains.js");
/**
 * @public
 * Provides a view of an object that can be invalidated, causing attempts to access it to error in `DEBUG_MODE`.
 *
 * @remarks
 * Allows the specification of `safeKeys`, accessing of these is not an error regardless of invalidation state.
 */
class DebugProtectedView {
    constructor(safeKeys, debugInfo) {
        this.safeKeys = safeKeys;
        this.debugInfo = debugInfo;
        this.validViews = new Set();
    }
    invalidate() {
        this.validViews.clear();
    }
    createProtectedView(view) {
        this.validViews.add(view);
        return new Proxy(view, {
            get: (_target, property) => {
                if (property === DebugProtectedView.originalViewKey) {
                    return view;
                }
                if (property === DebugProtectedView.isViewValidKey) {
                    return this.validViews.has(view);
                }
                if (property === DebugProtectedView.debugMessageKey) {
                    return `ProtectedView view invalidated - ${this.debugInfo}`;
                }
                if (!this.validViews.has(view)) {
                    _debug_1._Debug.assert((0, array_contains_1.arrayContains)(this.safeKeys, property), `ProtectedView view invalidated - ${this.debugInfo}`);
                }
                if (typeof view[property] == "function") {
                    return view[property].bind(view);
                }
                return view[property];
            }
        });
    }
    static unwrapProtectedView(view) {
        const hiddenView = view[DebugProtectedView.originalViewKey];
        if (hiddenView == null) {
            // it's not a proxy
            return view;
        }
        if (!view[DebugProtectedView.isViewValidKey]) {
            _debug_1._Debug.error(view[DebugProtectedView.debugMessageKey]);
        }
        return hiddenView;
    }
}
exports.DebugProtectedView = DebugProtectedView;
DebugProtectedView.createTypedArrayView = () => {
    return new DebugProtectedView(["BYTES_PER_ELEMENT"], "Shared Array - memory resize danger, refresh instance with getInstance");
};
DebugProtectedView.isViewValidKey = Symbol("isViewValid");
DebugProtectedView.originalViewKey = Symbol("originalView");
DebugProtectedView.debugMessageKey = Symbol("debugMessage");
//# sourceMappingURL=debug-protected-view.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-shared-object-life-cycle-checks.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-shared-object-life-cycle-checks.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugSharedObjectLifeCycleChecks = void 0;
const _debug_1 = __webpack_require__(/*! ./_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const debug_pointer_1 = __webpack_require__(/*! ./debug-pointer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-pointer.js");
const _production_1 = __webpack_require__(/*! ../production/_production */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js");
/**
 * When a javascript object is garbage collected, check if the corresponding WASM object has been freed.
 */
class DebugSharedObjectLifeCycleChecks {
    constructor() {
        this.finalizationRegistry = new FinalizationRegistry((debugPointer) => {
            if (this.debugPointers.has(debugPointer)) {
                // must have failed to clean up for the pointer to still be present
                if (debugPointer.isStatic) {
                    // the wasm memory hasn't been cleaned up
                    // the js object may leak in production too (resize listener), but we don't know
                    // fixing one fixes the other
                    const message = [
                        "Finalization registry found unreleased wasm object allocated by:",
                        debugPointer.toString(),
                    ].join("\n");
                    _debug_1._Debug.error(message);
                }
                else {
                    // wasm memory never gets cleaned up (static)
                    // the js object will leak in production (resize listener is a strong reference in that case)
                    _debug_1._Debug.error([
                        "Leaked shared static object on the JS side:",
                        debugPointer.toString(),
                    ].join("\n"));
                }
            }
        });
        this.owningPointers = new Map();
        this.sharedObjToPtr = new WeakMap();
        this.debugPointers = new Set();
    }
    registerFinalizationCheck(sharedObject) {
        const instanceOwningPtr = this.owningPointers.get(sharedObject.getPtr());
        if (instanceOwningPtr != null) {
            _debug_1._Debug.error([
                "Address has already been claimed by:",
                instanceOwningPtr.toString(),
            ].join("\n"));
        }
        const debugPointer = new debug_pointer_1.DebugPointer(sharedObject.getPtr(), sharedObject.constructor, sharedObject.isStatic);
        this.debugPointers.add(debugPointer);
        this.sharedObjToPtr.set(sharedObject, debugPointer);
        if (!sharedObject.isStatic) {
            this.owningPointers.set(debugPointer.pointer, debugPointer);
        }
        this.finalizationRegistry.register(sharedObject, debugPointer);
    }
    markReadyForFinalize(sharedObject) {
        if (!sharedObject.isStatic) {
            this.owningPointers.delete(sharedObject.getPtr());
        }
        const pointer = this.sharedObjToPtr.get(sharedObject);
        if (pointer == null) {
            _production_1._Production.error("expected to find pointer");
        }
        this.debugPointers.delete(pointer);
    }
}
exports.DebugSharedObjectLifeCycleChecks = DebugSharedObjectLifeCycleChecks;
//# sourceMappingURL=debug-shared-object-life-cycle-checks.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-broadcast-event.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-broadcast-event.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugWeakBroadcastEvent = void 0;
class DebugWeakBroadcastEvent {
    constructor(key) {
        this.key = key;
        this.listenersSet = new Set();
        this.listenersMap = new WeakMap();
    }
    addListener(listener) {
        this.removeListener(listener);
        const ref = new WeakRef(listener);
        this.listenersSet.add(ref);
        this.listenersMap.set(listener, ref);
    }
    addTemporaryListener(listener) {
        this.addListener(listener);
        return () => this.removeListener(listener);
    }
    addOneTimeListener(listener) {
        const temporaryListener = {
            [this.key]: (...args) => {
                this.removeListener(temporaryListener);
                return listener[this.key](...args);
            }
        };
        this.addListener(temporaryListener);
        return () => this.removeListener(temporaryListener);
    }
    emit(...args) {
        this.listenersSet.forEach(ref => {
            const listener = ref.deref();
            if (listener == null) {
                this.listenersSet.delete(ref);
            }
            else {
                listener[this.key](...args);
            }
        });
    }
    removeListener(listener) {
        const ref = this.listenersMap.get(listener);
        if (ref != null) {
            this.listenersMap.delete(listener);
            this.listenersSet.delete(ref);
        }
    }
    getTargets() {
        const targets = [];
        this.listenersSet.forEach(ref => {
            const listener = ref.deref();
            if (listener == null) {
                this.listenersSet.delete(ref);
            }
            else {
                targets.push(listener);
            }
        });
        return targets;
    }
}
exports.DebugWeakBroadcastEvent = DebugWeakBroadcastEvent;
//# sourceMappingURL=debug-weak-broadcast-event.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-value.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-value.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugWeakValue = void 0;
const _debug_1 = __webpack_require__(/*! ./_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
class DebugWeakValue {
    constructor(values = new WeakMap()) {
        this.values = values;
    }
    setValue(listener, value) {
        this.values.set(listener, value);
    }
    deleteValue(listener) {
        this.values.delete(listener);
    }
    getValue(listener) {
        DEBUG_MODE && _debug_1._Debug.assert(this.values.has(listener), "expected to find value");
        return this.values.get(listener);
    }
}
exports.DebugWeakValue = DebugWeakValue;
//# sourceMappingURL=debug-weak-value.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/impl/set-debug-app-test-flags.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/impl/set-debug-app-test-flags.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setDefaultAppTestFlags = void 0;
const _debug_1 = __webpack_require__(/*! ../_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
function setDefaultAppTestFlags() {
    _debug_1._Debug.setFlag("DEBUG_MODE", true);
    _debug_1._Debug.setFlag("DEBUG_PEDANTIC", true);
    _debug_1._Debug.setFlag("DEBUG_VERBOSE", true);
}
exports.setDefaultAppTestFlags = setDefaultAppTestFlags;
//# sourceMappingURL=set-debug-app-test-flags.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/decorators/once.js":
/*!****************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/decorators/once.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Once = void 0;
/**
 * @public
 * Method decorator. The target will be called only once, subsequent calls will return the first return.
 */
function Once(target, key, descriptor) {
    const original = target[key];
    const results = new WeakMap();
    target[key] = descriptor.value = function (...args) {
        if (results.has(this)) {
            return results.get(this);
        }
        const result = original.apply(this, args);
        results.set(this, result);
        return result;
    };
}
exports.Once = Once;
//# sourceMappingURL=once.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/_dictionary.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/_dictionary.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Dictionary = void 0;
const dictionary_values_1 = __webpack_require__(/*! ./impl/dictionary-values */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-values.js");
const dictionary_extend_1 = __webpack_require__(/*! ./impl/dictionary-extend */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-extend.js");
const dictionary_clone_extend_1 = __webpack_require__(/*! ./impl/dictionary-clone-extend */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-clone-extend.js");
const dictionary_foreach_1 = __webpack_require__(/*! ./impl/dictionary-foreach */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-foreach.js");
const dictionary_pairs_1 = __webpack_require__(/*! ./impl/dictionary-pairs */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-pairs.js");
const dictionary_push_1 = __webpack_require__(/*! ./impl/dictionary-push */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-push.js");
/**
 * @public
 * Utilities for 'dictionaries', i.e. \{ [index: string]: any \}.
 */
class _Dictionary {
    constructor() {
    }
}
exports._Dictionary = _Dictionary;
/** {@inheritDoc dictionaryCloneExtend} */
_Dictionary.cloneExtend = dictionary_clone_extend_1.dictionaryCloneExtend;
/** {@inheritDoc dictionaryExtend} */
_Dictionary.extend = dictionary_extend_1.dictionaryExtend;
/** {@inheritDoc dictionaryForEach} */
_Dictionary.forEach = dictionary_foreach_1.dictionaryForEach;
/** {@inheritDoc dictionaryPairs} */
_Dictionary.pairs = dictionary_pairs_1.dictionaryPairs;
/** {@inheritDoc dictionaryPush} */
_Dictionary.push = dictionary_push_1.dictionaryPush;
/** {@inheritDoc dictionaryValues} */
_Dictionary.values = dictionary_values_1.dictionaryValues;
//# sourceMappingURL=_dictionary.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-clone-extend.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-clone-extend.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionaryCloneExtend = void 0;
const dictionary_extend_1 = __webpack_require__(/*! ./dictionary-extend */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-extend.js");
/**
 * @public
 * Creates an object which is extended sequentially by two additional objects.
 * @param base - The object to apply first.
 * @param extension - The object to apply second.
 *
 * @remarks
 * See {@link dictionaryCloneExtend}.
 */
function dictionaryCloneExtend(base, extension) {
    const extended = {};
    (0, dictionary_extend_1.dictionaryExtend)(extended, base);
    (0, dictionary_extend_1.dictionaryExtend)(extended, extension);
    return extended;
}
exports.dictionaryCloneExtend = dictionaryCloneExtend;
//# sourceMappingURL=dictionary-clone-extend.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-extend.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-extend.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionaryExtend = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const array_is_array_1 = __webpack_require__(/*! ../../array/impl/array-is-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-is-array.js");
/**
 * @public
 * Modifies an object to include the keys and values of another.
 * @param base - The object to be modified.
 * @param extension - The object to be applied to `base`.
 *
 * @remarks
 * See {@link dictionaryExtend}.
 */
function dictionaryExtend(base, extension) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(!(0, array_is_array_1.arrayIsArray)(base) && !(0, array_is_array_1.arrayIsArray)(extension), "should not be used with arrays");
    });
    const keys = Object.keys(extension);
    for (let i = 0, l = keys.length; i < l; ++i) {
        const key = keys[i];
        base[key] = extension[key];
    }
}
exports.dictionaryExtend = dictionaryExtend;
//# sourceMappingURL=dictionary-extend.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-foreach.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-foreach.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionaryForEach = void 0;
/**
 * @public
 * Like `Array.forEach` but for arbitrary objects.
 *
 * @remarks
 * See {@link dictionaryForEach}.
 */
function dictionaryForEach(dictionary, callback) {
    const keys = Object.keys(dictionary);
    for (let i = 0, iEnd = keys.length; i < iEnd; ++i) {
        const key = keys[i];
        callback(dictionary[key], key, dictionary);
    }
}
exports.dictionaryForEach = dictionaryForEach;
//# sourceMappingURL=dictionary-foreach.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-pairs.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-pairs.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionaryPairs = void 0;
/**
 * @public
 * converts objects into key value pair tuples.
 *
 * @remarks
 * See {@link dictionaryPairs}.
 */
function dictionaryPairs(dictionary) {
    const keys = Object.keys(dictionary);
    const pairs = new Array(keys.length);
    for (let i = 0, iEnd = keys.length; i < iEnd; ++i) {
        const key = keys[i];
        pairs[i] = [key, dictionary[key]];
    }
    return pairs;
}
exports.dictionaryPairs = dictionaryPairs;
//# sourceMappingURL=dictionary-pairs.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-push.js":
/*!********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-push.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionaryPush = void 0;
/**
 * @public
 * Used with dictionary that store arrays. Where an array exists for a given key the value will be appended to that array, otherwise a new array will be created containing the value.
 * @param dict - The object to check. May be modified.
 * @param key - The key to lookup in `dict`.
 * @param value - The value to push.
 * @remarks
 * See {@link dictionaryPush}.
 */
function dictionaryPush(dict, key, value) {
    const values = dict[key];
    if (values != null) {
        values.push(value);
    }
    else {
        dict[key] = [value];
    }
}
exports.dictionaryPush = dictionaryPush;
//# sourceMappingURL=dictionary-push.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-values.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-values.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionaryValues = void 0;
/**
 * @public
 * Equivalent to Object.values.
 *
 * @remarks
 * See {@link dictionaryValues}.
 */
function dictionaryValues(d) {
    const keys = Object.keys(d);
    const l = keys.length;
    const a = new Array(l);
    for (let i = 0; i < l; ++i) {
        a[i] = d[keys[i]];
    }
    return a;
}
exports.dictionaryValues = dictionaryValues;
//# sourceMappingURL=dictionary-values.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/error-handling/nestable-error.js":
/*!******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/error-handling/nestable-error.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NestableError = void 0;
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Composable error, useful for automatically generating user friendly localized error messages.
 */
class NestableError {
    constructor(message, causedBy, stringifyMessage) {
        this.message = message;
        this.causedBy = causedBy;
        this.stringifyMessage = stringifyMessage;
        this.stack = _debug_1._Debug.getStackTrace();
    }
    /**
     * This should only be called by library extensions, not user code.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isErrorImpl(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorCtor, isLocalization, error) {
        return error instanceof errorCtor && isLocalization(error.message);
    }
    /**
     * This should only be called by library extensions, not user code.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static normalizeErrorImpl(error, isLocalization, createNestableError) {
        if (NestableError.isErrorImpl(NestableError, isLocalization, error)) {
            return error;
        }
        return createNestableError(error);
    }
    /**
     * This should only be called by library extensions, not user code.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static getRootCauseImpl(error, isLocalization, createNestableError) {
        const normalizedError = NestableError.normalizeErrorImpl(error, isLocalization, createNestableError);
        if (!NestableError.isErrorImpl(NestableError, isLocalization, normalizedError.causedBy)) {
            return normalizedError;
        }
        return NestableError.getRootCauseImpl(normalizedError.causedBy, isLocalization, createNestableError);
    }
    toString() {
        return [
            this.stringifyMessage(this.message),
            this.stack,
        ].join("\n");
    }
}
exports.NestableError = NestableError;
//# sourceMappingURL=nestable-error.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/eventing/broadcast-event.js":
/*!*************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/eventing/broadcast-event.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BroadcastEvent = void 0;
const _set_1 = __webpack_require__(/*! ../set/_set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/_set.js");
/**
 * @public
 * Strong reference implementation of {@link IBroadcastEvent}.
 */
class BroadcastEvent {
    constructor(key) {
        this.key = key;
        this.listeners = new Set();
        this.cache = null;
    }
    addListener(listener) {
        this.listeners.add(listener);
        this.cache = null;
    }
    addTemporaryListener(listener) {
        this.listeners.add(listener);
        this.cache = null;
        return () => this.removeListener(listener);
    }
    addOneTimeListener(listener) {
        const temporaryListener = {
            [this.key]: (...args) => {
                this.removeListener(temporaryListener);
                return listener[this.key](...args);
            }
        };
        this.addListener(temporaryListener);
        return () => this.removeListener(temporaryListener);
    }
    removeListener(listener) {
        this.listeners.delete(listener);
        this.cache = null;
    }
    emit(...args) {
        this.listeners.forEach(listener => listener[this.key](...args));
    }
    getTargets() {
        if (this.cache == null) {
            return this.cache = _set_1._Set.valuesToArray(this.listeners);
        }
        else {
            return this.cache;
        }
    }
}
exports.BroadcastEvent = BroadcastEvent;
//# sourceMappingURL=broadcast-event.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/_fp.js":
/*!*******************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/_fp.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Fp = void 0;
const fp_identity_1 = __webpack_require__(/*! ./impl/fp-identity */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js");
const fp_normalize_to_null_1 = __webpack_require__(/*! ./impl/fp-normalize-to-null */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-null.js");
const fp_normalize_to_undefined_1 = __webpack_require__(/*! ./impl/fp-normalize-to-undefined */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-undefined.js");
const fp_once_1 = __webpack_require__(/*! ./impl/fp-once */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-once.js");
const fp_no_op_1 = __webpack_require__(/*! ./impl/fp-no-op */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-no-op.js");
const fp_value_or_null_1 = __webpack_require__(/*! ./impl/fp-value-or-null */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-value-or-null.js");
const fp_maybe_new_value_1 = __webpack_require__(/*! ./impl/fp-maybe-new-value */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-maybe-new-value.js");
const fp_debounce_1 = __webpack_require__(/*! ./impl/fp-debounce */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-debounce.js");
/**
 * @public
 * Utilities for functional programming.
 */
class _Fp {
    constructor() {
    }
}
exports._Fp = _Fp;
/** {@inheritDoc fpDebounce} */
_Fp.debounce = fp_debounce_1.fpDebounce;
/** {@inheritDoc fpIdentity} */
_Fp.identity = fp_identity_1.fpIdentity;
/** {@inheritDoc fpMaybeNewValue} */
_Fp.maybeNewValue = fp_maybe_new_value_1.fpMaybeNewValue;
/** {@inheritDoc fpNoOp} */
_Fp.noOp = fp_no_op_1.fpNoOp;
/** {@inheritDoc fpNormalizeToNull} */
_Fp.normalizeToNull = fp_normalize_to_null_1.fpNormalizeToNull;
/** {@inheritDoc fpNormalizeToUndefined} */
_Fp.normalizeToUndefined = fp_normalize_to_undefined_1.fpNormalizeToUndefined;
/** {@inheritDoc fpOnce} */
_Fp.once = fp_once_1.fpOnce;
/** {@inheritDoc fpValueOrNull} */
_Fp.valueOrNull = fp_value_or_null_1.fpValueOrNull;
//# sourceMappingURL=_fp.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-debounce.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-debounce.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpDebounce = void 0;
/**
 * @public
 * Creates a function that will proxy calls to `functionToProxy` when `wait` time has passed since the last call, using the
 * most recent arguments. Where `immediate` is true, the function immediately proxies the call and will not proxy again until
 * `wait` time passes since the last call.
 *
 * @param functionToProxy - The function to debounce.
 * @param wait - Time to wait in ms.
 * @param immediate - If true run on the leading edge, default false.
 * @returns A debounced function.
 *
 * @remarks
 * As per underscore's debounce, except that returns have been disallowed.
 */
function fpDebounce(wait, immediate, functionToProxy) {
    let timeout;
    let previous;
    let args;
    let context;
    function later() {
        const passed = Date.now() - previous;
        if (wait > passed) {
            timeout = setTimeout(later, wait - passed);
        }
        else {
            timeout = undefined;
            if (!immediate) {
                functionToProxy.apply(context, args);
            }
            // This check is needed because `func` can recursively invoke `debounced`.
            if (timeout == null) {
                args = context = null;
            }
        }
    }
    const debounced = function (..._args) {
        context = this;
        args = _args;
        previous = Date.now();
        if (timeout == null) {
            timeout = setTimeout(later, wait);
            if (immediate) {
                functionToProxy.apply(context, args);
            }
        }
        return timeout;
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
    };
    return debounced;
}
exports.fpDebounce = fpDebounce;
//# sourceMappingURL=fp-debounce.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpIdentity = void 0;
/**
 * @public
 * Returns the argument.
 *
 * @remarks
 * See {@link fpIdentity}.
 */
function fpIdentity(arg) {
    return arg;
}
exports.fpIdentity = fpIdentity;
//# sourceMappingURL=fp-identity.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-maybe-new-value.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-maybe-new-value.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpMaybeNewValue = void 0;
/**
 * @public
 * Returns the newValue if defined, else the old value.
 *
 * @remarks
 * See {@link fpMaybeNewValue}.
 */
function fpMaybeNewValue(newValue, oldValue) {
    if (newValue != null) {
        return newValue;
    }
    return oldValue;
}
exports.fpMaybeNewValue = fpMaybeNewValue;
//# sourceMappingURL=fp-maybe-new-value.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-no-op.js":
/*!*****************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-no-op.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpNoOp = void 0;
/**
 * @public
 * Does nothing (intentionally...).
 *
 * @remarks
 * See {@link fpNoOp}.
 */
function fpNoOp(..._args) {
    // no action is intentional
}
exports.fpNoOp = fpNoOp;
//# sourceMappingURL=fp-no-op.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-null.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-null.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpNormalizeToNull = void 0;
/**
 * @public
 * Normalizes `undefined` input to `null`.
 *
 * @remarks
 * See {@link fpNormalizeToNull}.
 */
function fpNormalizeToNull(value) {
    if (value === undefined) {
        return null;
    }
    return value;
}
exports.fpNormalizeToNull = fpNormalizeToNull;
//# sourceMappingURL=fp-normalize-to-null.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-undefined.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-undefined.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpNormalizeToUndefined = void 0;
/**
 * @public
 * Normalizes `null` input to `undefined`.
 *
 * @remarks
 * See {@link fpNormalizeToUndefined}.
 */
function fpNormalizeToUndefined(value) {
    if (value === null) {
        return undefined;
    }
    return value;
}
exports.fpNormalizeToUndefined = fpNormalizeToUndefined;
//# sourceMappingURL=fp-normalize-to-undefined.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-once.js":
/*!****************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-once.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpOnce = void 0;
/**
 * @public
 * Creates a function that can be called many times but will run at most once.
 *
 * @remarks
 * See {@link fpOnce}.
 */
function fpOnce(initialize) {
    let item;
    let initialized = false;
    return (...args) => {
        if (initialized) {
            return item;
        }
        initialized = true;
        return item = initialize(...args);
    };
}
exports.fpOnce = fpOnce;
//# sourceMappingURL=fp-once.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-value-or-null.js":
/*!*************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-value-or-null.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fpValueOrNull = void 0;
/**
 * @public
 * Returns the value if the predicate is true, else null.
 * @remarks
 * See {@link fpValueOrNull}.
 */
function fpValueOrNull(predicate, value) {
    if (predicate) {
        return value;
    }
    return null;
}
exports.fpValueOrNull = fpValueOrNull;
//# sourceMappingURL=fp-value-or-null.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/identifiers/incrementing-identifier-factory.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/identifiers/incrementing-identifier-factory.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncrementingIdentifierFactory = void 0;
/**
 * @public
 * Provides an incrementing integer identifier.
 *
 * @remarks
 * By default the first ID will be 0, this may be configured at construction.
 */
class IncrementingIdentifierFactory {
    constructor(id = 0) {
        this.id = id;
    }
    getNextId() {
        return this.id++;
    }
}
exports.IncrementingIdentifierFactory = IncrementingIdentifierFactory;
//# sourceMappingURL=incrementing-identifier-factory.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js":
/*!******************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayBinaryLastIndexOf = exports.arrayBinaryIndexOf = exports.DebugSharedObjectChecks = exports.RawVoidPointer = exports.isLittleEndian = exports.SharedStaticArray = exports.SharedArray = exports.getEmscriptenWrapper = exports.TemporaryListener = exports.AReferenceCounted = exports.AOnDestroy = exports.ReferenceCountedPtr = exports.BroadcastEvent = exports.IncrementingIdentifierFactory = exports.DebugProtectedView = exports.RgbaColorPacker = exports.ERgbaShift = exports.ERgbaMasks = exports.DirtyCheckedUniqueCollection = exports.ECircularStackOverflowMode = exports.CircularFIFOStack = exports.CircularBuffer = exports.NormalizedDataViewProvider = exports.Vec4 = exports.Vec3 = exports.Range1d = exports.Vec2 = exports.Mat4 = exports.Mat3 = exports.Mat2 = exports.Range2d = exports.Margin2d = exports.ATypedArrayTuple = exports._String = exports._Set = exports._RegExp = exports._Path = exports._Number = exports._F64 = exports._F32 = exports._Math = exports._Map = exports._Iterator = exports._Fp = exports._Production = exports.NestableError = exports._Dictionary = exports._Debug = exports._Array = exports.RcJsUtilDebugImpl = void 0;
exports.mapDeleteGet = exports.mapDeleteFromSet = exports.mapConcat = exports.mapArrayMap = exports.mapAddToSet = exports.IncrementalUpdater = exports.iteratorConsumeAll = exports.iteratorEmptyIterator = exports.promiseRejectNull = exports.promiseRejectFalsey = exports.fpValueOrNull = exports.fpOnce = exports.fpNormalizeToUndefined = exports.fpNormalizeToNull = exports.fpNoOp = exports.fpMaybeNewValue = exports.fpIdentity = exports.fpDebounce = exports.Once = exports.dictionaryValues = exports.dictionaryPush = exports.dictionaryPairs = exports.dictionaryForEach = exports.dictionaryExtend = exports.dictionaryCloneExtend = exports.arrayUnion = exports.arraySymmetricDifference = exports.arraySetDifference = exports.arrayReplaceOne = exports.arrayRemoveOne = exports.arrayRemoveMany = exports.arrayPushUnique = exports.arrayNormalizeNullishToEmpty = exports.arrayNormalizeEmptyToUndefined = exports.arrayContains = exports.arrayMap = exports.arrayMapRange = exports.arrayLast = exports.arrayIsArray = exports.arrayIntersect = exports.arrayInsertAtIndex = exports.arrayIndex = exports.arrayGenerateRange = exports.arrayForEach = exports.arrayFlatMap = exports.arrayEmptyArray = exports.arrayCopyInto = exports.arrayCompactMap = exports.arrayCompact = exports.arrayCollect = void 0;
exports.stringNormalizeNullUndefinedToEmpty = exports.stringNormalizeEmptyToUndefined = exports.setValuesToArray = exports.setSymmetricDifference = exports.setSetDifference = exports.setIsSetEqual = exports.regexEscapeRegex = exports.pathJoin = exports.Mulberry32Generator = exports.NotRandomGenerator = exports.numberGetHexString = exports.mathMin = exports.mathMax = exports.mathHypot2 = exports.mathBoundRandom = exports.mathBound = exports.mapValuesToArray = exports.mapUnion = exports.mapSymmetricDifference = exports.mapSetDifference = exports.mapReportingAddToSet = exports.mapRemoveOneFromArray = exports.mapRemoveManyFromArray = exports.mapPush = exports.mapKeysToArray = exports.mapIntersect = exports.mapInitializeGet = exports.mapFirstValue = exports.mapFirstKey = exports.mapEntriesToArray = void 0;
var debug_namepace_1 = __webpack_require__(/*! ./debug/debug-namepace */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-namepace.js");
Object.defineProperty(exports, "RcJsUtilDebugImpl", ({ enumerable: true, get: function () { return debug_namepace_1.RcJsUtilDebugImpl; } }));
var _array_1 = __webpack_require__(/*! ./array/_array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/_array.js");
Object.defineProperty(exports, "_Array", ({ enumerable: true, get: function () { return _array_1._Array; } }));
var _debug_1 = __webpack_require__(/*! ./debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
Object.defineProperty(exports, "_Debug", ({ enumerable: true, get: function () { return _debug_1._Debug; } }));
var _dictionary_1 = __webpack_require__(/*! ./dictionary/_dictionary */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/_dictionary.js");
Object.defineProperty(exports, "_Dictionary", ({ enumerable: true, get: function () { return _dictionary_1._Dictionary; } }));
var nestable_error_1 = __webpack_require__(/*! ./error-handling/nestable-error */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/error-handling/nestable-error.js");
Object.defineProperty(exports, "NestableError", ({ enumerable: true, get: function () { return nestable_error_1.NestableError; } }));
var _production_1 = __webpack_require__(/*! ./production/_production */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js");
Object.defineProperty(exports, "_Production", ({ enumerable: true, get: function () { return _production_1._Production; } }));
var _fp_1 = __webpack_require__(/*! ./fp/_fp */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/_fp.js");
Object.defineProperty(exports, "_Fp", ({ enumerable: true, get: function () { return _fp_1._Fp; } }));
var _iterator_1 = __webpack_require__(/*! ./iterators/_iterator */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/_iterator.js");
Object.defineProperty(exports, "_Iterator", ({ enumerable: true, get: function () { return _iterator_1._Iterator; } }));
var _map_1 = __webpack_require__(/*! ./map/_map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/_map.js");
Object.defineProperty(exports, "_Map", ({ enumerable: true, get: function () { return _map_1._Map; } }));
var _math_1 = __webpack_require__(/*! ./math/_math */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/_math.js");
Object.defineProperty(exports, "_Math", ({ enumerable: true, get: function () { return _math_1._Math; } }));
var _f32_1 = __webpack_require__(/*! ./number/impl/_f32 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f32.js");
Object.defineProperty(exports, "_F32", ({ enumerable: true, get: function () { return _f32_1._F32; } }));
var _f64_1 = __webpack_require__(/*! ./number/impl/_f64 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f64.js");
Object.defineProperty(exports, "_F64", ({ enumerable: true, get: function () { return _f64_1._F64; } }));
var _number_1 = __webpack_require__(/*! ./number/_number */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/_number.js");
Object.defineProperty(exports, "_Number", ({ enumerable: true, get: function () { return _number_1._Number; } }));
var _path_1 = __webpack_require__(/*! ./path/_path */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/_path.js");
Object.defineProperty(exports, "_Path", ({ enumerable: true, get: function () { return _path_1._Path; } }));
var _reg_exp_1 = __webpack_require__(/*! ./reg-exp/_reg-exp */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/_reg-exp.js");
Object.defineProperty(exports, "_RegExp", ({ enumerable: true, get: function () { return _reg_exp_1._RegExp; } }));
var _set_1 = __webpack_require__(/*! ./set/_set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/_set.js");
Object.defineProperty(exports, "_Set", ({ enumerable: true, get: function () { return _set_1._Set; } }));
var _string_1 = __webpack_require__(/*! ./string/_string */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/_string.js");
Object.defineProperty(exports, "_String", ({ enumerable: true, get: function () { return _string_1._String; } }));
var a_typed_array_tuple_1 = __webpack_require__(/*! ./array/typed-array/a-typed-array-tuple */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/a-typed-array-tuple.js");
Object.defineProperty(exports, "ATypedArrayTuple", ({ enumerable: true, get: function () { return a_typed_array_tuple_1.ATypedArrayTuple; } }));
var margin2d_1 = __webpack_require__(/*! ./array/typed-array/2d/margin2d/margin2d */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/margin2d/margin2d.js");
Object.defineProperty(exports, "Margin2d", ({ enumerable: true, get: function () { return margin2d_1.Margin2d; } }));
var range2d_1 = __webpack_require__(/*! ./array/typed-array/2d/range2d/range2d */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/range2d.js");
Object.defineProperty(exports, "Range2d", ({ enumerable: true, get: function () { return range2d_1.Range2d; } }));
var mat2_1 = __webpack_require__(/*! ./array/typed-array/mat2/mat2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat2/mat2.js");
Object.defineProperty(exports, "Mat2", ({ enumerable: true, get: function () { return mat2_1.Mat2; } }));
var mat3_1 = __webpack_require__(/*! ./array/typed-array/mat3/mat3 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat3/mat3.js");
Object.defineProperty(exports, "Mat3", ({ enumerable: true, get: function () { return mat3_1.Mat3; } }));
var mat4_1 = __webpack_require__(/*! ./array/typed-array/mat4/mat4 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/mat4/mat4.js");
Object.defineProperty(exports, "Mat4", ({ enumerable: true, get: function () { return mat4_1.Mat4; } }));
var vec2_1 = __webpack_require__(/*! ./array/typed-array/vec2/vec2 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/vec2.js");
Object.defineProperty(exports, "Vec2", ({ enumerable: true, get: function () { return vec2_1.Vec2; } }));
var range1d_1 = __webpack_require__(/*! ./array/typed-array/vec2/range1d/range1d */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec2/range1d/range1d.js");
Object.defineProperty(exports, "Range1d", ({ enumerable: true, get: function () { return range1d_1.Range1d; } }));
var vec3_1 = __webpack_require__(/*! ./array/typed-array/vec3/vec3 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec3/vec3.js");
Object.defineProperty(exports, "Vec3", ({ enumerable: true, get: function () { return vec3_1.Vec3; } }));
var vec4_1 = __webpack_require__(/*! ./array/typed-array/vec4/vec4 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/vec4/vec4.js");
Object.defineProperty(exports, "Vec4", ({ enumerable: true, get: function () { return vec4_1.Vec4; } }));
var normalized_data_view_provider_1 = __webpack_require__(/*! ./array/typed-array/normalized-data-view/normalized-data-view-provider */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/normalized-data-view/normalized-data-view-provider.js");
Object.defineProperty(exports, "NormalizedDataViewProvider", ({ enumerable: true, get: function () { return normalized_data_view_provider_1.NormalizedDataViewProvider; } }));
var circular_buffer_1 = __webpack_require__(/*! ./collection/circular-buffer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-buffer.js");
Object.defineProperty(exports, "CircularBuffer", ({ enumerable: true, get: function () { return circular_buffer_1.CircularBuffer; } }));
var circular_fifo_stack_1 = __webpack_require__(/*! ./collection/circular-fifo-stack */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/circular-fifo-stack.js");
Object.defineProperty(exports, "CircularFIFOStack", ({ enumerable: true, get: function () { return circular_fifo_stack_1.CircularFIFOStack; } }));
Object.defineProperty(exports, "ECircularStackOverflowMode", ({ enumerable: true, get: function () { return circular_fifo_stack_1.ECircularStackOverflowMode; } }));
var dirty_checked_unique_collection_1 = __webpack_require__(/*! ./collection/dirty-checked-unique-collection */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/collection/dirty-checked-unique-collection.js");
Object.defineProperty(exports, "DirtyCheckedUniqueCollection", ({ enumerable: true, get: function () { return dirty_checked_unique_collection_1.DirtyCheckedUniqueCollection; } }));
var e_rgba_masks_1 = __webpack_require__(/*! ./colors/e-rgba-masks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/e-rgba-masks.js");
Object.defineProperty(exports, "ERgbaMasks", ({ enumerable: true, get: function () { return e_rgba_masks_1.ERgbaMasks; } }));
Object.defineProperty(exports, "ERgbaShift", ({ enumerable: true, get: function () { return e_rgba_masks_1.ERgbaShift; } }));
var rgba_color_packer_1 = __webpack_require__(/*! ./colors/rgba-color-packer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/colors/rgba-color-packer.js");
Object.defineProperty(exports, "RgbaColorPacker", ({ enumerable: true, get: function () { return rgba_color_packer_1.RgbaColorPacker; } }));
var debug_protected_view_1 = __webpack_require__(/*! ./debug/debug-protected-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-protected-view.js");
Object.defineProperty(exports, "DebugProtectedView", ({ enumerable: true, get: function () { return debug_protected_view_1.DebugProtectedView; } }));
var incrementing_identifier_factory_1 = __webpack_require__(/*! ./identifiers/incrementing-identifier-factory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/identifiers/incrementing-identifier-factory.js");
Object.defineProperty(exports, "IncrementingIdentifierFactory", ({ enumerable: true, get: function () { return incrementing_identifier_factory_1.IncrementingIdentifierFactory; } }));
var broadcast_event_1 = __webpack_require__(/*! ./eventing/broadcast-event */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/eventing/broadcast-event.js");
Object.defineProperty(exports, "BroadcastEvent", ({ enumerable: true, get: function () { return broadcast_event_1.BroadcastEvent; } }));
var reference_counted_ptr_1 = __webpack_require__(/*! ./lifecycle/reference-counted-ptr */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/reference-counted-ptr.js");
Object.defineProperty(exports, "ReferenceCountedPtr", ({ enumerable: true, get: function () { return reference_counted_ptr_1.ReferenceCountedPtr; } }));
var i_on_destroy_1 = __webpack_require__(/*! ./lifecycle/i-on-destroy */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/i-on-destroy.js");
Object.defineProperty(exports, "AOnDestroy", ({ enumerable: true, get: function () { return i_on_destroy_1.AOnDestroy; } }));
var a_reference_counted_1 = __webpack_require__(/*! ./lifecycle/a-reference-counted */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/a-reference-counted.js");
Object.defineProperty(exports, "AReferenceCounted", ({ enumerable: true, get: function () { return a_reference_counted_1.AReferenceCounted; } }));
var temporary_listener_1 = __webpack_require__(/*! ./lifecycle/temporary-listener */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/temporary-listener.js");
Object.defineProperty(exports, "TemporaryListener", ({ enumerable: true, get: function () { return temporary_listener_1.TemporaryListener; } }));
var get_emscripten_wrapper_1 = __webpack_require__(/*! ./web-assembly/emscripten/get-emscripten-wrapper */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/get-emscripten-wrapper.js");
Object.defineProperty(exports, "getEmscriptenWrapper", ({ enumerable: true, get: function () { return get_emscripten_wrapper_1.getEmscriptenWrapper; } }));
var shared_array_1 = __webpack_require__(/*! ./web-assembly/shared-array/shared-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shared-array/shared-array.js");
Object.defineProperty(exports, "SharedArray", ({ enumerable: true, get: function () { return shared_array_1.SharedArray; } }));
var shared_static_array_1 = __webpack_require__(/*! ./web-assembly/shared-array/shared-static-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shared-array/shared-static-array.js");
Object.defineProperty(exports, "SharedStaticArray", ({ enumerable: true, get: function () { return shared_static_array_1.SharedStaticArray; } }));
var is_little_endian_1 = __webpack_require__(/*! ./web-assembly/is-little-endian */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js");
Object.defineProperty(exports, "isLittleEndian", ({ enumerable: true, get: function () { return is_little_endian_1.isLittleEndian; } }));
var raw_void_pointer_1 = __webpack_require__(/*! ./web-assembly/raw-void-pointer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/raw-void-pointer.js");
Object.defineProperty(exports, "RawVoidPointer", ({ enumerable: true, get: function () { return raw_void_pointer_1.RawVoidPointer; } }));
var debug_shared_object_checks_1 = __webpack_require__(/*! ./web-assembly/debug-shared-object-checks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/debug-shared-object-checks.js");
Object.defineProperty(exports, "DebugSharedObjectChecks", ({ enumerable: true, get: function () { return debug_shared_object_checks_1.DebugSharedObjectChecks; } }));
var array_binary_index_of_1 = __webpack_require__(/*! ./array/impl/array-binary-index-of */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-index-of.js");
Object.defineProperty(exports, "arrayBinaryIndexOf", ({ enumerable: true, get: function () { return array_binary_index_of_1.arrayBinaryIndexOf; } }));
var array_binary_last_index_of_1 = __webpack_require__(/*! ./array/impl/array-binary-last-index-of */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-binary-last-index-of.js");
Object.defineProperty(exports, "arrayBinaryLastIndexOf", ({ enumerable: true, get: function () { return array_binary_last_index_of_1.arrayBinaryLastIndexOf; } }));
var array_collect_1 = __webpack_require__(/*! ./array/impl/array-collect */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-collect.js");
Object.defineProperty(exports, "arrayCollect", ({ enumerable: true, get: function () { return array_collect_1.arrayCollect; } }));
var array_compact_1 = __webpack_require__(/*! ./array/impl/array-compact */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact.js");
Object.defineProperty(exports, "arrayCompact", ({ enumerable: true, get: function () { return array_compact_1.arrayCompact; } }));
var array_compact_map_1 = __webpack_require__(/*! ./array/impl/array-compact-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-compact-map.js");
Object.defineProperty(exports, "arrayCompactMap", ({ enumerable: true, get: function () { return array_compact_map_1.arrayCompactMap; } }));
var array_copy_into_1 = __webpack_require__(/*! ./array/impl/array-copy-into */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-copy-into.js");
Object.defineProperty(exports, "arrayCopyInto", ({ enumerable: true, get: function () { return array_copy_into_1.arrayCopyInto; } }));
var array_empty_array_1 = __webpack_require__(/*! ./array/impl/array-empty-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-empty-array.js");
Object.defineProperty(exports, "arrayEmptyArray", ({ enumerable: true, get: function () { return array_empty_array_1.arrayEmptyArray; } }));
var array_flat_map_1 = __webpack_require__(/*! ./array/impl/array-flat-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-flat-map.js");
Object.defineProperty(exports, "arrayFlatMap", ({ enumerable: true, get: function () { return array_flat_map_1.arrayFlatMap; } }));
var array_for_each_1 = __webpack_require__(/*! ./array/impl/array-for-each */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-for-each.js");
Object.defineProperty(exports, "arrayForEach", ({ enumerable: true, get: function () { return array_for_each_1.arrayForEach; } }));
var array_generate_range_1 = __webpack_require__(/*! ./array/impl/array-generate-range */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-generate-range.js");
Object.defineProperty(exports, "arrayGenerateRange", ({ enumerable: true, get: function () { return array_generate_range_1.arrayGenerateRange; } }));
var array_index_1 = __webpack_require__(/*! ./array/impl/array-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-index.js");
Object.defineProperty(exports, "arrayIndex", ({ enumerable: true, get: function () { return array_index_1.arrayIndex; } }));
var array_insert_at_index_1 = __webpack_require__(/*! ./array/impl/array-insert-at-index */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-insert-at-index.js");
Object.defineProperty(exports, "arrayInsertAtIndex", ({ enumerable: true, get: function () { return array_insert_at_index_1.arrayInsertAtIndex; } }));
var array_intersect_1 = __webpack_require__(/*! ./array/impl/array-intersect */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-intersect.js");
Object.defineProperty(exports, "arrayIntersect", ({ enumerable: true, get: function () { return array_intersect_1.arrayIntersect; } }));
var array_is_array_1 = __webpack_require__(/*! ./array/impl/array-is-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-is-array.js");
Object.defineProperty(exports, "arrayIsArray", ({ enumerable: true, get: function () { return array_is_array_1.arrayIsArray; } }));
var array_last_1 = __webpack_require__(/*! ./array/impl/array-last */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-last.js");
Object.defineProperty(exports, "arrayLast", ({ enumerable: true, get: function () { return array_last_1.arrayLast; } }));
var array_map_range_1 = __webpack_require__(/*! ./array/impl/array-map-range */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map-range.js");
Object.defineProperty(exports, "arrayMapRange", ({ enumerable: true, get: function () { return array_map_range_1.arrayMapRange; } }));
var array_map_1 = __webpack_require__(/*! ./array/impl/array-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-map.js");
Object.defineProperty(exports, "arrayMap", ({ enumerable: true, get: function () { return array_map_1.arrayMap; } }));
var array_contains_1 = __webpack_require__(/*! ./array/impl/array-contains */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-contains.js");
Object.defineProperty(exports, "arrayContains", ({ enumerable: true, get: function () { return array_contains_1.arrayContains; } }));
var array_normalize_empty_to_undefined_1 = __webpack_require__(/*! ./array/impl/array-normalize-empty-to-undefined */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-empty-to-undefined.js");
Object.defineProperty(exports, "arrayNormalizeEmptyToUndefined", ({ enumerable: true, get: function () { return array_normalize_empty_to_undefined_1.arrayNormalizeEmptyToUndefined; } }));
var array_normalize_nullish_to_empty_1 = __webpack_require__(/*! ./array/impl/array-normalize-nullish-to-empty */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-normalize-nullish-to-empty.js");
Object.defineProperty(exports, "arrayNormalizeNullishToEmpty", ({ enumerable: true, get: function () { return array_normalize_nullish_to_empty_1.arrayNormalizeNullishToEmpty; } }));
var array_push_unique_1 = __webpack_require__(/*! ./array/impl/array-push-unique */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-push-unique.js");
Object.defineProperty(exports, "arrayPushUnique", ({ enumerable: true, get: function () { return array_push_unique_1.arrayPushUnique; } }));
var array_remove_many_1 = __webpack_require__(/*! ./array/impl/array-remove-many */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-many.js");
Object.defineProperty(exports, "arrayRemoveMany", ({ enumerable: true, get: function () { return array_remove_many_1.arrayRemoveMany; } }));
var array_remove_one_1 = __webpack_require__(/*! ./array/impl/array-remove-one */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-one.js");
Object.defineProperty(exports, "arrayRemoveOne", ({ enumerable: true, get: function () { return array_remove_one_1.arrayRemoveOne; } }));
var array_replace_one_1 = __webpack_require__(/*! ./array/impl/array-replace-one */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-replace-one.js");
Object.defineProperty(exports, "arrayReplaceOne", ({ enumerable: true, get: function () { return array_replace_one_1.arrayReplaceOne; } }));
var array_set_difference_1 = __webpack_require__(/*! ./array/impl/array-set-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-set-difference.js");
Object.defineProperty(exports, "arraySetDifference", ({ enumerable: true, get: function () { return array_set_difference_1.arraySetDifference; } }));
var array_symmetric_difference_1 = __webpack_require__(/*! ./array/impl/array-symmetric-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-symmetric-difference.js");
Object.defineProperty(exports, "arraySymmetricDifference", ({ enumerable: true, get: function () { return array_symmetric_difference_1.arraySymmetricDifference; } }));
var array_union_1 = __webpack_require__(/*! ./array/impl/array-union */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-union.js");
Object.defineProperty(exports, "arrayUnion", ({ enumerable: true, get: function () { return array_union_1.arrayUnion; } }));
var dictionary_clone_extend_1 = __webpack_require__(/*! ./dictionary/impl/dictionary-clone-extend */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-clone-extend.js");
Object.defineProperty(exports, "dictionaryCloneExtend", ({ enumerable: true, get: function () { return dictionary_clone_extend_1.dictionaryCloneExtend; } }));
var dictionary_extend_1 = __webpack_require__(/*! ./dictionary/impl/dictionary-extend */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-extend.js");
Object.defineProperty(exports, "dictionaryExtend", ({ enumerable: true, get: function () { return dictionary_extend_1.dictionaryExtend; } }));
var dictionary_foreach_1 = __webpack_require__(/*! ./dictionary/impl/dictionary-foreach */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-foreach.js");
Object.defineProperty(exports, "dictionaryForEach", ({ enumerable: true, get: function () { return dictionary_foreach_1.dictionaryForEach; } }));
var dictionary_pairs_1 = __webpack_require__(/*! ./dictionary/impl/dictionary-pairs */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-pairs.js");
Object.defineProperty(exports, "dictionaryPairs", ({ enumerable: true, get: function () { return dictionary_pairs_1.dictionaryPairs; } }));
var dictionary_push_1 = __webpack_require__(/*! ./dictionary/impl/dictionary-push */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-push.js");
Object.defineProperty(exports, "dictionaryPush", ({ enumerable: true, get: function () { return dictionary_push_1.dictionaryPush; } }));
var dictionary_values_1 = __webpack_require__(/*! ./dictionary/impl/dictionary-values */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/dictionary/impl/dictionary-values.js");
Object.defineProperty(exports, "dictionaryValues", ({ enumerable: true, get: function () { return dictionary_values_1.dictionaryValues; } }));
var once_1 = __webpack_require__(/*! ./decorators/once */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/decorators/once.js");
Object.defineProperty(exports, "Once", ({ enumerable: true, get: function () { return once_1.Once; } }));
var fp_debounce_1 = __webpack_require__(/*! ./fp/impl/fp-debounce */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-debounce.js");
Object.defineProperty(exports, "fpDebounce", ({ enumerable: true, get: function () { return fp_debounce_1.fpDebounce; } }));
var fp_identity_1 = __webpack_require__(/*! ./fp/impl/fp-identity */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-identity.js");
Object.defineProperty(exports, "fpIdentity", ({ enumerable: true, get: function () { return fp_identity_1.fpIdentity; } }));
var fp_maybe_new_value_1 = __webpack_require__(/*! ./fp/impl/fp-maybe-new-value */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-maybe-new-value.js");
Object.defineProperty(exports, "fpMaybeNewValue", ({ enumerable: true, get: function () { return fp_maybe_new_value_1.fpMaybeNewValue; } }));
var fp_no_op_1 = __webpack_require__(/*! ./fp/impl/fp-no-op */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-no-op.js");
Object.defineProperty(exports, "fpNoOp", ({ enumerable: true, get: function () { return fp_no_op_1.fpNoOp; } }));
var fp_normalize_to_null_1 = __webpack_require__(/*! ./fp/impl/fp-normalize-to-null */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-null.js");
Object.defineProperty(exports, "fpNormalizeToNull", ({ enumerable: true, get: function () { return fp_normalize_to_null_1.fpNormalizeToNull; } }));
var fp_normalize_to_undefined_1 = __webpack_require__(/*! ./fp/impl/fp-normalize-to-undefined */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-normalize-to-undefined.js");
Object.defineProperty(exports, "fpNormalizeToUndefined", ({ enumerable: true, get: function () { return fp_normalize_to_undefined_1.fpNormalizeToUndefined; } }));
var fp_once_1 = __webpack_require__(/*! ./fp/impl/fp-once */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-once.js");
Object.defineProperty(exports, "fpOnce", ({ enumerable: true, get: function () { return fp_once_1.fpOnce; } }));
var fp_value_or_null_1 = __webpack_require__(/*! ./fp/impl/fp-value-or-null */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/fp/impl/fp-value-or-null.js");
Object.defineProperty(exports, "fpValueOrNull", ({ enumerable: true, get: function () { return fp_value_or_null_1.fpValueOrNull; } }));
var promise_reject_falsey_1 = __webpack_require__(/*! ./promise/impl/promise-reject-falsey */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/promise/impl/promise-reject-falsey.js");
Object.defineProperty(exports, "promiseRejectFalsey", ({ enumerable: true, get: function () { return promise_reject_falsey_1.promiseRejectFalsey; } }));
var promise_reject_null_1 = __webpack_require__(/*! ./promise/impl/promise-reject-null */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/promise/impl/promise-reject-null.js");
Object.defineProperty(exports, "promiseRejectNull", ({ enumerable: true, get: function () { return promise_reject_null_1.promiseRejectNull; } }));
var iterator_empty_iterator_1 = __webpack_require__(/*! ./iterators/impl/iterator-empty-iterator */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-empty-iterator.js");
Object.defineProperty(exports, "iteratorEmptyIterator", ({ enumerable: true, get: function () { return iterator_empty_iterator_1.iteratorEmptyIterator; } }));
var iterator_consume_all_1 = __webpack_require__(/*! ./iterators/impl/iterator-consume-all */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-consume-all.js");
Object.defineProperty(exports, "iteratorConsumeAll", ({ enumerable: true, get: function () { return iterator_consume_all_1.iteratorConsumeAll; } }));
var incremental_updater_1 = __webpack_require__(/*! ./iterators/incremental-updater */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/incremental-updater.js");
Object.defineProperty(exports, "IncrementalUpdater", ({ enumerable: true, get: function () { return incremental_updater_1.IncrementalUpdater; } }));
var map_add_to_set_1 = __webpack_require__(/*! ./map/impl/map-add-to-set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-add-to-set.js");
Object.defineProperty(exports, "mapAddToSet", ({ enumerable: true, get: function () { return map_add_to_set_1.mapAddToSet; } }));
var map_array_map_1 = __webpack_require__(/*! ./map/impl/map-array-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-array-map.js");
Object.defineProperty(exports, "mapArrayMap", ({ enumerable: true, get: function () { return map_array_map_1.mapArrayMap; } }));
var map_concat_1 = __webpack_require__(/*! ./map/impl/map-concat */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-concat.js");
Object.defineProperty(exports, "mapConcat", ({ enumerable: true, get: function () { return map_concat_1.mapConcat; } }));
var map_delete_from_set_1 = __webpack_require__(/*! ./map/impl/map-delete-from-set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-from-set.js");
Object.defineProperty(exports, "mapDeleteFromSet", ({ enumerable: true, get: function () { return map_delete_from_set_1.mapDeleteFromSet; } }));
var map_delete_get_1 = __webpack_require__(/*! ./map/impl/map-delete-get */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-get.js");
Object.defineProperty(exports, "mapDeleteGet", ({ enumerable: true, get: function () { return map_delete_get_1.mapDeleteGet; } }));
var map_entries_to_array_1 = __webpack_require__(/*! ./map/impl/map-entries-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-entries-to-array.js");
Object.defineProperty(exports, "mapEntriesToArray", ({ enumerable: true, get: function () { return map_entries_to_array_1.mapEntriesToArray; } }));
var map_first_key_1 = __webpack_require__(/*! ./map/impl/map-first-key */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-key.js");
Object.defineProperty(exports, "mapFirstKey", ({ enumerable: true, get: function () { return map_first_key_1.mapFirstKey; } }));
var map_first_value_1 = __webpack_require__(/*! ./map/impl/map-first-value */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-value.js");
Object.defineProperty(exports, "mapFirstValue", ({ enumerable: true, get: function () { return map_first_value_1.mapFirstValue; } }));
var map_intialize_get_1 = __webpack_require__(/*! ./map/impl/map-intialize-get */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intialize-get.js");
Object.defineProperty(exports, "mapInitializeGet", ({ enumerable: true, get: function () { return map_intialize_get_1.mapInitializeGet; } }));
var map_intersect_1 = __webpack_require__(/*! ./map/impl/map-intersect */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intersect.js");
Object.defineProperty(exports, "mapIntersect", ({ enumerable: true, get: function () { return map_intersect_1.mapIntersect; } }));
var map_keys_to_array_1 = __webpack_require__(/*! ./map/impl/map-keys-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-keys-to-array.js");
Object.defineProperty(exports, "mapKeysToArray", ({ enumerable: true, get: function () { return map_keys_to_array_1.mapKeysToArray; } }));
var map_push_1 = __webpack_require__(/*! ./map/impl/map-push */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-push.js");
Object.defineProperty(exports, "mapPush", ({ enumerable: true, get: function () { return map_push_1.mapPush; } }));
var map_remove_many_from_array_1 = __webpack_require__(/*! ./map/impl/map-remove-many-from-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-many-from-array.js");
Object.defineProperty(exports, "mapRemoveManyFromArray", ({ enumerable: true, get: function () { return map_remove_many_from_array_1.mapRemoveManyFromArray; } }));
var map_remove_one_from_array_1 = __webpack_require__(/*! ./map/impl/map-remove-one-from-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-one-from-array.js");
Object.defineProperty(exports, "mapRemoveOneFromArray", ({ enumerable: true, get: function () { return map_remove_one_from_array_1.mapRemoveOneFromArray; } }));
var map_reporting_add_to_set_1 = __webpack_require__(/*! ./map/impl/map-reporting-add-to-set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-reporting-add-to-set.js");
Object.defineProperty(exports, "mapReportingAddToSet", ({ enumerable: true, get: function () { return map_reporting_add_to_set_1.mapReportingAddToSet; } }));
var map_set_difference_1 = __webpack_require__(/*! ./map/impl/map-set-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-set-difference.js");
Object.defineProperty(exports, "mapSetDifference", ({ enumerable: true, get: function () { return map_set_difference_1.mapSetDifference; } }));
var map_symmetric_difference_1 = __webpack_require__(/*! ./map/impl/map-symmetric-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-symmetric-difference.js");
Object.defineProperty(exports, "mapSymmetricDifference", ({ enumerable: true, get: function () { return map_symmetric_difference_1.mapSymmetricDifference; } }));
var map_union_1 = __webpack_require__(/*! ./map/impl/map-union */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-union.js");
Object.defineProperty(exports, "mapUnion", ({ enumerable: true, get: function () { return map_union_1.mapUnion; } }));
var map_values_to_array_1 = __webpack_require__(/*! ./map/impl/map-values-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-values-to-array.js");
Object.defineProperty(exports, "mapValuesToArray", ({ enumerable: true, get: function () { return map_values_to_array_1.mapValuesToArray; } }));
var math_bound_1 = __webpack_require__(/*! ./math/impl/math-bound */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound.js");
Object.defineProperty(exports, "mathBound", ({ enumerable: true, get: function () { return math_bound_1.mathBound; } }));
var math_bound_random_1 = __webpack_require__(/*! ./math/impl/math-bound-random */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound-random.js");
Object.defineProperty(exports, "mathBoundRandom", ({ enumerable: true, get: function () { return math_bound_random_1.mathBoundRandom; } }));
var math_hypot_1 = __webpack_require__(/*! ./math/impl/math-hypot */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-hypot.js");
Object.defineProperty(exports, "mathHypot2", ({ enumerable: true, get: function () { return math_hypot_1.mathHypot2; } }));
var math_max_1 = __webpack_require__(/*! ./math/impl/math-max */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-max.js");
Object.defineProperty(exports, "mathMax", ({ enumerable: true, get: function () { return math_max_1.mathMax; } }));
var math_min_1 = __webpack_require__(/*! ./math/impl/math-min */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-min.js");
Object.defineProperty(exports, "mathMin", ({ enumerable: true, get: function () { return math_min_1.mathMin; } }));
var number_get_hex_string_1 = __webpack_require__(/*! ./number/impl/number-get-hex-string */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/number-get-hex-string.js");
Object.defineProperty(exports, "numberGetHexString", ({ enumerable: true, get: function () { return number_get_hex_string_1.numberGetHexString; } }));
var not_random_generator_1 = __webpack_require__(/*! ./number/random-numbers/not-random-generator */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/random-numbers/not-random-generator.js");
Object.defineProperty(exports, "NotRandomGenerator", ({ enumerable: true, get: function () { return not_random_generator_1.NotRandomGenerator; } }));
var mulberry_32_generator_1 = __webpack_require__(/*! ./number/random-numbers/mulberry-32-generator */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/random-numbers/mulberry-32-generator.js");
Object.defineProperty(exports, "Mulberry32Generator", ({ enumerable: true, get: function () { return mulberry_32_generator_1.Mulberry32Generator; } }));
var path_join_1 = __webpack_require__(/*! ./path/impl/path-join */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/impl/path-join.js");
Object.defineProperty(exports, "pathJoin", ({ enumerable: true, get: function () { return path_join_1.pathJoin; } }));
var regex_escape_regex_1 = __webpack_require__(/*! ./reg-exp/impl/regex-escape-regex */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/impl/regex-escape-regex.js");
Object.defineProperty(exports, "regexEscapeRegex", ({ enumerable: true, get: function () { return regex_escape_regex_1.regexEscapeRegex; } }));
var set_is_set_equal_1 = __webpack_require__(/*! ./set/impl/set-is-set-equal */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-is-set-equal.js");
Object.defineProperty(exports, "setIsSetEqual", ({ enumerable: true, get: function () { return set_is_set_equal_1.setIsSetEqual; } }));
var set_set_difference_1 = __webpack_require__(/*! ./set/impl/set-set-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-set-difference.js");
Object.defineProperty(exports, "setSetDifference", ({ enumerable: true, get: function () { return set_set_difference_1.setSetDifference; } }));
var set_symmetric_difference_1 = __webpack_require__(/*! ./set/impl/set-symmetric-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-symmetric-difference.js");
Object.defineProperty(exports, "setSymmetricDifference", ({ enumerable: true, get: function () { return set_symmetric_difference_1.setSymmetricDifference; } }));
var set_values_to_array_1 = __webpack_require__(/*! ./set/impl/set-values-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-values-to-array.js");
Object.defineProperty(exports, "setValuesToArray", ({ enumerable: true, get: function () { return set_values_to_array_1.setValuesToArray; } }));
var string_normalize_empty_to_undefined_1 = __webpack_require__(/*! ./string/impl/string-normalize-empty-to-undefined */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-empty-to-undefined.js");
Object.defineProperty(exports, "stringNormalizeEmptyToUndefined", ({ enumerable: true, get: function () { return string_normalize_empty_to_undefined_1.stringNormalizeEmptyToUndefined; } }));
var string_normalize_null_undefined_to_empty_1 = __webpack_require__(/*! ./string/impl/string-normalize-null-undefined-to-empty */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-null-undefined-to-empty.js");
Object.defineProperty(exports, "stringNormalizeNullUndefinedToEmpty", ({ enumerable: true, get: function () { return string_normalize_null_undefined_to_empty_1.stringNormalizeNullUndefinedToEmpty; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/_iterator.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/_iterator.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Iterator = void 0;
const iterator_consume_all_1 = __webpack_require__(/*! ./impl/iterator-consume-all */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-consume-all.js");
const iterator_empty_iterator_1 = __webpack_require__(/*! ./impl/iterator-empty-iterator */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-empty-iterator.js");
// noinspection JSUnusedLocalSymbols
/**
 * @public
 * Utilities relating to `IterableIterator` & generators.
 */
class _Iterator {
    constructor() {
        // no extensions allows
    }
}
exports._Iterator = _Iterator;
/** {@inheritDoc iteratorEmptyIterator} */
_Iterator.emptyIterator = iterator_empty_iterator_1.iteratorEmptyIterator;
/** {@inheritDoc iteratorConsumeAll} */
_Iterator.consumeAll = iterator_consume_all_1.iteratorConsumeAll;
//# sourceMappingURL=_iterator.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-consume-all.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-consume-all.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iteratorConsumeAll = void 0;
/**
 * @public
 * Iterate over an iterator until it's done, discarding the results.
 */
function iteratorConsumeAll(iterator) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    while (!iterator.next().done) {
        // no action needed
    }
}
exports.iteratorConsumeAll = iteratorConsumeAll;
//# sourceMappingURL=iterator-consume-all.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-empty-iterator.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/impl/iterator-empty-iterator.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iteratorEmptyIterator = void 0;
/**
 * @public
 * An iterator that is done.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.iteratorEmptyIterator = {
    [Symbol.iterator]() {
        return this;
    },
    next() {
        return this.result;
    },
    result: { done: true, value: null },
};
//# sourceMappingURL=iterator-empty-iterator.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/incremental-updater.js":
/*!******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/iterators/incremental-updater.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IncrementalUpdater = void 0;
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Performs update operations once every `waitPeriod` until the iterator returned by {@link IIncrementallyUpdatable} is
 * exhausted.
 */
class IncrementalUpdater {
    constructor(updatable, waitPeriod = 4) {
        this.updatable = updatable;
        this.waitPeriod = waitPeriod;
        /**
         * Remains true while the update is suspended.
         */
        this.isUpdating = false;
        this.update = () => {
            var _a;
            (_a = this.currentIterator) !== null && _a !== void 0 ? _a : (this.currentIterator = this.updatable.incrementallyUpdate());
            if (this.currentIterator.next().done === true) {
                this.currentIterator = null;
                this.id = null;
                this.isUpdating = false;
            }
            else {
                this.id = setTimeout(this.update, this.waitPeriod);
            }
        };
        this.currentIterator = null;
        this.id = null;
    }
    /**
     * Cancel the update and clear the task.
     */
    cancel() {
        if (this.id != null) {
            clearTimeout(this.id);
            this.id = null;
            this.isUpdating = false;
        }
        this.currentIterator = null;
    }
    /**
     * Suspends the current task if one is active.
     */
    suspend() {
        if (this.id != null) {
            clearTimeout(this.id);
            this.id = null;
        }
    }
    /**
     * Start a new update cycle. If an update was already in progress it will be cancelled.
     */
    beginUpdate() {
        this.cancel();
        this.isUpdating = true;
        this.update();
    }
    /**
     * Resumes the currently suspended task. It is an error to call this if there is not a currently suspended task.
     */
    resume() {
        DEBUG_MODE && _debug_1._Debug.assert(this.isUpdating && this.id == null, "nothing to resume");
        this.update();
    }
}
exports.IncrementalUpdater = IncrementalUpdater;
//# sourceMappingURL=incremental-updater.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/a-reference-counted.js":
/*!******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/a-reference-counted.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AReferenceCounted = void 0;
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Provides a way to handle cleanup of manually managed resources where there is not a single owner.
 * NB The object is pre-claimed (ref count 1) on creation.
 */
class AReferenceCounted {
    constructor() {
        this.references = 1;
    }
    /**
     * Call when the object is received.
     */
    claim() {
        if (this.references === 0) {
            DEBUG_MODE && _debug_1._Debug.error("object has been released already");
            return;
        }
        ++this.references;
    }
    /**
     * Call when done with the object.
     */
    release() {
        if (--this.references === 0) {
            this.onFree();
        }
    }
    getIsDestroyed() {
        return this.references <= 0;
    }
}
exports.AReferenceCounted = AReferenceCounted;
//# sourceMappingURL=a-reference-counted.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/i-on-destroy.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/i-on-destroy.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AOnDestroy = void 0;
const temporary_listener_1 = __webpack_require__(/*! ./temporary-listener */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/temporary-listener.js");
/**
 * @public
 * {@inheritDoc ITemporaryListener}
 */
class AOnDestroy {
    constructor() {
        this.onDestroyListener = new temporary_listener_1.TemporaryListener();
    }
    onDestroy() {
        this.onDestroyListener.clearingEmit();
    }
}
exports.AOnDestroy = AOnDestroy;
//# sourceMappingURL=i-on-destroy.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/reference-counted-ptr.js":
/*!********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/reference-counted-ptr.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReferenceCountedPtr = void 0;
const a_reference_counted_1 = __webpack_require__(/*! ./a-reference-counted */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/a-reference-counted.js");
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const null_pointer_1 = __webpack_require__(/*! ../web-assembly/emscripten/null-pointer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/null-pointer.js");
const _array_1 = __webpack_require__(/*! ../array/_array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/_array.js");
const temporary_listener_1 = __webpack_require__(/*! ./temporary-listener */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/temporary-listener.js");
const debug_namepace_1 = __webpack_require__(/*! ../debug/debug-namepace */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-namepace.js");
/**
 * @public
 * Wrapper of wasm object.
 */
class ReferenceCountedPtr extends a_reference_counted_1.AReferenceCounted {
    constructor(isStatic, wasmPtr, listenerObj) {
        super();
        this.isStatic = isStatic;
        this.wasmPtr = wasmPtr;
        this.listenerObj = listenerObj;
        this.wrappedReferences = null;
        this.onFreeListener = null;
        DEBUG_MODE && _debug_1._Debug.runBlock(() => {
            _debug_1._Debug.assert(this.wasmPtr !== null_pointer_1.nullPointer && this.wasmPtr != null, "expected pointer to object but got null pointer");
            if (!this.isStatic) {
                _debug_1._Debug.assert(!debug_namepace_1.RcJsUtilDebugImpl.uniquePointers.has(this.wasmPtr), "expected pointer to be unique");
                debug_namepace_1.RcJsUtilDebugImpl.uniquePointers.add(this.wasmPtr);
            }
        });
    }
    getPtr() {
        return this.wasmPtr;
    }
    onFree() {
        DEBUG_MODE && _debug_1._Debug.runBlock(() => {
            debug_namepace_1.RcJsUtilDebugImpl.uniquePointers.delete(this.wasmPtr);
        });
        if (this.onFreeListener != null) {
            this.onFreeListener.clearingEmit();
        }
        if (this.listenerObj != null) {
            this.listenerObj.onFree();
        }
        const wrappedReferences = this.wrappedReferences;
        if (wrappedReferences != null) {
            for (let i = 0, iEnd = wrappedReferences.length; i < iEnd; ++i) {
                wrappedReferences[i].release();
            }
            this.wrappedReferences = null;
        }
        this.wasmPtr = ReferenceCountedPtr.nullPtr;
    }
    bindLifecycle(referenceCountedObject) {
        this.takeOwnership(referenceCountedObject);
        referenceCountedObject.claim();
    }
    takeOwnership(referenceCountedObject) {
        var _a;
        const wrappedReferences = this.wrappedReferences = (_a = this.wrappedReferences) !== null && _a !== void 0 ? _a : [];
        DEBUG_MODE && _debug_1._Debug.runBlock(() => {
            _debug_1._Debug.assert(!this.getIsDestroyed(), "attempted linkage to dead pointer");
            _debug_1._Debug.assert(!getHasCycle(this, referenceCountedObject), "detected cycle between pointers");
            _debug_1._Debug.assert(wrappedReferences.indexOf(referenceCountedObject) === -1, "attempted to add reference twice");
        });
        wrappedReferences.push(referenceCountedObject);
    }
    unbindLifecycle(referenceCountedObject) {
        if (this.wrappedReferences != null) {
            const wasPresent = _array_1._Array.removeOne(this.wrappedReferences, referenceCountedObject);
            if (wasPresent) {
                referenceCountedObject.release();
            }
        }
    }
    unbindLifecycles(referenceCountedObjects) {
        if (this.wrappedReferences != null) {
            const setOfItemsToRemove = new Set(referenceCountedObjects);
            let index = referenceCountedObjects.length;
            while (index-- > 0) {
                const referenceCountedObject = referenceCountedObjects[index];
                if (setOfItemsToRemove.has(referenceCountedObject)) {
                    referenceCountedObjects.splice(index, 1);
                    referenceCountedObject.release();
                }
            }
        }
    }
    registerOnFreeListener(callback) {
        var _a;
        this.onFreeListener = (_a = this.onFreeListener) !== null && _a !== void 0 ? _a : new temporary_listener_1.TemporaryListener();
        this.onFreeListener.addListener(callback);
    }
    static getWrappedReferences(ptr) {
        return ptr.wrappedReferences;
    }
}
exports.ReferenceCountedPtr = ReferenceCountedPtr;
ReferenceCountedPtr.nullPtr = null_pointer_1.nullPointer;
function getHasCycle(referencingTo, referencingFrom) {
    if (referencingTo.getPtr() === referencingFrom.getPtr()) {
        return true;
    }
    const refs = ReferenceCountedPtr.getWrappedReferences(referencingFrom);
    if (refs == null) {
        return false;
    }
    for (let i = 0, iEnd = refs.length; i < iEnd; ++i) {
        if (getHasCycle(referencingTo, refs[i])) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=reference-counted-ptr.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/temporary-listener.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/temporary-listener.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TemporaryListener = void 0;
/**
 * @public
 * {@inheritDoc ITemporaryListener}
 */
class TemporaryListener {
    constructor() {
        this.listeners = [];
    }
    clearingEmit(...args) {
        this.emit(...args);
        this.clearListeners();
    }
    emit(...args) {
        const listenerCallback = this.listeners;
        for (let i = 0, iEnd = listenerCallback.length; i < iEnd; ++i) {
            listenerCallback[i](...args);
        }
    }
    clearListeners() {
        this.listeners.length = 0;
    }
    initializeListener(callback) {
        this.listeners.push(callback());
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    getTargets() {
        return this.listeners;
    }
}
exports.TemporaryListener = TemporaryListener;
//# sourceMappingURL=temporary-listener.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/_map.js":
/*!*********************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/_map.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Map = void 0;
const map_array_map_1 = __webpack_require__(/*! ./impl/map-array-map */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-array-map.js");
const map_first_key_1 = __webpack_require__(/*! ./impl/map-first-key */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-key.js");
const map_first_value_1 = __webpack_require__(/*! ./impl/map-first-value */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-value.js");
const map_intialize_get_1 = __webpack_require__(/*! ./impl/map-intialize-get */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intialize-get.js");
const map_keys_to_array_1 = __webpack_require__(/*! ./impl/map-keys-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-keys-to-array.js");
const map_push_1 = __webpack_require__(/*! ./impl/map-push */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-push.js");
const map_values_to_array_1 = __webpack_require__(/*! ./impl/map-values-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-values-to-array.js");
const map_entries_to_array_1 = __webpack_require__(/*! ./impl/map-entries-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-entries-to-array.js");
const map_delete_get_1 = __webpack_require__(/*! ./impl/map-delete-get */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-get.js");
const map_add_to_set_1 = __webpack_require__(/*! ./impl/map-add-to-set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-add-to-set.js");
const map_delete_from_set_1 = __webpack_require__(/*! ./impl/map-delete-from-set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-from-set.js");
const map_reporting_add_to_set_1 = __webpack_require__(/*! ./impl/map-reporting-add-to-set */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-reporting-add-to-set.js");
const map_remove_many_from_array_1 = __webpack_require__(/*! ./impl/map-remove-many-from-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-many-from-array.js");
const map_remove_one_from_array_1 = __webpack_require__(/*! ./impl/map-remove-one-from-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-one-from-array.js");
const map_set_difference_1 = __webpack_require__(/*! ./impl/map-set-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-set-difference.js");
const map_symmetric_difference_1 = __webpack_require__(/*! ./impl/map-symmetric-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-symmetric-difference.js");
const map_union_1 = __webpack_require__(/*! ./impl/map-union */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-union.js");
const map_intersect_1 = __webpack_require__(/*! ./impl/map-intersect */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intersect.js");
const map_concat_1 = __webpack_require__(/*! ./impl/map-concat */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-concat.js");
/**
 * @public
 * Utilities that apply to `Map`.
 */
class _Map {
    constructor() {
    }
}
exports._Map = _Map;
/** {@inheritDoc (mapAddToSet: 1)} */
_Map.addToSet = map_add_to_set_1.mapAddToSet;
/** {@inheritDoc mapArrayMap} */
_Map.arrayMap = map_array_map_1.mapArrayMap;
/** {@inheritDoc (mapConcat: 1)} */
_Map.concat = map_concat_1.mapConcat;
/** {@inheritDoc (mapDeleteFromSet: 1)} */
_Map.deleteFromSet = map_delete_from_set_1.mapDeleteFromSet;
/** {@inheritDoc (mapDeleteGet: 1)} */
_Map.deleteGet = map_delete_get_1.mapDeleteGet;
/** {@inheritDoc mapEntriesToArray} */
_Map.entriesToArray = map_entries_to_array_1.mapEntriesToArray;
/** {@inheritDoc mapFirstKey} */
_Map.firstKey = map_first_key_1.mapFirstKey;
/** {@inheritDoc mapFirstValue} */
_Map.firstValue = map_first_value_1.mapFirstValue;
/** {@inheritDoc mapIntersect} */
_Map.intersect = map_intersect_1.mapIntersect;
/** {@inheritDoc (mapInitializeGet:1)} */
_Map.initializeGet = map_intialize_get_1.mapInitializeGet;
/** {@inheritDoc mapKeysToArray} */
_Map.keysToArray = map_keys_to_array_1.mapKeysToArray;
/** {@inheritDoc (mapPush: 1)} */
_Map.push = map_push_1.mapPush;
/** {@inheritDoc (mapReportingAddToSet: 1)} */
_Map.removeManyFromArray = map_remove_many_from_array_1.mapRemoveManyFromArray;
/** {@inheritDoc (mapRemoveOneFromArray: 1)} */
_Map.removeOneFromArray = map_remove_one_from_array_1.mapRemoveOneFromArray;
/** {@inheritDoc (mapReportingAddToSet: 1)} */
_Map.reportingAddToSet = map_reporting_add_to_set_1.mapReportingAddToSet;
/** {@inheritDoc mapSetDifference} */
_Map.setDifference = map_set_difference_1.mapSetDifference;
/** {@inheritDoc mapSymmetricDifference} */
_Map.symmetricDifference = map_symmetric_difference_1.mapSymmetricDifference;
/** {@inheritDoc mapUnion} */
_Map.union = map_union_1.mapUnion;
/** {@inheritDoc mapValuesToArray} */
_Map.valuesToArray = map_values_to_array_1.mapValuesToArray;
//# sourceMappingURL=_map.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-add-to-set.js":
/*!************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-add-to-set.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapAddToSet = void 0;
function mapAddToSet(map, key, value) {
    const values = map.get(key);
    if (values != null) {
        values.add(value);
    }
    else {
        const set = new Set();
        set.add(value);
        map.set(key, set);
    }
}
exports.mapAddToSet = mapAddToSet;
//# sourceMappingURL=map-add-to-set.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-array-map.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-array-map.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapArrayMap = void 0;
/**
 * @public
 * Like `Array.map` but with a `Map` input. Outputs an `Array`.
 *
 * @returns An array of mapped values.
 *
 * @remarks
 * See {@link mapArrayMap}.
 */
function mapArrayMap(map, callback) {
    const mapped = new Array(map.size);
    let index = 0;
    map.forEach((v, k) => mapped[index++] = callback(v, k));
    return mapped;
}
exports.mapArrayMap = mapArrayMap;
//# sourceMappingURL=map-array-map.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-concat.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-concat.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapConcat = void 0;
function mapConcat(map, key, valuesToConcat) {
    const values = map.get(key);
    if (values != null) {
        map.set(key, values.concat(valuesToConcat));
    }
    else {
        map.set(key, valuesToConcat.slice());
    }
}
exports.mapConcat = mapConcat;
//# sourceMappingURL=map-concat.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-from-set.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-from-set.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapDeleteFromSet = void 0;
function mapDeleteFromSet(map, key, value) {
    const values = map.get(key);
    if (values == null) {
        return false;
    }
    else {
        return values.delete(value);
    }
}
exports.mapDeleteFromSet = mapDeleteFromSet;
//# sourceMappingURL=map-delete-from-set.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-get.js":
/*!************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-delete-get.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapDeleteGet = void 0;
function mapDeleteGet(map, key) {
    const value = map.get(key);
    map.delete(key);
    return value;
}
exports.mapDeleteGet = mapDeleteGet;
//# sourceMappingURL=map-delete-get.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-entries-to-array.js":
/*!******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-entries-to-array.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapEntriesToArray = void 0;
/**
 * @public
 * Converts a `Map` into an `Array` of its key value pairs.
 *
 * @returns An array of tuples, the first value corresponding to the key and the second to the value.
 *
 * @remarks
 * See {@link mapEntriesToArray}.
 */
function mapEntriesToArray(map) {
    return Array.from(map.entries());
}
exports.mapEntriesToArray = mapEntriesToArray;
//# sourceMappingURL=map-entries-to-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-key.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-key.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapFirstKey = void 0;
/**
 * @public
 * Gets the first inserted key in a `Map`.
 *
 * @returns The first key in `map`, otherwise `undefined` where size 0.
 *
 * @remarks
 * See {@link mapFirstKey}.
 */
function mapFirstKey(map) {
    return map
        .keys()
        .next()
        .value;
}
exports.mapFirstKey = mapFirstKey;
//# sourceMappingURL=map-first-key.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-value.js":
/*!*************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-first-value.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapFirstValue = void 0;
/**
 * @public
 * Gets the first inserted value in a `Map`.
 *
 * @returns The first value in `map`, otherwise `undefined` where size 0.
 *
 * @remarks
 * See {@link mapFirstValue}.
 */
function mapFirstValue(map) {
    return map
        .values()
        .next()
        .value;
}
exports.mapFirstValue = mapFirstValue;
//# sourceMappingURL=map-first-value.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intersect.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intersect.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapIntersect = void 0;
/**
 * @public
 * Does not check value equality, only key. Takes items from A.
 *
 * See {@link mapIntersect}.
 */
function mapIntersect(a, b) {
    const result = new Map();
    a.forEach((item, key) => {
        if (b.has(key)) {
            result.set(key, item);
        }
    });
    return result;
}
exports.mapIntersect = mapIntersect;
//# sourceMappingURL=map-intersect.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intialize-get.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-intialize-get.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapInitializeGet = void 0;
function mapInitializeGet(map, key, getValue) {
    let value = map.get(key);
    if (value !== undefined) {
        return value;
    }
    value = getValue(key);
    map.set(key, value);
    return value;
}
exports.mapInitializeGet = mapInitializeGet;
//# sourceMappingURL=map-intialize-get.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-keys-to-array.js":
/*!***************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-keys-to-array.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapKeysToArray = void 0;
/**
 * @public
 * Converts a `Map` into an `Array` of its keys.
 *
 * @returns The keys of the map.
 *
 * @remarks
 * See {@link mapKeysToArray}.
 */
function mapKeysToArray(map) {
    return Array.from(map.keys());
}
exports.mapKeysToArray = mapKeysToArray;
//# sourceMappingURL=map-keys-to-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-push.js":
/*!******************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-push.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapPush = void 0;
function mapPush(map, key, value) {
    const values = map.get(key);
    if (values != null) {
        values.push(value);
    }
    else {
        map.set(key, [value]);
    }
}
exports.mapPush = mapPush;
//# sourceMappingURL=map-push.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-many-from-array.js":
/*!************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-many-from-array.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapRemoveManyFromArray = void 0;
const array_remove_many_1 = __webpack_require__(/*! ../../array/impl/array-remove-many */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-many.js");
function mapRemoveManyFromArray(map, key, itemsToRemove) {
    const values = map.get(key);
    if (values == null) {
        return 0;
    }
    else {
        return (0, array_remove_many_1.arrayRemoveMany)(values, itemsToRemove);
    }
}
exports.mapRemoveManyFromArray = mapRemoveManyFromArray;
//# sourceMappingURL=map-remove-many-from-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-one-from-array.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-remove-one-from-array.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapRemoveOneFromArray = void 0;
const array_remove_one_1 = __webpack_require__(/*! ../../array/impl/array-remove-one */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/impl/array-remove-one.js");
function mapRemoveOneFromArray(map, key, value) {
    const values = map.get(key);
    if (values == null) {
        return false;
    }
    else {
        return (0, array_remove_one_1.arrayRemoveOne)(values, value);
    }
}
exports.mapRemoveOneFromArray = mapRemoveOneFromArray;
//# sourceMappingURL=map-remove-one-from-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-reporting-add-to-set.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-reporting-add-to-set.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapReportingAddToSet = void 0;
function mapReportingAddToSet(map, key, value) {
    const values = map.get(key);
    if (values != null) {
        if (values.has(value)) {
            return false;
        }
        else {
            values.add(value);
            return true;
        }
    }
    else {
        const set = new Set();
        set.add(value);
        map.set(key, set);
        return true;
    }
}
exports.mapReportingAddToSet = mapReportingAddToSet;
//# sourceMappingURL=map-reporting-add-to-set.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-set-difference.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-set-difference.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapSetDifference = void 0;
/**
 * @public
 *
 * @returns items in A not in B.
 *
 * @remarks
 * See {@link mapSetDifference}.
 */
function mapSetDifference(a, b) {
    const result = new Map();
    a.forEach((item, key) => {
        if (!b.has(key)) {
            result.set(key, item);
        }
    });
    return result;
}
exports.mapSetDifference = mapSetDifference;
//# sourceMappingURL=map-set-difference.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-symmetric-difference.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-symmetric-difference.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapSymmetricDifference = void 0;
/**
 * @public
 *
 * @remarks
 * See {@link mapSymmetricDifference}.
 */
function mapSymmetricDifference(a, b) {
    const result = new Map();
    a.forEach((item, key) => {
        if (!b.has(key)) {
            result.set(key, item);
        }
    });
    b.forEach((item, key) => {
        if (!a.has(key)) {
            result.set(key, item);
        }
    });
    return result;
}
exports.mapSymmetricDifference = mapSymmetricDifference;
//# sourceMappingURL=map-symmetric-difference.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-union.js":
/*!*******************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-union.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapUnion = void 0;
/**
 * @public
 *
 * @remarks
 * See {@link mapUnion}.
 */
function mapUnion(a, b) {
    const result = new Map();
    a.forEach((item, key) => result.set(key, item));
    b.forEach((item, key) => result.set(key, item));
    return result;
}
exports.mapUnion = mapUnion;
//# sourceMappingURL=map-union.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-values-to-array.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/map/impl/map-values-to-array.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapValuesToArray = void 0;
/**
 * @public
 * Converts a `Map` into an `Array` of its values.
 *
 * @returns The values of `map`.
 *
 * @remarks
 * See {@link mapValuesToArray}.
 */
function mapValuesToArray(map) {
    return Array.from(map.values());
}
exports.mapValuesToArray = mapValuesToArray;
//# sourceMappingURL=map-values-to-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/_math.js":
/*!***********************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/_math.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Math = void 0;
const math_min_1 = __webpack_require__(/*! ./impl/math-min */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-min.js");
const math_max_1 = __webpack_require__(/*! ./impl/math-max */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-max.js");
const math_bound_1 = __webpack_require__(/*! ./impl/math-bound */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound.js");
const math_bound_random_1 = __webpack_require__(/*! ./impl/math-bound-random */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound-random.js");
const math_hypot_1 = __webpack_require__(/*! ./impl/math-hypot */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-hypot.js");
/**
 * @public
 * Utilities relating to math.
 */
class _Math {
    constructor() {
    }
}
exports._Math = _Math;
/** {@inheritDoc mathBound} */
_Math.bound = math_bound_1.mathBound;
/** {@inheritDoc mathBoundRandom} */
_Math.boundRandom = math_bound_random_1.mathBoundRandom;
/** {@inheritDoc mathHypot2} */
_Math.hypot2 = math_hypot_1.mathHypot2;
/** {@inheritDoc mathMin} */
_Math.min = math_min_1.mathMin;
/** {@inheritDoc mathMax} */
_Math.max = math_max_1.mathMax;
//# sourceMappingURL=_math.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound-random.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound-random.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mathBoundRandom = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Create a random value between min and max.
 *
 * @remarks
 * NaN input will cause a debug error. Max greater than min will cause a debug error.
 *
 * See {@link mathBoundRandom}.
 */
function mathBoundRandom(min, max) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(min < max, "min must be smaller than max");
        _debug_1._Debug.assert(!isNaN(min) && !isNaN(max), "nan input not supported");
    });
    return Math.random() * (max - min) + min;
}
exports.mathBoundRandom = mathBoundRandom;
//# sourceMappingURL=math-bound-random.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound.js":
/*!*********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-bound.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mathBound = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Bound a value in to a range.
 *
 * @returns The `value` if it lies between `min` and `max`, otherwise `min` if smaller and `max` if greater.
 *
 * @remarks
 * NaN input will cause a debug error.
 *
 * See {@link mathBound}.
 */
function mathBound(value, min, max) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(!isNaN(value), "expected value to be a number");
        _debug_1._Debug.assert(!isNaN(min), "expected min to be a number");
        _debug_1._Debug.assert(!isNaN(max), "expected max to be a number");
        _debug_1._Debug.assert(max >= min, "expected max to be greater than or equal to min");
    });
    if (value > max) {
        return max;
    }
    if (value < min) {
        return min;
    }
    return value;
}
exports.mathBound = mathBound;
//# sourceMappingURL=math-bound.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-hypot.js":
/*!*********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-hypot.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mathHypot2 = void 0;
/**
 * @public
 * As per Math.hypot, expect with 2 args.
 *
 * See {@link mathHypot2}.
 */
function mathHypot2(a, b) {
    return Math.sqrt(a * a + b * b);
}
exports.mathHypot2 = mathHypot2;
//# sourceMappingURL=math-hypot.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-max.js":
/*!*******************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-max.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mathMax = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Returns the larger of the two parameters `a` and `b`.
 *
 * @remarks
 * NaN input will cause a debug error.
 * Differs from Math.max by taking only 2 arguments, avoids overhead of handling variable number of arguments.
 *
 * See {@link mathMax}.
 */
function mathMax(a, b) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(!isNaN(a), "expected a to be a number");
        _debug_1._Debug.assert(!isNaN(b), "expected b to be a number");
    });
    if (a > b) {
        return a;
    }
    return b;
}
exports.mathMax = mathMax;
//# sourceMappingURL=math-max.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-min.js":
/*!*******************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/math/impl/math-min.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mathMin = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Returns the smaller of the two parameters `a` and `b`.
 *
 * @remarks
 * NaN comparison will cause a debug error.
 * Differs from Math.min by taking only 2 arguments, avoids overhead of handling variable number of arguments.
 *
 * See {@link mathMin}.
 */
function mathMin(a, b) {
    DEBUG_MODE && _debug_1._Debug.runBlock(() => {
        _debug_1._Debug.assert(!isNaN(a), "expected a to be a number");
        _debug_1._Debug.assert(!isNaN(b), "expected b to be a number");
    });
    if (a > b) {
        return b;
    }
    return a;
}
exports.mathMin = mathMin;
//# sourceMappingURL=math-min.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/_number.js":
/*!***************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/_number.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Number = void 0;
const number_get_hex_string_1 = __webpack_require__(/*! ./impl/number-get-hex-string */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/number-get-hex-string.js");
const _f32_1 = __webpack_require__(/*! ./impl/_f32 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f32.js");
const _f64_1 = __webpack_require__(/*! ./impl/_f64 */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f64.js");
/**
 * @public
 * Utilities that apply to numbers.
 */
class _Number {
    constructor() {
    }
}
exports._Number = _Number;
/** {@inheritDoc _F32} */
_Number.f32 = _f32_1._F32;
/** {@inheritDoc _F64} */
_Number.f64 = _f64_1._F64;
/** {@inheritDoc numberGetHexString} */
_Number.getHexString = number_get_hex_string_1.numberGetHexString;
//# sourceMappingURL=_number.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f32.js":
/*!*****************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f32.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._F32 = void 0;
const range2d_1 = __webpack_require__(/*! ../../array/typed-array/2d/range2d/range2d */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/range2d.js");
/**
 * @public
 * Utilities relating to single precision floats.
 */
class _F32 {
    static getPrecision(value) {
        return value * _F32.mantissaPrecision;
    }
    static isEqual(a, b, delta = _F32.mantissaPrecision) {
        return Math.abs(a - b) < delta;
    }
}
exports._F32 = _F32;
_F32.MAX_VALUE = (2 - Math.pow(2, -23)) * Math.pow(2, 127);
_F32.MIN_POSITIVE_VALUE = Math.pow(2, -126);
_F32.bounds = range2d_1.Range2d.f32.factory.createOne(-_F32.MAX_VALUE, _F32.MAX_VALUE, -_F32.MAX_VALUE, _F32.MAX_VALUE);
_F32.mantissaBits = 23;
_F32.mantissaPrecision = 1 / Math.pow(2, 23);
//# sourceMappingURL=_f32.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f64.js":
/*!*****************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/_f64.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._F64 = void 0;
const range2d_1 = __webpack_require__(/*! ../../array/typed-array/2d/range2d/range2d */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/array/typed-array/2d/range2d/range2d.js");
/**
 * @public
 * Utilities relating to double precision floats.
 */
class _F64 {
    static getPrecision(value) {
        return value * _F64.mantissaPrecision;
    }
    static isEqual(a, b, delta = _F64.mantissaPrecision) {
        return Math.abs(a - b) < delta;
    }
}
exports._F64 = _F64;
_F64.MAX_VALUE = Number.MAX_VALUE;
_F64.MIN_POSITIVE_VALUE = Number.MIN_VALUE;
_F64.bounds = range2d_1.Range2d.f64.factory.createOne(-Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE);
_F64.mantissaBits = 52;
_F64.mantissaPrecision = 1 / Math.pow(2, 52);
//# sourceMappingURL=_f64.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/number-get-hex-string.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/number-get-hex-string.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numberGetHexString = void 0;
const tmp = ["0x", 0];
/**
 * @public
 * Returns the hex representation of the number. If it's not a number it returns "NaN".
 */
function numberGetHexString(value) {
    if (value !== value) {
        return "NaN";
    }
    tmp[1] = value.toString(16).toUpperCase();
    return tmp.join("");
}
exports.numberGetHexString = numberGetHexString;
//# sourceMappingURL=number-get-hex-string.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/random-numbers/mulberry-32-generator.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/random-numbers/mulberry-32-generator.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mulberry32Generator = void 0;
/**
 * @public
 * Random number generator.
 */
class Mulberry32Generator {
    constructor(seed) {
        this.seed = seed;
    }
    getNext() {
        let value = this.seed += 0x6D2B79F5;
        value = Math.imul(value ^ value >>> 15, value | 1);
        value ^= value + Math.imul(value ^ value >>> 7, value | 61);
        return ((value ^ value >>> 14) >>> 0) * 2.3283064365386963e-10;
    }
}
exports.Mulberry32Generator = Mulberry32Generator;
//# sourceMappingURL=mulberry-32-generator.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/random-numbers/not-random-generator.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/random-numbers/not-random-generator.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotRandomGenerator = void 0;
/**
 * @public
 * Instead of returning a random number, return the constant instead.
 */
class NotRandomGenerator {
    constructor(value) {
        this.value = value;
    }
    getNext() {
        return this.value;
    }
}
exports.NotRandomGenerator = NotRandomGenerator;
//# sourceMappingURL=not-random-generator.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/_path.js":
/*!***********************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/_path.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Path = void 0;
const path_join_1 = __webpack_require__(/*! ./impl/path-join */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/impl/path-join.js");
/**
 * @public
 * File path manipulation utilities.
 */
class _Path {
    constructor() {
    }
}
exports._Path = _Path;
/** {@inheritDoc pathJoin} */
_Path.join = path_join_1.pathJoin;
//# sourceMappingURL=_path.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/impl/path-join.js":
/*!********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/path/impl/path-join.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pathJoin = void 0;
/**
 * @public
 * Joins two strings `start` and `end` with a `separator`.
 *
 * @returns The joined path.
 *
 * @remarks
 * See {@link pathJoin}.
 */
function pathJoin(start, end, separator = "/") {
    const startEndsWithSeparator = start[start.length - 1] === separator;
    const endStartsWithSeparator = end[0] === separator;
    if (startEndsWithSeparator) {
        if (endStartsWithSeparator) {
            return start.concat(end.substring(1));
        }
        else {
            return start.concat(end);
        }
    }
    else {
        if (endStartsWithSeparator) {
            return start.concat(end);
        }
        else {
            return `${start}${separator}${end}`;
        }
    }
}
exports.pathJoin = pathJoin;
//# sourceMappingURL=path-join.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js":
/*!***********************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Production = void 0;
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
/**
 * @public
 * Utilities for production builds.
 */
class _Production {
    /**
     * Throws an `Error` with the given message. If `DEBUG_MODE` is true and `DEBUG_DISABLE_BREAKPOINT_FLAG` is false or unset then a breakpoint will be hit first.
     * Should not be used for "expected" errors (bad input etc).
     */
    static error(message) {
        if (DEBUG_MODE) {
            if (!_debug_1._Debug.isFlagSet("DEBUG_DISABLE_BREAKPOINT")) {
                _debug_1._Debug.breakpoint();
            }
        }
        throw new Error(message);
    }
    /**
     * A function that will error if ever called. The parameter is asserted to be never, useful with switch statements, union types etc.
     *
     * @example
     * ```typescript
     * // adding extra values to the enum will cause a compiler error
     * enum ETest { Foo = 1 };
     * function test(value: ETest)
     * {
     *      switch (value) {
     *          case ETest.Foo: return "potato";
     *          default: return _Production.assertValueIsNever(value);
     *      }
     * }
     * ```
     */
    static assertValueIsNever(_value) {
        _Production.error("unexpected code path executed.");
    }
}
exports._Production = _Production;
//# sourceMappingURL=_production.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/promise/impl/promise-reject-falsey.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/promise/impl/promise-reject-falsey.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.promiseRejectFalsey = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
/**
 * @public
 * Returns a Promise of rejection with the supplied error if the `value` is falsy.
 *
 * @remarks
 * See {@link promiseRejectFalsey}.
 */
function promiseRejectFalsey(value, error) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const result = yield value;
        if (!result) {
            return Promise.reject(error);
        }
    });
}
exports.promiseRejectFalsey = promiseRejectFalsey;
//# sourceMappingURL=promise-reject-falsey.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/promise/impl/promise-reject-null.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/promise/impl/promise-reject-null.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.promiseRejectNull = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
/**
 * @public
 * Returns a Promise of rejection with the supplied error if the value is `null` or `undefined`.
 *
 * @remarks
 * See {@link promiseRejectNull}.
 */
function promiseRejectNull(value, error) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const result = yield value;
        if (result == null) {
            return Promise.reject(error);
        }
        return result;
    });
}
exports.promiseRejectNull = promiseRejectNull;
//# sourceMappingURL=promise-reject-null.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/_reg-exp.js":
/*!*****************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/_reg-exp.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._RegExp = void 0;
const regex_escape_regex_1 = __webpack_require__(/*! ./impl/regex-escape-regex */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/impl/regex-escape-regex.js");
/**
 * @public
 * Utilities that apply to `RegExp`.
 */
class _RegExp {
    constructor() {
    }
}
exports._RegExp = _RegExp;
/** {@inheritDoc regexEscapeRegex} */
_RegExp.escapeRegex = regex_escape_regex_1.regexEscapeRegex;
//# sourceMappingURL=_reg-exp.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/impl/regex-escape-regex.js":
/*!********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/reg-exp/impl/regex-escape-regex.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.regexEscapeRegex = void 0;
/**
 * @public
 * Escapes RegExp special characters in strings.
 *
 * @returns The escaped string.
 *
 * @remarks
 * See {@link regexEscapeRegex}.
 */
function regexEscapeRegex(value) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
    return value.replace(/[.*+\-?^${}()|[\]\\]/g, `\\$&`);
}
exports.regexEscapeRegex = regexEscapeRegex;
//# sourceMappingURL=regex-escape-regex.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/runtime/get-global.js":
/*!*******************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/runtime/get-global.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGlobal = void 0;
function getGlobal() {
    if (typeof __webpack_require__.g !== "undefined") {
        return __webpack_require__.g;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    throw new Error("unsupported environment");
}
exports.getGlobal = getGlobal;
//# sourceMappingURL=get-global.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/_set.js":
/*!*********************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/_set.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Set = void 0;
const set_values_to_array_1 = __webpack_require__(/*! ./impl/set-values-to-array */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-values-to-array.js");
const set_symmetric_difference_1 = __webpack_require__(/*! ./impl/set-symmetric-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-symmetric-difference.js");
const set_set_difference_1 = __webpack_require__(/*! ./impl/set-set-difference */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-set-difference.js");
const set_is_set_equal_1 = __webpack_require__(/*! ./impl/set-is-set-equal */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-is-set-equal.js");
/**
 * @public
 * Utilities that apply to `Set`.
 */
class _Set {
    constructor() {
    }
}
exports._Set = _Set;
/** {@inheritDoc setSetDifference} */
_Set.isSetEqual = set_is_set_equal_1.setIsSetEqual;
/** {@inheritDoc setSetDifference} */
_Set.setDifference = set_set_difference_1.setSetDifference;
/** {@inheritDoc setValuesToArray} */
_Set.valuesToArray = set_values_to_array_1.setValuesToArray;
/** {@inheritDoc setSymmetricDifference} */
_Set.symmetricDifference = set_symmetric_difference_1.setSymmetricDifference;
//# sourceMappingURL=_set.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-is-set-equal.js":
/*!**************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-is-set-equal.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setIsSetEqual = void 0;
/**
 * @public
 *
 * @remarks
 * See {@link setIsSetEqual}.
 */
function setIsSetEqual(a, b) {
    if (a.size !== b.size) {
        return false;
    }
    for (const item of a) {
        if (!b.has(item)) {
            return false;
        }
    }
    return true;
}
exports.setIsSetEqual = setIsSetEqual;
//# sourceMappingURL=set-is-set-equal.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-set-difference.js":
/*!****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-set-difference.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setSetDifference = void 0;
/**
 * @public
 *
 * @returns items in A not in B.
 *
 * @remarks
 * See {@link setSetDifference}.
 */
function setSetDifference(a, b) {
    const result = [];
    a.forEach((item) => {
        if (!b.has(item)) {
            result.push(item);
        }
    });
    return result;
}
exports.setSetDifference = setSetDifference;
//# sourceMappingURL=set-set-difference.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-symmetric-difference.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-symmetric-difference.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setSymmetricDifference = void 0;
/**
 * @public
 *
 * @remarks
 * See {@link setSymmetricDifference}.
 */
function setSymmetricDifference(a, b) {
    const result = [];
    a.forEach((item) => {
        if (!b.has(item)) {
            result.push(item);
        }
    });
    b.forEach((item) => {
        if (!a.has(item)) {
            result.push(item);
        }
    });
    return result;
}
exports.setSymmetricDifference = setSymmetricDifference;
//# sourceMappingURL=set-symmetric-difference.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-values-to-array.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/set/impl/set-values-to-array.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setValuesToArray = void 0;
/**
 * @public
 * Converts a set into an array of its values.
 *
 * @returns The values of the set.
 *
 * @remarks
 * See {@link setValuesToArray}.
 */
function setValuesToArray(set) {
    return Array.from(set.values());
}
exports.setValuesToArray = setValuesToArray;
//# sourceMappingURL=set-values-to-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/_string.js":
/*!***************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/_string.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._String = void 0;
const string_normalize_empty_to_undefined_1 = __webpack_require__(/*! ./impl/string-normalize-empty-to-undefined */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-empty-to-undefined.js");
const string_normalize_null_undefined_to_empty_1 = __webpack_require__(/*! ./impl/string-normalize-null-undefined-to-empty */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-null-undefined-to-empty.js");
/**
 * @public
 * Utilities that apply to `string`.
 */
class _String {
    constructor() {
    }
}
exports._String = _String;
/** {@inheritDoc stringNormalizeEmptyToUndefined} */
_String.normalizeEmptyToUndefined = string_normalize_empty_to_undefined_1.stringNormalizeEmptyToUndefined;
/** {@inheritDoc stringNormalizeNullUndefinedToEmpty} */
_String.normalizeNullUndefinedToEmpty = string_normalize_null_undefined_to_empty_1.stringNormalizeNullUndefinedToEmpty;
//# sourceMappingURL=_string.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-empty-to-undefined.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-empty-to-undefined.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringNormalizeEmptyToUndefined = void 0;
/**
 * @public
 * Replaces length 0 strings with `undefined`.
 * @returns `input` if it's a `string` of length greater than 0, otherwise `undefined`.
 *
 * @remarks
 * See {@link stringNormalizeEmptyToUndefined}.
 */
function stringNormalizeEmptyToUndefined(input) {
    if (input == null) {
        return undefined;
    }
    if (input.length === 0) {
        return undefined;
    }
    return input;
}
exports.stringNormalizeEmptyToUndefined = stringNormalizeEmptyToUndefined;
//# sourceMappingURL=string-normalize-empty-to-undefined.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-null-undefined-to-empty.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-null-undefined-to-empty.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringNormalizeNullUndefinedToEmpty = void 0;
/**
 * @public
 * Replaces `null` / `undefined` with an empty `string`.
 * @returns `input` if it's a `string` of length greater than 0, otherwise an empty `string`.
 *
 * @remarks
 * See {@link stringNormalizeNullUndefinedToEmpty}.
 */
function stringNormalizeNullUndefinedToEmpty(input) {
    if (input == null) {
        return "";
    }
    return input;
}
exports.stringNormalizeNullUndefinedToEmpty = stringNormalizeNullUndefinedToEmpty;
//# sourceMappingURL=string-normalize-null-undefined-to-empty.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/debug-shared-object-checks.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/debug-shared-object-checks.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DebugSharedObjectChecks = void 0;
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const number_get_hex_string_1 = __webpack_require__(/*! ../number/impl/number-get-hex-string */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/impl/number-get-hex-string.js");
const string_normalize_null_undefined_to_empty_1 = __webpack_require__(/*! ../string/impl/string-normalize-null-undefined-to-empty */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/string/impl/string-normalize-null-undefined-to-empty.js");
/**
 * @public
 * Provides life cycle and access checks for shared objects.
 *
 * @remarks
 * `ProtectedViews` will be invalidated any time a memory resize might occur with standard `DEBUG_MODE` set.
 *
 * On garbage collect of the javascript object, the associated WASM pointer is checked to see if it has been disposed of.
 */
class DebugSharedObjectChecks {
    /**
     * Calls register on the shared object but also registers the associated cleanup on release too.
     */
    static registerWithCleanup(instance, protectedView, nameOfInstance) {
        instance.sharedObject.registerOnFreeListener(() => DebugSharedObjectChecks.unregister(instance, nameOfInstance));
        return DebugSharedObjectChecks.register(instance, protectedView, nameOfInstance);
    }
    static register(instance, protectedView, nameOfInstance) {
        if (instance.debugOnAllocate == null) {
            instance.debugOnAllocate = () => protectedView.invalidate();
        }
        RcJsUtilDebug.protectedViews.setValue(instance, protectedView);
        RcJsUtilDebug.sharedObjectLifeCycleChecks.registerFinalizationCheck(instance.sharedObject);
        RcJsUtilDebug.onAllocate.addListener(instance);
        if (!instance.sharedObject.isStatic && _debug_1._Debug.isFlagSet("DEBUG_VERBOSE_MEMORY_MANAGEMENT")) {
            // stringifying the stack would be far too verbose, most debuggers allow expansion of objects...
            const allocationStack = { stack: _debug_1._Debug.getStackTrace() };
            const type = instance.sharedObject.isStatic ? "static" : "instance";
            const message = `claimed (${type}) ${nameOfInstance} ${(0, number_get_hex_string_1.numberGetHexString)(instance.sharedObject.getPtr())} - ${(0, string_normalize_null_undefined_to_empty_1.stringNormalizeNullUndefinedToEmpty)(_debug_1._Debug.label)}`;
            _debug_1._Debug.verboseLog(message, allocationStack);
        }
        return protectedView;
    }
    static unregister(instance, nameOfInstance) {
        RcJsUtilDebug.sharedObjectLifeCycleChecks.markReadyForFinalize(instance.sharedObject);
        RcJsUtilDebug.protectedViews
            .getValue(instance)
            .invalidate();
        RcJsUtilDebug.protectedViews.deleteValue(instance);
        instance.debugOnAllocate = () => undefined;
        RcJsUtilDebug.onAllocate.removeListener(instance);
        if (!instance.sharedObject.isStatic && _debug_1._Debug.isFlagSet("DEBUG_VERBOSE_MEMORY_MANAGEMENT")) {
            const type = instance.sharedObject.isStatic ? "static" : "instance";
            _debug_1._Debug.verboseLog(`released (${type}) ${nameOfInstance} ${(0, number_get_hex_string_1.numberGetHexString)(instance.sharedObject.getPtr())} - ${(0, string_normalize_null_undefined_to_empty_1.stringNormalizeNullUndefinedToEmpty)(_debug_1._Debug.label)}`);
        }
    }
}
exports.DebugSharedObjectChecks = DebugSharedObjectChecks;
//# sourceMappingURL=debug-shared-object-checks.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/get-emscripten-wrapper.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/get-emscripten-wrapper.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEmscriptenWrapper = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const shim_web_assembly_memory_1 = __webpack_require__(/*! ../shim-web-assembly-memory */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shim-web-assembly-memory.js");
const broadcast_event_1 = __webpack_require__(/*! ../../eventing/broadcast-event */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/eventing/broadcast-event.js");
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const debug_weak_broadcast_event_1 = __webpack_require__(/*! ../../debug/debug-weak-broadcast-event */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-weak-broadcast-event.js");
/**
 * @public
 * Factory for creating wrapped emscripten module.
 */
function getEmscriptenWrapper(memory, emscriptenModuleFactory, extension) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const memoryListener = DEBUG_MODE
            ? new debug_weak_broadcast_event_1.DebugWeakBroadcastEvent("onMemoryResize")
            : new broadcast_event_1.BroadcastEvent("onMemoryResize");
        const instance = yield emscriptenModuleFactory(Object.assign({ wasmMemory: memory }, extension));
        (0, shim_web_assembly_memory_1.shimWebAssemblyMemory)(memory, (buffer, previous, delta) => {
            DEBUG_MODE && _debug_1._Debug.verboseLog(`WebAssembly memory grew from ${previous} to ${previous + delta} pages.`);
            wrapper.dataView = new DataView(wrapper.memory.buffer);
            memoryListener.emit(buffer, previous, delta);
        });
        const wrapper = {
            memory: memory,
            memoryResize: memoryListener,
            instance: instance,
            dataView: new DataView(memory.buffer),
        };
        return wrapper;
    });
}
exports.getEmscriptenWrapper = getEmscriptenWrapper;
//# sourceMappingURL=get-emscripten-wrapper.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/null-pointer.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/null-pointer.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nullPointer = void 0;
exports.nullPointer = 0;
//# sourceMappingURL=null-pointer.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js":
/*!******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/is-little-endian.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isLittleEndian = void 0;
/**
 * @public
 */
exports.isLittleEndian = new DataView(new Float32Array([1]).buffer).getFloat32(0, true) === 1;
//# sourceMappingURL=is-little-endian.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/raw-void-pointer.js":
/*!******************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/raw-void-pointer.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RawVoidPointer = void 0;
const reference_counted_ptr_1 = __webpack_require__(/*! ../lifecycle/reference-counted-ptr */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/reference-counted-ptr.js");
const null_pointer_1 = __webpack_require__(/*! ./emscripten/null-pointer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/null-pointer.js");
const _production_1 = __webpack_require__(/*! ../production/_production */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js");
const debug_protected_view_1 = __webpack_require__(/*! ../debug/debug-protected-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-protected-view.js");
const _debug_1 = __webpack_require__(/*! ../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const debug_shared_object_checks_1 = __webpack_require__(/*! ./debug-shared-object-checks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/debug-shared-object-checks.js");
const _number_1 = __webpack_require__(/*! ../number/_number */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/number/_number.js");
/**
 * @public
 * {@inheritDoc IRawVoidPointer}
 */
class RawVoidPointer {
    constructor(wrapper, pointer, byteSize) {
        this.wrapper = wrapper;
        this.onMemoryResize = () => {
            if (this.wrapper == null) {
                DEBUG_MODE && _debug_1._Debug.error("object has been destroyed");
                return;
            }
            this.dataView = this.recreateDataView();
        };
        this.pointer = pointer;
        this.byteSize = byteSize;
        this.sharedObject = new reference_counted_ptr_1.ReferenceCountedPtr(false, pointer);
        this.sharedObject.registerOnFreeListener(this.wrapper.memoryResize.addTemporaryListener(this));
        this.sharedObject.registerOnFreeListener(() => this.wrapper.instance._jsUtilFree(this.pointer));
        DEBUG_MODE && _debug_1._Debug.runBlock(() => {
            const protectedView = new debug_protected_view_1.DebugProtectedView([], `RVP - memory resize danger: don't hold reference to the DataView ${_number_1._Number.getHexString(this.pointer)}`);
            debug_shared_object_checks_1.DebugSharedObjectChecks.registerWithCleanup(this, protectedView, "RVP");
        });
        this.dataView = this.recreateDataView();
    }
    static createOne(wrapper, byteSize, allocationFailThrows) {
        DEBUG_MODE && RcJsUtilDebug.onAllocate.emit();
        const pointer = wrapper.instance._jsUtilMalloc(byteSize);
        if (pointer == null_pointer_1.nullPointer) {
            if (allocationFailThrows !== null && allocationFailThrows !== void 0 ? allocationFailThrows : false) {
                _production_1._Production.error("Failed to allocate memory for raw pointer.");
            }
        }
        return new RawVoidPointer(wrapper, pointer, byteSize);
    }
    getDataView() {
        if (DEBUG_MODE) {
            return RcJsUtilDebug.protectedViews
                .getValue(this)
                .createProtectedView(this.dataView);
        }
        else {
            return this.dataView;
        }
    }
    recreateDataView() {
        return new DataView(this.wrapper.memory.buffer, this.pointer, this.byteSize);
    }
}
exports.RawVoidPointer = RawVoidPointer;
//# sourceMappingURL=raw-void-pointer.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shared-array/shared-array.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shared-array/shared-array.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedArray = void 0;
const reference_counted_ptr_1 = __webpack_require__(/*! ../../lifecycle/reference-counted-ptr */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/reference-counted-ptr.js");
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const debug_protected_view_1 = __webpack_require__(/*! ../../debug/debug-protected-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-protected-view.js");
const _production_1 = __webpack_require__(/*! ../../production/_production */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/production/_production.js");
const null_pointer_1 = __webpack_require__(/*! ../emscripten/null-pointer */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/emscripten/null-pointer.js");
const debug_shared_object_checks_1 = __webpack_require__(/*! ../debug-shared-object-checks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/debug-shared-object-checks.js");
/**
 * @public
 * Typed array shared between wasm and javascript.
 */
class SharedArray {
    constructor(cMethodPrefix, ctor, wrapper, length, pointer) {
        this.onMemoryResize = () => {
            this.instance = this.createLocalInstance();
        };
        this.sharedObject = new reference_counted_ptr_1.ReferenceCountedPtr(false, pointer);
        this.sharedObject.registerOnFreeListener(() => this.wrapper.instance[this.cDelete](this.sharedObject.getPtr()));
        this.sharedObject.registerOnFreeListener(wrapper.memoryResize.addTemporaryListener(this));
        this.length = length;
        this.ctor = ctor;
        this.cDelete = `_${cMethodPrefix}_delete`;
        this.cGetArrayAddress = `_${cMethodPrefix}_getArrayAddress`;
        this.wrapper = wrapper;
        this.elementByteSize = ctor.BYTES_PER_ELEMENT;
        DEBUG_MODE && _debug_1._Debug.runBlock(() => {
            const protectedView = debug_protected_view_1.DebugProtectedView.createTypedArrayView();
            debug_shared_object_checks_1.DebugSharedObjectChecks.registerWithCleanup(this, protectedView, "shared array");
        });
        this.instance = this.createLocalInstance();
    }
    static createOneF32(wrapper, length, clearMemory = false, allocationFailThrows = true) {
        return SharedArray.createOne("f32SharedArray", wrapper, Float32Array, length, clearMemory, allocationFailThrows);
    }
    static createOneF64(wrapper, length, clearMemory = false, allocationFailThrows = true) {
        return SharedArray.createOne("f64SharedArray", wrapper, Float64Array, length, clearMemory, allocationFailThrows);
    }
    static createOne(prefix, wrapper, ctor, length, clearMemory = false, allocationFailThrows = true) {
        const ptr = SharedArray.allocateMemory(prefix, wrapper, length, clearMemory, allocationFailThrows);
        if (ptr !== null_pointer_1.nullPointer) {
            return new SharedArray(prefix, ctor, wrapper, length, ptr);
        }
        return null;
    }
    static allocateMemory(cMethodPrefix, wrapper, length, clearMemory, allocationFailThrows) {
        const ptr = wrapper.instance[`_${cMethodPrefix}_createOne`](length, clearMemory);
        if (ptr === null_pointer_1.nullPointer && allocationFailThrows) {
            _production_1._Production.error("Failed to allocate memory for shared array.");
        }
        return ptr;
    }
    getInstance() {
        if (DEBUG_MODE) {
            _debug_1._Debug.assert(!this.sharedObject.getIsDestroyed(), "access violation - object has been destroyed");
            return RcJsUtilDebug.protectedViews
                .getValue(this)
                .createProtectedView(this.instance);
        }
        else {
            return this.instance;
        }
    }
    createLocalInstance() {
        const arrayPtr = this.wrapper.instance[this.cGetArrayAddress](this.sharedObject.getPtr());
        DEBUG_MODE && _debug_1._Debug.assert(arrayPtr !== null_pointer_1.nullPointer, "failed to get array address");
        return new this.ctor(this.wrapper.memory.buffer, arrayPtr, this.length);
    }
}
exports.SharedArray = SharedArray;
//# sourceMappingURL=shared-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shared-array/shared-static-array.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shared-array/shared-static-array.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedStaticArray = void 0;
const _debug_1 = __webpack_require__(/*! ../../debug/_debug */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/_debug.js");
const debug_protected_view_1 = __webpack_require__(/*! ../../debug/debug-protected-view */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/debug-protected-view.js");
const reference_counted_ptr_1 = __webpack_require__(/*! ../../lifecycle/reference-counted-ptr */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/lifecycle/reference-counted-ptr.js");
const debug_shared_object_checks_1 = __webpack_require__(/*! ../debug-shared-object-checks */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/debug-shared-object-checks.js");
/**
 * @public
 * Typed array representing static memory in wasm.
 */
class SharedStaticArray {
    constructor(ctor, wrapper, pointer, length) {
        this.onMemoryResize = () => {
            this.instance = this.createLocalInstance();
        };
        this.sharedObject = new reference_counted_ptr_1.ReferenceCountedPtr(true, pointer);
        this.length = length;
        this.ctor = ctor;
        this.wrapper = wrapper;
        this.elementByteSize = ctor.BYTES_PER_ELEMENT;
        DEBUG_MODE && _debug_1._Debug.runBlock(() => {
            debug_shared_object_checks_1.DebugSharedObjectChecks.registerWithCleanup(this, debug_protected_view_1.DebugProtectedView.createTypedArrayView(), "");
        });
        this.sharedObject.registerOnFreeListener(wrapper.memoryResize.addTemporaryListener(this));
        this.instance = this.createLocalInstance();
    }
    static createOneF32(wrapper, pointer, length) {
        return new SharedStaticArray(Float32Array, wrapper, pointer, length);
    }
    static createOneF64(wrapper, pointer, length) {
        return new SharedStaticArray(Float64Array, wrapper, pointer, length);
    }
    getInstance() {
        if (DEBUG_MODE) {
            _debug_1._Debug.assert(!this.sharedObject.getIsDestroyed(), "access violation - object has been destroyed");
            return RcJsUtilDebug.protectedViews
                .getValue(this)
                .createProtectedView(this.instance);
        }
        else {
            return this.instance;
        }
    }
    createLocalInstance() {
        return new this.ctor(this.wrapper.memory.buffer, this.sharedObject.getPtr(), this.length);
    }
}
exports.SharedStaticArray = SharedStaticArray;
//# sourceMappingURL=shared-static-array.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shim-web-assembly-memory.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/web-assembly/shim-web-assembly-memory.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shimWebAssemblyMemory = void 0;
function shimWebAssemblyMemory(memory, onGrowCallback) {
    const grow = memory.grow.bind(memory);
    memory.grow = (pagesToAdd) => {
        const previousPageCount = grow(pagesToAdd);
        onGrowCallback(memory.buffer, previousPageCount, pagesToAdd);
        return previousPageCount;
    };
}
exports.shimWebAssemblyMemory = shimWebAssemblyMemory;
//# sourceMappingURL=shim-web-assembly-memory.js.map

/***/ }),

/***/ "./src/core/chart-component.ts":
/*!*************************************!*\
  !*** ./src/core/chart-component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartComponent = void 0;
__webpack_require__(/*! ../globals */ "./src/globals.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const frame_provider_1 = __webpack_require__(/*! ./update/frame-provider */ "./src/core/update/frame-provider.ts");
const on_plot_attached_1 = __webpack_require__(/*! ./plot/events/on-plot-attached */ "./src/core/plot/events/on-plot-attached.ts");
const on_plot_detached_1 = __webpack_require__(/*! ./plot/events/on-plot-detached */ "./src/core/plot/events/on-plot-detached.ts");
const on_canvas_resized_1 = __webpack_require__(/*! ./eventing/events/on-canvas-resized */ "./src/core/eventing/events/on-canvas-resized.ts");
class ChartComponent extends rc_js_util_1.AOnDestroy {
    constructor(attachPoint, renderer, eventService, config, contextAdapter, frameProvider) {
        super();
        this.plotCollection = new rc_js_util_1.DirtyCheckedUniqueCollection();
        this.contextLost = false;
        this.contextAdapter = contextAdapter;
        this.renderer = renderer;
        this.eventService = eventService;
        this.updateOptions = config.updateOptions;
        this.attachPoint = attachPoint;
        this.changeIdFactory = config.changeIdFactory;
        this.contextAdapter.graphContextChangeHooks.registerCallbacks(() => {
            this.contextLost = true;
        }, () => {
            this.contextLost = false;
            this.renderer.entityRendererProvider.reinitializeRenderers(this.renderer.entityRendererFactory);
        });
        this.frameProvider = frameProvider !== null && frameProvider !== void 0 ? frameProvider : new frame_provider_1.FrameProvider((plot) => this.updateImmediate(plot), (plot) => this.updateInteractionHandlersIncremental(plot), config.changeDetectionConfig.interactionRollupTime);
    }
    cancelNextFrame() {
        this.frameProvider.cancelNextFrame();
    }
    updateOnNextFrame(plot) {
        if (plot != null && !this.updateOptions.updateAllPlotsOnDraw) {
            this.frameProvider.updateOnNextFrame(plot);
        }
        else {
            const plots = this.plotCollection.getArray();
            for (let i = 0, iEnd = plots.length; i < iEnd; ++i) {
                this.frameProvider.updateOnNextFrame(plots[i]);
            }
        }
    }
    updateImmediate(plot) {
        if (this.contextLost) {
            return;
        }
        if (this.updateOptions.updateDimsOnDraw) {
            this.resize();
        }
        const canvasDims = this.attachPoint.canvasDims;
        if (plot != null) {
            if (this.plotCollection.has(plot)) {
                this.draw(plot, canvasDims);
            }
        }
        else {
            const plots = this.plotCollection.getArray();
            for (let i = 0, iEnd = plots.length; i < iEnd; ++i) {
                const plot = plots[i];
                this.draw(plot, canvasDims);
            }
        }
    }
    draw(plot, canvasDims) {
        this.renderer.onBeforePlotDraw(plot, canvasDims);
        plot.updateStrategy.update(canvasDims, this.renderer);
        this.renderer.onAfterPlotDraw();
    }
    updateInteractionHandlers(plot) {
        rc_js_util_1._Iterator.consumeAll(this.updateInteractionHandlersIncremental(plot));
    }
    *updateInteractionHandlersIncremental(plot) {
        var _a, _b;
        const startTime = performance.now();
        const canvasDims = this.attachPoint.canvasDims;
        if (plot != null) {
            if (this.plotCollection.has(plot)) {
                const it = ChartComponent.updateInteractionHandler(plot, canvasDims, startTime);
                while (!((_a = it.next().done) !== null && _a !== void 0 ? _a : false)) {
                    yield;
                }
            }
        }
        else {
            const plots = this.plotCollection.getArray();
            for (let i = 0, iEnd = plots.length; i < iEnd; ++i) {
                const plot = plots[i];
                if (this.plotCollection.has(plot)) {
                    const it = ChartComponent.updateInteractionHandler(plot, canvasDims, startTime);
                    while (!((_b = it.next().done) !== null && _b !== void 0 ? _b : false)) {
                        yield;
                    }
                }
            }
        }
    }
    resize() {
        const previousDims = this.attachPoint.canvasDims;
        const canvasDims = this.attachPoint.resizeCanvas();
        if (previousDims == canvasDims) {
            // no resize actually happened, don't emit
            return canvasDims;
        }
        this.contextAdapter.onResize(canvasDims);
        on_canvas_resized_1.OnCanvasResized.emit(this.eventService, canvasDims);
        return canvasDims;
    }
    addPlot(plot) {
        if (this.plotCollection.has(plot)) {
            return plot;
        }
        this.plotCollection.add(plot);
        this.eventService
            .getCategory(on_canvas_resized_1.OnCanvasResized)
            .addListener(plot);
        on_plot_attached_1.OnPlotAttached.emit(plot, this);
        return plot;
    }
    removePlot(plot) {
        this.eventService
            .getCategory(on_canvas_resized_1.OnCanvasResized)
            .removeListener(plot);
        plot.clearInteractionHandler();
        this.plotCollection.remove(plot);
        on_plot_detached_1.OnPlotDetached.emit(plot, this);
    }
    static updateInteractionHandler(plot, canvasDims, startTime) {
        const interactionHandler = plot.getInteractionHandler();
        return interactionHandler == null
            ? rc_js_util_1._Iterator.emptyIterator
            : interactionHandler.update(canvasDims, startTime);
    }
}
exports.ChartComponent = ChartComponent;


/***/ }),

/***/ "./src/core/chart-config.ts":
/*!**********************************!*\
  !*** ./src/core/chart-config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartConfig = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class ChartConfig {
    constructor(interactionOptions = { disableLongPressContext: true, scrollZooms: true, disableAllInteraction: false }, updateOptions = { updateDimsOnDraw: true, updateAllPlotsOnDraw: false }, changeDetectionConfig = noChangeDetectionConfig, changeIdFactory = new rc_js_util_1.IncrementingIdentifierFactory()) {
        this.interactionOptions = interactionOptions;
        this.updateOptions = updateOptions;
        this.changeDetectionConfig = changeDetectionConfig;
        this.changeIdFactory = changeIdFactory;
    }
}
exports.ChartConfig = ChartConfig;
const noChangeDetectionConfig = {
    runOutsideOfChangeDetection: (cb) => cb(),
    runInsideOfChangeDetection: (cb) => cb(),
    interactionRollupTime: 500,
};


/***/ }),

/***/ "./src/core/components/composite-graphics-component.ts":
/*!*************************************************************!*\
  !*** ./src/core/components/composite-graphics-component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompositeGraphicsComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const graphics_sub_components_1 = __webpack_require__(/*! ../rendering/graphics-sub-components */ "./src/core/rendering/graphics-sub-components.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Provided as a means to compose graphics components; it does not infer / bestow any behaviors. Refer to update strategy
 * documentation for draw call behavior.
 *
 * @remarks
 * An instance with the appropriate types can be obtained from the renderer (on ChartComponent).
 */
class CompositeGraphicsComponent {
    constructor(specification, graphicsComp) {
        this.specification = specification;
        this.graphicsComps = [graphicsComp];
        this.subComponents = new graphics_sub_components_1.GraphicsSubComponents(this.graphicsComps);
    }
    static createOne(specification, graphicsComp) {
        return new CompositeGraphicsComponent(specification, graphicsComp);
    }
    addComponent(graphicsComp) {
        this.graphicsComps.push(graphicsComp);
        return this;
    }
    getCacheId() {
        return rc_js_util_1._Array.map(this.graphicsComps, comp => comp.getCacheId()).join("_");
    }
    initialize() {
        const comps = this.graphicsComps;
        const entityRenderers = this.subComponents.entityRenderers;
        for (let i = 0, iEnd = comps.length; i < iEnd; ++i) {
            comps[i].initialize(entityRenderers[i]);
        }
    }
    resetState() {
        // updates are handled by the update strategy
    }
    onBeforeUpdate() {
        // updates are handled by the update strategy
    }
    update() {
        // updates are handled by the update strategy
    }
}
(0, tslib_1.__decorate)([
    rc_js_util_1.Once
], CompositeGraphicsComponent.prototype, "getCacheId", null);
exports.CompositeGraphicsComponent = CompositeGraphicsComponent;


/***/ }),

/***/ "./src/core/entities/categories/category-store.ts":
/*!********************************************************!*\
  !*** ./src/core/entities/categories/category-store.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryStore = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class CategoryStore {
    constructor(categories = []) {
        this.categories = categories;
    }
    addCategory(category) {
        this.categories.push(category);
        return category;
    }
    toArray() {
        return this.categories;
    }
    removeCategory(category) {
        rc_js_util_1._Array.removeOne(this.categories, category);
    }
}
exports.CategoryStore = CategoryStore;


/***/ }),

/***/ "./src/core/entities/categories/entity-category.ts":
/*!*********************************************************!*\
  !*** ./src/core/entities/categories/entity-category.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityCategory = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const dummy_entity_renderer_1 = __webpack_require__(/*! ../../rendering/dummy-entity-renderer */ "./src/core/rendering/dummy-entity-renderer.ts");
class EntityCategory {
    constructor(plot, renderer, updateGroup, updateHooks) {
        this.plot = plot;
        this.renderer = renderer;
        this.updateGroup = updateGroup;
        this.entities = [];
        this.hooks = new WeakMap();
        this.updateHooks = updateHooks;
    }
    addEntity(entity, graphicsComponent, hooks) {
        const plot = this.plot;
        const equiv = this.renderer.graphicsComponents.get(graphicsComponent.getCacheId());
        graphicsComponent = equiv == null ? graphicsComponent : equiv;
        plot.addEntity(entity);
        plot.addToGroup(entity, this.updateGroup, { graphicsComponent: graphicsComponent });
        this.entities.push(entity);
        if (hooks != null) {
            hooks.onEntityAdded(entity);
        }
        if (equiv == null) {
            // first time we've seen this component
            initializeEntityRenderer(this.renderer, graphicsComponent);
        }
    }
    removeEntity(entity) {
        const removedOne = rc_js_util_1._Array.removeOne(this.entities, entity);
        if (!removedOne) {
            return;
        }
        const hooks = this.hooks.get(entity);
        if (hooks != null) {
            hooks.onEntityRemoved(entity);
        }
    }
    getEntities() {
        return this.entities;
    }
}
exports.EntityCategory = EntityCategory;
function initializeEntityRenderer(renderer, graphicsComponent) {
    if (graphicsComponent.subComponents != null) {
        const subComponents = graphicsComponent.subComponents.getSubComponents();
        const entityRenderers = rc_js_util_1._Array.map(subComponents, comp => {
            return initializeGraphicsComponent(renderer, comp);
        });
        graphicsComponent.subComponents.setEntityRenderers(entityRenderers);
        renderer.entityRendererProvider.initializeRenderer(graphicsComponent, () => new dummy_entity_renderer_1.DummyEntityRenderer(renderer.sharedState));
    }
    else {
        initializeGraphicsComponent(renderer, graphicsComponent);
    }
    renderer.graphicsComponents.set(graphicsComponent.getCacheId(), graphicsComponent);
}
function initializeGraphicsComponent(renderer, graphicsComponent) {
    const entityRenderer = renderer.entityRendererProvider.initializeRenderer(graphicsComponent, () => {
        return renderer.entityRendererFactory.createRenderer(graphicsComponent.specification);
    });
    entityRenderer.onBeforeInitialization();
    graphicsComponent.initialize(entityRenderer);
    entityRenderer.onAfterInitialization();
    return entityRenderer;
}


/***/ }),

/***/ "./src/core/entities/chart-data-entity.ts":
/*!************************************************!*\
  !*** ./src/core/entities/chart-data-entity.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartDataEntity = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class ChartDataEntity {
    constructor(data, graphicsSettings, changeIdFactory, beforeUpdate = rc_js_util_1._Fp.noOp) {
        this.data = data;
        this.graphicsSettings = graphicsSettings;
        this.changeIdFactory = changeIdFactory;
        this.beforeUpdate = beforeUpdate;
        this.groupMask = 0;
        this.hitTestId = -1;
        this.changeId = this.changeIdFactory.getNextId();
    }
    onBeforeUpdate(updateArg) {
        this.beforeUpdate(updateArg);
    }
    updateChangeId() {
        this.changeId = this.changeIdFactory.getNextId();
    }
}
exports.ChartDataEntity = ChartDataEntity;


/***/ }),

/***/ "./src/core/entities/entity-component-store.ts":
/*!*****************************************************!*\
  !*** ./src/core/entities/entity-component-store.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityComponentStore = void 0;
class EntityComponentStore {
    constructor() {
        this.components = new WeakMap();
    }
    getComponent(entity) {
        return this.components.get(entity);
    }
    setComponent(entity, component) {
        this.components.set(entity, component);
    }
    deleteComponent(entity) {
        this.components.delete(entity);
    }
}
exports.EntityComponentStore = EntityComponentStore;


/***/ }),

/***/ "./src/core/entities/groups/a-entity-group.ts":
/*!****************************************************!*\
  !*** ./src/core/entities/groups/a-entity-group.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AEntityGroup = void 0;
class AEntityGroup {
    isEntityInGroup(entity) {
        return this.entitiesInGroup.has(entity);
    }
}
exports.AEntityGroup = AEntityGroup;


/***/ }),

/***/ "./src/core/entities/groups/hit-testable-group.ts":
/*!********************************************************!*\
  !*** ./src/core/entities/groups/hit-testable-group.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitTestableGroup = void 0;
const a_entity_group_1 = __webpack_require__(/*! ./a-entity-group */ "./src/core/entities/groups/a-entity-group.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class HitTestableGroup extends a_entity_group_1.AEntityGroup {
    constructor(argProvider, plot) {
        super();
        this.argProvider = argProvider;
        this.plot = plot;
        this.entitiesByHitTester = new Map();
        this.hitTestersByEntity = new WeakMap();
        this.referenceCounts = new WeakMap();
        this.isDirty = true;
        this.cache = [];
        this.entitiesInGroup = new Set();
    }
    getHitTester(entity) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(this.hitTestersByEntity.has(entity), "expected to find hit test component");
        return this.hitTestersByEntity.get(entity);
    }
    getEntitiesByHitTester() {
        if (this.isDirty) {
            this.isDirty = false;
            return this.cache = Array.from(this.entitiesByHitTester.entries());
        }
        else {
            return this.cache;
        }
    }
    refCountingAddEntity(entity, options) {
        var _a;
        // todo jack: unit test this
        const count = 1 + ((_a = this.referenceCounts.get(entity)) !== null && _a !== void 0 ? _a : 0);
        this.referenceCounts.set(entity, count);
        if (count > 1) {
            return;
        }
        this.plot.addToGroup(entity, this, options);
    }
    refCountingRemoveEntity(entity) {
        var _a;
        const count = (_a = this.referenceCounts.get(entity)) !== null && _a !== void 0 ? _a : 0;
        if (count === 0) {
            this.plot.removeFromGroup(entity, this);
            this.referenceCounts.delete(entity);
        }
        else {
            this.referenceCounts.set(entity, count - 1);
        }
    }
    onEntityAdded(entity, options) {
        rc_js_util_1._Map.push(this.entitiesByHitTester, options.hitTestComponent, entity);
        this.hitTestersByEntity.set(entity, options.hitTestComponent);
        this.entitiesInGroup.add(entity);
        this.isDirty = true;
    }
    onEntityRemoved(entity) {
        const hitTesters = this.hitTestersByEntity.get(entity);
        if (hitTesters != null) {
            this.hitTestersByEntity.delete(entity);
            rc_js_util_1._Map.removeOneFromArray(this.entitiesByHitTester, hitTesters, entity);
            this.entitiesInGroup.delete(entity);
            this.isDirty = true;
        }
    }
}
exports.HitTestableGroup = HitTestableGroup;


/***/ }),

/***/ "./src/core/entities/groups/interaction-group.ts":
/*!*******************************************************!*\
  !*** ./src/core/entities/groups/interaction-group.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionGroup = void 0;
const a_entity_group_1 = __webpack_require__(/*! ./a-entity-group */ "./src/core/entities/groups/a-entity-group.ts");
const entity_component_store_1 = __webpack_require__(/*! ../entity-component-store */ "./src/core/entities/entity-component-store.ts");
class InteractionGroup extends a_entity_group_1.AEntityGroup {
    constructor(groupMask, hitTestableGroup, plot) {
        super();
        this.plot = plot;
        this.entitiesInGroup = new Set();
        this.isHitTestableComponentStore = new entity_component_store_1.EntityComponentStore();
        this.groupMask = groupMask;
        this.hitTestableGroup = hitTestableGroup;
    }
    addEntityToGroup(entity, options) {
        if (this.plot.addToGroup(entity, this, options)) {
            this.hitTestableGroup.refCountingAddEntity(entity, options);
        }
    }
    onEntityAdded(entity, options) {
        this.isHitTestableComponentStore.setComponent(entity, options.hitAllowedComponent);
        entity.groupMask |= this.groupMask;
        this.entitiesInGroup.add(entity);
    }
    onEntityRemoved(entity) {
        // remove the mask without touching the others
        entity.groupMask &= ~this.groupMask;
        this.entitiesInGroup.delete(entity);
        this.hitTestableGroup.refCountingRemoveEntity(entity);
    }
}
exports.InteractionGroup = InteractionGroup;


/***/ }),

/***/ "./src/core/entities/traits/i-hoverable-trait.ts":
/*!*******************************************************!*\
  !*** ./src/core/entities/traits/i-hoverable-trait.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EHoverState = void 0;
var EHoverState;
(function (EHoverState) {
    EHoverState[EHoverState["Left"] = 1] = "Left";
    EHoverState[EHoverState["SegmentChange"] = 2] = "SegmentChange";
    EHoverState[EHoverState["Entered"] = 4] = "Entered";
})(EHoverState = exports.EHoverState || (exports.EHoverState = {}));


/***/ }),

/***/ "./src/core/errors/developer-error-localization.ts":
/*!*********************************************************!*\
  !*** ./src/core/errors/developer-error-localization.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.developerErrorLocalization = void 0;
exports.developerErrorLocalization = {
    getTx: (message) => message,
    glCompileError: "Failed to compile program, errors / warnings follow:",
};


/***/ }),

/***/ "./src/core/errors/gl-compile-error.ts":
/*!*********************************************!*\
  !*** ./src/core/errors/gl-compile-error.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlCompileError = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class GlCompileError extends rc_js_util_1.NestableError {
}
exports.GlCompileError = GlCompileError;


/***/ }),

/***/ "./src/core/eventing/chart-event-service.ts":
/*!**************************************************!*\
  !*** ./src/core/eventing/chart-event-service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventService = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class EventService {
    constructor() {
        this.categories = new WeakMap();
    }
    getCategory(category) {
        let broadcastEvent = this.categories.get(category);
        if (broadcastEvent == null) {
            broadcastEvent = new rc_js_util_1.BroadcastEvent(category.callbackKey);
            this.categories.set(category, broadcastEvent);
        }
        return broadcastEvent;
    }
}
exports.EventService = EventService;


/***/ }),

/***/ "./src/core/eventing/events/on-canvas-mouse-event.ts":
/*!***********************************************************!*\
  !*** ./src/core/eventing/events/on-canvas-mouse-event.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnCanvasMouseEvent = void 0;
class OnCanvasMouseEvent {
    constructor(onMouseEvent) {
        this.onMouseEvent = onMouseEvent;
    }
    static registerListener(eventService, onEvent) {
        return eventService
            .getCategory(OnCanvasMouseEvent)
            .addTemporaryListener(new OnCanvasMouseEvent(onEvent));
    }
    static emit(eventService, eventType, $event) {
        const listeners = eventService
            .getCategory(OnCanvasMouseEvent)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onMouseEvent(eventType, $event);
        }
    }
}
exports.OnCanvasMouseEvent = OnCanvasMouseEvent;
OnCanvasMouseEvent.callbackKey = "onMouseEvent";


/***/ }),

/***/ "./src/core/eventing/events/on-canvas-pointer-event.ts":
/*!*************************************************************!*\
  !*** ./src/core/eventing/events/on-canvas-pointer-event.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnCanvasPointerEvent = void 0;
class OnCanvasPointerEvent {
    constructor(onPointerEvent) {
        this.onPointerEvent = onPointerEvent;
    }
    static registerListener(eventService, onEvent) {
        return eventService
            .getCategory(OnCanvasPointerEvent)
            .addTemporaryListener(new OnCanvasPointerEvent(onEvent));
    }
    static emit(eventService, eventType, $event) {
        const listeners = eventService
            .getCategory(OnCanvasPointerEvent)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onPointerEvent(eventType, $event);
        }
    }
}
exports.OnCanvasPointerEvent = OnCanvasPointerEvent;
OnCanvasPointerEvent.callbackKey = "onPointerEvent";


/***/ }),

/***/ "./src/core/eventing/events/on-canvas-resized.ts":
/*!*******************************************************!*\
  !*** ./src/core/eventing/events/on-canvas-resized.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnCanvasResized = void 0;
class OnCanvasResized {
    constructor(onCanvasResized) {
        this.onCanvasResized = onCanvasResized;
    }
    static registerListener(eventService, onEvent) {
        return eventService
            .getCategory(OnCanvasResized)
            .addTemporaryListener(new OnCanvasResized(onEvent));
    }
    static emit(eventService, canvasDims) {
        const listeners = eventService
            .getCategory(OnCanvasResized)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onCanvasResized(canvasDims);
        }
    }
}
exports.OnCanvasResized = OnCanvasResized;
OnCanvasResized.callbackKey = "onCanvasResized";


/***/ }),

/***/ "./src/core/eventing/float-precision-range-bounder.ts":
/*!************************************************************!*\
  !*** ./src/core/eventing/float-precision-range-bounder.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FloatPrecisionRangeBounder = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class FloatPrecisionRangeBounder {
    constructor(numberUtil, rangeScaleFactor) {
        this.numberUtil = numberUtil;
        DEBUG_MODE && rc_js_util_1._Debug.assert(rangeScaleFactor <= 1, "the range is already a maximum");
        this.maxBounds = this.numberUtil.bounds.scaleRelativeTo(rangeScaleFactor, rc_js_util_1.Vec2.u8.factory.createOne(0, 0));
        this.maxZoom = Math.pow(2, this.numberUtil.mantissaBits);
    }
    boundRange(o_dataRange, pixelRange, maxBounds = this.maxBounds) {
        const xMinRange = this.numberUtil.getPrecision(o_dataRange.getXMaxAbs()) * pixelRange.getXRange();
        const yMinRange = this.numberUtil.getPrecision(o_dataRange.getYMaxAbs()) * pixelRange.getYRange();
        o_dataRange.ensureMinRange(xMinRange, yMinRange);
        o_dataRange.bound(maxBounds);
    }
}
exports.FloatPrecisionRangeBounder = FloatPrecisionRangeBounder;


/***/ }),

/***/ "./src/core/eventing/user-interaction/chart-interaction-providers.ts":
/*!***************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/chart-interaction-providers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartInteractionProviders = void 0;
const chart_state_factories_1 = __webpack_require__(/*! ./default-state-machine/chart-state-factories */ "./src/core/eventing/user-interaction/default-state-machine/chart-state-factories.ts");
class ChartInteractionProviders {
    constructor(callbacks, eventTargets, attachPoint) {
        this.callbacks = callbacks;
        this.eventTargets = eventTargets;
        this.attachPoint = attachPoint;
        this.stateFactories = new chart_state_factories_1.ChartStateFactories();
    }
}
exports.ChartInteractionProviders = ChartInteractionProviders;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-interaction-shared-state.ts":
/*!********************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-interaction-shared-state.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultInteractionSharedState = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const i_hoverable_trait_1 = __webpack_require__(/*! ../../entities/traits/i-hoverable-trait */ "./src/core/entities/traits/i-hoverable-trait.ts");
class DefaultInteractionSharedState {
    constructor(providers) {
        this.providers = providers;
        this.dragTargets = null;
        this.hoveredEntities = new Map();
    }
    clearAllHoveredEntities(chartEvent) {
        emitHoverLeftEvents(chartEvent, rc_js_util_1._Map.valuesToArray(this.hoveredEntities));
        this.hoveredEntities.clear();
    }
    onHover(chartEvent) {
        const hoverTargets = this.providers.eventTargets.hoverTargetProvider.hitTestPlot(chartEvent);
        const hoverTargetsByEntity = rc_js_util_1._Array.index(hoverTargets, target => target.entity);
        const newlyHoveredMap = rc_js_util_1._Map.setDifference(hoverTargetsByEntity, this.hoveredEntities);
        const noLongerHoveredMap = rc_js_util_1._Map.setDifference(this.hoveredEntities, hoverTargetsByEntity);
        const stillHovered = rc_js_util_1._Map.intersect(hoverTargetsByEntity, this.hoveredEntities);
        const newlyHovered = rc_js_util_1._Map.valuesToArray(newlyHoveredMap);
        const noLongerHovered = rc_js_util_1._Map.valuesToArray(noLongerHoveredMap);
        stillHovered.forEach((target, key) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const newTarget = this.hoveredEntities.get(key);
            if (rc_js_util_1._Set.isSetEqual(newTarget.segmentIds, target.segmentIds)) {
                stillHovered.delete(key);
            }
        });
        const stillHoveredArray = rc_js_util_1._Map.valuesToArray(stillHovered);
        emitHoverLeftEvents(chartEvent, noLongerHovered);
        emitHoverEnterEvents(chartEvent, newlyHovered);
        emitSegmentChangeEvents(chartEvent, stillHoveredArray);
        this.hoveredEntities = hoverTargetsByEntity;
        if (newlyHovered.length > 0 || stillHoveredArray.length > 0 || noLongerHovered.length > 0) {
            this.providers.callbacks.onHover(newlyHovered, stillHoveredArray, noLongerHovered, chartEvent);
        }
    }
    onClick(chartEvent) {
        const targets = this.providers.eventTargets.clickTargetProvider.hitTestPlot(chartEvent);
        emitClickEvents(targets, chartEvent);
        this.providers.callbacks.onClick(targets, chartEvent);
    }
    onDblClick(chartEvent) {
        const targets = this.providers.eventTargets.clickTargetProvider.hitTestPlot(chartEvent);
        emitDblClickEvents(targets, chartEvent);
        this.providers.callbacks.onDoubleClick(targets, chartEvent);
    }
}
exports.DefaultInteractionSharedState = DefaultInteractionSharedState;
function emitHoverLeftEvents(chartEvent, targets) {
    var _a, _b;
    for (let i = 0, iEnd = targets.length; i < iEnd; ++i) {
        const target = targets[i];
        (_b = (_a = target.entity).onHoverChange) === null || _b === void 0 ? void 0 : _b.call(_a, i_hoverable_trait_1.EHoverState.Left, target.segmentIds, chartEvent);
    }
}
function emitHoverEnterEvents(chartEvent, targets) {
    var _a, _b;
    for (let i = 0, iEnd = targets.length; i < iEnd; ++i) {
        const target = targets[i];
        (_b = (_a = target.entity).onHoverChange) === null || _b === void 0 ? void 0 : _b.call(_a, i_hoverable_trait_1.EHoverState.Entered, target.segmentIds, chartEvent);
    }
}
function emitSegmentChangeEvents(chartEvent, targets) {
    var _a, _b;
    for (let i = 0, iEnd = targets.length; i < iEnd; ++i) {
        const target = targets[i];
        (_b = (_a = target.entity).onHoverChange) === null || _b === void 0 ? void 0 : _b.call(_a, i_hoverable_trait_1.EHoverState.SegmentChange, target.segmentIds, chartEvent);
    }
}
function emitClickEvents(targets, chartEvent) {
    var _a, _b;
    for (let i = 0, iEnd = targets.length; i < iEnd; ++i) {
        const target = targets[i];
        (_b = (_a = target.entity).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, chartEvent, target.segmentIds);
    }
}
function emitDblClickEvents(targets, chartEvent) {
    var _a, _b;
    for (let i = 0, iEnd = targets.length; i < iEnd; ++i) {
        const target = targets[i];
        (_b = (_a = target.entity).onDblClick) === null || _b === void 0 ? void 0 : _b.call(_a, chartEvent, target.segmentIds);
    }
}


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/chart-state-factories.ts":
/*!*******************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/chart-state-factories.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartStateFactories = void 0;
const dragging_state_1 = __webpack_require__(/*! ./dragging-state */ "./src/core/eventing/user-interaction/default-state-machine/dragging-state.ts");
const idle_state_1 = __webpack_require__(/*! ./idle-state */ "./src/core/eventing/user-interaction/default-state-machine/idle-state.ts");
const indeterminate_state_1 = __webpack_require__(/*! ./indeterminate-state */ "./src/core/eventing/user-interaction/default-state-machine/indeterminate-state.ts");
const panning_state_1 = __webpack_require__(/*! ./panning-state */ "./src/core/eventing/user-interaction/default-state-machine/panning-state.ts");
const pinch_zooming_state_1 = __webpack_require__(/*! ./pinch-zooming-state */ "./src/core/eventing/user-interaction/default-state-machine/pinch-zooming-state.ts");
class ChartStateFactories {
    getDraggingState(startEvent, options, providers, sharedState) {
        return new dragging_state_1.DraggingState(startEvent.clone(), options, providers, sharedState);
    }
    getIdleState(lastClick, options, providers, sharedState) {
        return new idle_state_1.IdleState(lastClick, options, providers, sharedState);
    }
    getIndeterminateState(downEvent, options, providers, sharedState, lastClick) {
        return new indeterminate_state_1.IndeterminateState(downEvent.clone(), options, providers, sharedState, lastClick);
    }
    getPanningState(startEvent, options, providers, sharedState) {
        return new panning_state_1.PanningState(startEvent.clone(), options, providers, sharedState);
    }
    getPinchZoomingState(firstDownFingerEvent, secondDownFingerEvent, options, providers, sharedState) {
        return new pinch_zooming_state_1.PinchZoomingState(firstDownFingerEvent.clone(), secondDownFingerEvent.clone(), options, providers, sharedState);
    }
}
exports.ChartStateFactories = ChartStateFactories;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/dragging-state.ts":
/*!************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/dragging-state.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DraggingState = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_pointer_event_type_1 = __webpack_require__(/*! ../internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
class DraggingState {
    constructor(startEvent, options, providers, sharedState) {
        this.startEvent = startEvent;
        this.options = options;
        this.providers = providers;
        this.sharedState = sharedState;
        // the starting event is one that needs to be handled straight away
        this.handlePointerEvent(e_pointer_event_type_1.EPointerEventType.Move, this.startEvent);
    }
    handleMouseEvent() {
        return null;
    }
    handlePointerEvent(eventType, chartEvent) {
        switch (eventType) {
            case e_pointer_event_type_1.EPointerEventType.Out:
            case e_pointer_event_type_1.EPointerEventType.Up:
                if (this.startEvent.$event.pointerId === chartEvent.$event.pointerId) {
                    this.providers.callbacks.onDragEnd(chartEvent);
                    return this.providers.stateFactories.getIdleState(null, this.options, this.providers, this.sharedState);
                }
                else {
                    return null;
                }
            case e_pointer_event_type_1.EPointerEventType.Down:
                {
                    return null;
                }
            case e_pointer_event_type_1.EPointerEventType.Move:
                {
                    if (this.startEvent.$event.pointerId === chartEvent.$event.pointerId) {
                        this.providers.callbacks.onDrag(chartEvent);
                    }
                    return null;
                }
        }
        return rc_js_util_1._Production.assertValueIsNever(eventType);
    }
}
exports.DraggingState = DraggingState;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/get-chart-initial-state.ts":
/*!*********************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/get-chart-initial-state.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getChartInitialState = void 0;
const idle_state_1 = __webpack_require__(/*! ./idle-state */ "./src/core/eventing/user-interaction/default-state-machine/idle-state.ts");
const default_interaction_shared_state_1 = __webpack_require__(/*! ../default-interaction-shared-state */ "./src/core/eventing/user-interaction/default-interaction-shared-state.ts");
function getChartInitialState(options, stateProviders) {
    return new idle_state_1.IdleState(null, options, stateProviders, new default_interaction_shared_state_1.DefaultInteractionSharedState(stateProviders));
}
exports.getChartInitialState = getChartInitialState;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/idle-state.ts":
/*!********************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/idle-state.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdleState = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_pointer_event_type_1 = __webpack_require__(/*! ../internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
const e_mouse_event_type_1 = __webpack_require__(/*! ../internal-events/e-mouse-event-type */ "./src/core/eventing/user-interaction/internal-events/e-mouse-event-type.ts");
const e_pointer_event_button_1 = __webpack_require__(/*! ../internal-events/e-pointer-event-button */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-button.ts");
class IdleState {
    constructor(lastClick, options, providers, sharedState) {
        this.lastClick = lastClick;
        this.options = options;
        this.providers = providers;
        this.sharedState = sharedState;
        if (this.lastClick != null && this.options.doubleClickOptions != null) {
            setTimeout(() => this.lastClick = null, this.options.doubleClickOptions.timeout);
        }
    }
    handleMouseEvent(eventType, chartEvent) {
        switch (eventType) {
            case e_mouse_event_type_1.EMouseEventType.Wheel:
                {
                    this.providers.callbacks.onWheel(chartEvent, -chartEvent.$event.deltaY);
                    return null;
                }
        }
        return rc_js_util_1._Production.assertValueIsNever(eventType);
    }
    handlePointerEvent(eventType, chartEvent) {
        switch (eventType) {
            case e_pointer_event_type_1.EPointerEventType.Down:
                {
                    if (chartEvent.$event.button === e_pointer_event_button_1.EPointerEventButton.LeftMouse) {
                        const targets = this.providers.eventTargets.dragTargetProvider.hitTestPlot(chartEvent);
                        if (targets.length > 0) {
                            this.sharedState.dragTargets = this.providers.callbacks.onDragStart(targets, chartEvent)
                                ? targets.filter(target => { var _a, _b; return (_b = (_a = target.entity).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, chartEvent, target.segmentIds); })
                                : null;
                            if (this.sharedState.dragTargets != null) {
                                return this.providers.stateFactories.getDraggingState(chartEvent, this.options, this.providers, this.sharedState);
                            }
                        }
                        // fall through intentional
                        return this.providers.stateFactories.getIndeterminateState(chartEvent, this.options, this.providers, this.sharedState, this.lastClick);
                    }
                    else if (chartEvent.$event.button === e_pointer_event_button_1.EPointerEventButton.RightMouse) {
                        // right click, no need to go via indeterminate
                        this.sharedState.onClick(chartEvent);
                        return null;
                    }
                    else {
                        return null;
                    }
                }
            case e_pointer_event_type_1.EPointerEventType.Move:
                {
                    this.sharedState.onHover(chartEvent);
                    return null;
                }
            case e_pointer_event_type_1.EPointerEventType.Out:
            case e_pointer_event_type_1.EPointerEventType.Up:
                return null;
        }
        return rc_js_util_1._Production.assertValueIsNever(eventType);
    }
}
exports.IdleState = IdleState;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/indeterminate-state.ts":
/*!*****************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/indeterminate-state.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IndeterminateState = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_pointer_event_type_1 = __webpack_require__(/*! ../internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
const get_distance_between_pointer_events_1 = __webpack_require__(/*! ../util/get-distance-between-pointer-events */ "./src/core/eventing/user-interaction/util/get-distance-between-pointer-events.ts");
class IndeterminateState {
    constructor(downEvent, options, providers, sharedState, lastClick) {
        this.downEvent = downEvent;
        this.options = options;
        this.providers = providers;
        this.sharedState = sharedState;
        this.lastClick = lastClick;
    }
    handleMouseEvent() {
        return null;
    }
    handlePointerEvent(eventType, chartEvent) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            rc_js_util_1._Debug.assert(this.downEvent !== chartEvent, "event must be cloned");
        });
        switch (eventType) {
            case e_pointer_event_type_1.EPointerEventType.Down:
                {
                    if (chartEvent.$event.pointerId !== this.downEvent.$event.pointerId) {
                        this.sharedState.clearAllHoveredEntities(chartEvent);
                        return this.providers.stateFactories.getPinchZoomingState(this.downEvent, chartEvent, this.options, this.providers, this.sharedState);
                    }
                    else {
                        return null;
                    }
                }
            case e_pointer_event_type_1.EPointerEventType.Move:
                {
                    if (this.downEvent.$event.pointerId !== chartEvent.$event.pointerId) {
                        return null;
                    }
                    return this.providers.stateFactories.getPanningState(chartEvent, this.options, this.providers, this.sharedState);
                }
            case e_pointer_event_type_1.EPointerEventType.Out:
                {
                    return this.providers.stateFactories.getIdleState(null, this.options, this.providers, this.sharedState);
                }
            case e_pointer_event_type_1.EPointerEventType.Up:
                {
                    if (this.isDoubleClick(chartEvent.$event)) {
                        this.sharedState.onDblClick(chartEvent);
                        return this.providers.stateFactories.getIdleState(null, this.options, this.providers, this.sharedState);
                    }
                    else {
                        this.sharedState.onClick(chartEvent);
                        return this.providers.stateFactories.getIdleState({ chartEvent: chartEvent, timestamp: performance.now() }, this.options, this.providers, this.sharedState);
                    }
                }
        }
        return rc_js_util_1._Production.assertValueIsNever(eventType);
    }
    isDoubleClick(upEvent) {
        if (this.options.doubleClickOptions == null) {
            // the feature is not enabled
            return false;
        }
        if (this.lastClick == null || this.downEvent.$event.pointerId !== upEvent.pointerId) {
            // down event, up event and the previous up event are not the same pointer
            return false;
        }
        if (performance.now() > this.lastClick.timestamp + this.options.doubleClickOptions.timeout) {
            // too much time has passed
            return false;
        }
        // compare based on up events only, gives the user a chance to change their mind
        if ((0, get_distance_between_pointer_events_1.getDistanceBetweenPointerEvents)(this.lastClick.chartEvent.$event, upEvent) > this.options.doubleClickOptions.maxRadius) {
            // too far apart
            return false;
        }
        // there is a vague chance they meant to double tap
        return true;
    }
}
exports.IndeterminateState = IndeterminateState;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/panning-state.ts":
/*!***********************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/panning-state.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PanningState = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_pointer_event_type_1 = __webpack_require__(/*! ../internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
class PanningState {
    constructor(startEvent, options, providers, sharedState) {
        this.startEvent = startEvent;
        this.options = options;
        this.providers = providers;
        this.sharedState = sharedState;
        this.previousClientX = startEvent.$event.clientX;
        this.previousClientY = startEvent.$event.clientY;
        // the starting event is one that needs to be handled straight away
        this.handlePointerEvent(e_pointer_event_type_1.EPointerEventType.Move, this.startEvent);
    }
    handleMouseEvent() {
        return null;
    }
    handlePointerEvent(eventType, chartEvent) {
        switch (eventType) {
            case e_pointer_event_type_1.EPointerEventType.Out:
            case e_pointer_event_type_1.EPointerEventType.Up:
                {
                    if (this.startEvent.$event.pointerId !== chartEvent.$event.pointerId) {
                        return null;
                    }
                    return this.providers.stateFactories.getIdleState(null, this.options, this.providers, this.sharedState);
                }
            case e_pointer_event_type_1.EPointerEventType.Down:
                {
                    return rc_js_util_1._Fp.valueOrNull(chartEvent.$event.pointerId !== this.startEvent.$event.pointerId, this.providers.stateFactories.getPinchZoomingState(this.startEvent, chartEvent, this.options, this.providers, this.sharedState));
                }
            case e_pointer_event_type_1.EPointerEventType.Move:
                {
                    if (this.startEvent.$event.pointerId === chartEvent.$event.pointerId) {
                        const dx = chartEvent.$event.clientX - this.previousClientX;
                        const dy = chartEvent.$event.clientY - this.previousClientY;
                        const dims = this.providers.attachPoint.canvasDims;
                        // -y to normalize direction into clip space system
                        this.providers.callbacks.onPan(chartEvent, dx * dims.dpr, -dy * dims.dpr);
                        this.previousClientX = chartEvent.$event.clientX;
                        this.previousClientY = chartEvent.$event.clientY;
                    }
                    return null;
                }
        }
        return rc_js_util_1._Production.assertValueIsNever(eventType);
    }
}
exports.PanningState = PanningState;


/***/ }),

/***/ "./src/core/eventing/user-interaction/default-state-machine/pinch-zooming-state.ts":
/*!*****************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/default-state-machine/pinch-zooming-state.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PinchZoomingState = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_pointer_event_type_1 = __webpack_require__(/*! ../internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
const get_distance_between_pointer_events_1 = __webpack_require__(/*! ../util/get-distance-between-pointer-events */ "./src/core/eventing/user-interaction/util/get-distance-between-pointer-events.ts");
const get_center_between_pointer_events_1 = __webpack_require__(/*! ../util/get-center-between-pointer-events */ "./src/core/eventing/user-interaction/util/get-center-between-pointer-events.ts");
/**
 * Allows for panning as well as zooming.
 */
class PinchZoomingState {
    constructor(firstFingerDownEvent, secondFingerDownEvent, options, providers, sharedState) {
        this.firstFingerDownEvent = firstFingerDownEvent;
        this.secondFingerDownEvent = secondFingerDownEvent;
        this.options = options;
        this.providers = providers;
        this.sharedState = sharedState;
        this.centerPoint = new rc_js_util_1.Vec2.f32();
        const distanceBetweenPointerEvents = (0, get_distance_between_pointer_events_1.getDistanceBetweenPointerEvents)(firstFingerDownEvent.$event, secondFingerDownEvent.$event);
        // remove possibility of zeros
        this.initialDistance = rc_js_util_1._Math.max(distanceBetweenPointerEvents, 1);
        (0, get_center_between_pointer_events_1.getCenterBetweenPointerEvents)(firstFingerDownEvent, secondFingerDownEvent, this.centerPoint);
        this.providers.callbacks.onPanZoomStart(this.centerPoint, this.initialDistance);
    }
    handleMouseEvent() {
        return null;
    }
    handlePointerEvent(eventType, chartEvent) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            rc_js_util_1._Debug.assert(this.firstFingerDownEvent !== chartEvent, "event must be cloned");
            rc_js_util_1._Debug.assert(this.secondFingerDownEvent !== chartEvent, "event must be cloned");
        });
        this.updateEvents(chartEvent);
        (0, get_center_between_pointer_events_1.getCenterBetweenPointerEvents)(this.firstFingerDownEvent, this.secondFingerDownEvent, this.centerPoint);
        switch (eventType) {
            case e_pointer_event_type_1.EPointerEventType.Out:
            case e_pointer_event_type_1.EPointerEventType.Up:
                {
                    return rc_js_util_1._Fp.valueOrNull(this.isInitialPointer(chartEvent), this.providers.stateFactories.getPanningState(this.getRemainingEvent(chartEvent), this.options, this.providers, this.sharedState));
                }
            case e_pointer_event_type_1.EPointerEventType.Down:
                // don't support touch support for more than 2 fingers
                return null;
            case e_pointer_event_type_1.EPointerEventType.Move:
                {
                    if (this.isInitialPointer(chartEvent)) {
                        const distanceBetweenPointerEvents = (0, get_distance_between_pointer_events_1.getDistanceBetweenPointerEvents)(this.firstFingerDownEvent.$event, this.secondFingerDownEvent.$event);
                        // remove possibility of divide by 0
                        const currentDistance = rc_js_util_1._Math.max(distanceBetweenPointerEvents, 1);
                        // const zoomRatio = this.options.pinchZoomSensitivity * this.initialDistance / currentDistance;
                        this.providers.callbacks.onPanZoomChange(chartEvent, this.centerPoint, currentDistance);
                    }
                    return null;
                }
        }
        return rc_js_util_1._Production.assertValueIsNever(eventType);
    }
    updateEvents(chartEvent) {
        if (this.firstFingerDownEvent.$event.pointerId === chartEvent.$event.pointerId) {
            this.firstFingerDownEvent = chartEvent.clone();
        }
        else if (this.secondFingerDownEvent.$event.pointerId === chartEvent.$event.pointerId) {
            this.secondFingerDownEvent = chartEvent.clone();
        }
    }
    isInitialPointer(chartEvent) {
        return this.firstFingerDownEvent.$event.pointerId === chartEvent.$event.pointerId
            || this.secondFingerDownEvent.$event.pointerId === chartEvent.$event.pointerId;
    }
    getRemainingEvent(chartEvent) {
        return this.firstFingerDownEvent.$event.pointerId === chartEvent.$event.pointerId
            ? this.secondFingerDownEvent
            : this.firstFingerDownEvent;
    }
}
exports.PinchZoomingState = PinchZoomingState;


/***/ }),

/***/ "./src/core/eventing/user-interaction/hit-test/hit-always-allowed-component.ts":
/*!*************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/hit-test/hit-always-allowed-component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitAlwaysAllowedComponent = void 0;
class HitAlwaysAllowedComponent {
    isHitAllowed() {
        return true;
    }
}
exports.HitAlwaysAllowedComponent = HitAlwaysAllowedComponent;


/***/ }),

/***/ "./src/core/eventing/user-interaction/hit-test/hit-test-result.ts":
/*!************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/hit-test/hit-test-result.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitTestResult = void 0;
class HitTestResult {
    constructor(entity, segmentIds, hitTestArg, filterMask) {
        this.entity = entity;
        this.segmentIds = segmentIds;
        this.hitTestArg = hitTestArg;
        this.filterMask = filterMask;
    }
}
exports.HitTestResult = HitTestResult;


/***/ }),

/***/ "./src/core/eventing/user-interaction/interaction-groups.ts":
/*!******************************************************************!*\
  !*** ./src/core/eventing/user-interaction/interaction-groups.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionGroups = void 0;
const hit_testable_group_1 = __webpack_require__(/*! ../../entities/groups/hit-testable-group */ "./src/core/entities/groups/hit-testable-group.ts");
const interaction_group_1 = __webpack_require__(/*! ../../entities/groups/interaction-group */ "./src/core/entities/groups/interaction-group.ts");
class InteractionGroups {
    constructor(argProvider, plot) {
        this.hitTestable = new hit_testable_group_1.HitTestableGroup(argProvider, plot);
        this.draggable = new interaction_group_1.InteractionGroup(1 << 0, this.hitTestable, plot);
        this.clickable = new interaction_group_1.InteractionGroup(1 << 1, this.hitTestable, plot);
        this.hoverable = new interaction_group_1.InteractionGroup(1 << 2, this.hitTestable, plot);
    }
}
exports.InteractionGroups = InteractionGroups;


/***/ }),

/***/ "./src/core/eventing/user-interaction/internal-events/chart-pointer-event.ts":
/*!***********************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/internal-events/chart-pointer-event.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartPointerEvent = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const canvas_dimensions_1 = __webpack_require__(/*! ../../../templating/canvas-dimensions */ "./src/core/templating/canvas-dimensions.ts");
class ChartPointerEvent {
    constructor(canvasDims, pointerCssPosition, pointerClipPosition, $event) {
        this.canvasDims = canvasDims;
        this.pointerCssPosition = pointerCssPosition;
        this.pointerClipPosition = pointerClipPosition;
        this.$event = $event;
        this.stoppedPropagation = false;
    }
    static createOneEmpty() {
        return new ChartPointerEvent(canvas_dimensions_1.CanvasDimensions.createDefault(), rc_js_util_1.Vec2.f32.factory.createOneEmpty(), rc_js_util_1.Vec2.f32.factory.createOneEmpty(), new PointerEvent("dummy"));
    }
    clone() {
        return new ChartPointerEvent(this.canvasDims.clone(), this.pointerCssPosition.slice(), this.pointerClipPosition.slice(), this.$event);
    }
    stopPropagation() {
        this.stoppedPropagation = true;
    }
}
exports.ChartPointerEvent = ChartPointerEvent;


/***/ }),

/***/ "./src/core/eventing/user-interaction/internal-events/e-mouse-event-type.ts":
/*!**********************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/internal-events/e-mouse-event-type.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMouseEventTypeNames = exports.EMouseEventType = void 0;
var EMouseEventType;
(function (EMouseEventType) {
    EMouseEventType[EMouseEventType["Wheel"] = 0] = "Wheel";
})(EMouseEventType = exports.EMouseEventType || (exports.EMouseEventType = {}));
class EMouseEventTypeNames {
}
exports.EMouseEventTypeNames = EMouseEventTypeNames;
_a = EMouseEventType.Wheel;
EMouseEventTypeNames[_a] = 1;


/***/ }),

/***/ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-button.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/internal-events/e-pointer-event-button.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EPointerEventButton = void 0;
var EPointerEventButton;
(function (EPointerEventButton) {
    EPointerEventButton[EPointerEventButton["LeftMouse"] = 0] = "LeftMouse";
    EPointerEventButton[EPointerEventButton["TouchContact"] = 0] = "TouchContact";
    EPointerEventButton[EPointerEventButton["PenContact"] = 0] = "PenContact";
    EPointerEventButton[EPointerEventButton["MiddleMouse"] = 1] = "MiddleMouse";
    EPointerEventButton[EPointerEventButton["RightMouse"] = 2] = "RightMouse";
    EPointerEventButton[EPointerEventButton["PenBarrelButton"] = 2] = "PenBarrelButton";
    EPointerEventButton[EPointerEventButton["MouseBack"] = 3] = "MouseBack";
    EPointerEventButton[EPointerEventButton["MouseForward"] = 4] = "MouseForward";
    EPointerEventButton[EPointerEventButton["PenEraser"] = 5] = "PenEraser";
})(EPointerEventButton = exports.EPointerEventButton || (exports.EPointerEventButton = {}));


/***/ }),

/***/ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts":
/*!************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EPointerEventTypeNames = exports.EPointerEventType = void 0;
var EPointerEventType;
(function (EPointerEventType) {
    EPointerEventType[EPointerEventType["Move"] = 0] = "Move";
    EPointerEventType[EPointerEventType["Up"] = 1] = "Up";
    EPointerEventType[EPointerEventType["Down"] = 2] = "Down";
    EPointerEventType[EPointerEventType["Out"] = 3] = "Out";
})(EPointerEventType = exports.EPointerEventType || (exports.EPointerEventType = {}));
class EPointerEventTypeNames {
}
exports.EPointerEventTypeNames = EPointerEventTypeNames;
_a = EPointerEventType.Move, _b = EPointerEventType.Up, _c = EPointerEventType.Down, _d = EPointerEventType.Out;
EPointerEventTypeNames[_a] = "Mouse move";
EPointerEventTypeNames[_b] = "Mouse up";
EPointerEventTypeNames[_c] = "Mouse down";
EPointerEventTypeNames[_d] = "Mouse out";


/***/ }),

/***/ "./src/core/eventing/user-interaction/internal-events/pointer-event-provider.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/internal-events/pointer-event-provider.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointerEventProvider = void 0;
const canvas_dimensions_1 = __webpack_require__(/*! ../../../templating/canvas-dimensions */ "./src/core/templating/canvas-dimensions.ts");
class PointerEventProvider {
    constructor(attachPoint) {
        this.attachPoint = attachPoint;
        this.canvasDimensions = canvas_dimensions_1.CanvasDimensions.createDefault();
    }
    updatePointerEvent($event, writeTo) {
        writeTo.$event = $event;
        const offsetX = $event.clientX - this.attachPoint.canvasDims.boundingRect.getXMin();
        const offsetY = $event.clientY - this.attachPoint.canvasDims.boundingRect.getYMin();
        // make y grow up instead of down
        writeTo.pointerCssPosition.update(offsetX, this.canvasDimensions.cssDims.getYRange() - offsetY);
        writeTo.pointerCssPosition.mat3Multiply(this.canvasDimensions.transforms.cssToClip, writeTo.pointerClipPosition);
        writeTo.canvasDims = this.canvasDimensions;
        writeTo.stoppedPropagation = false;
    }
    setCanvasDims(canvasDims) {
        this.canvasDimensions = canvasDims;
    }
}
exports.PointerEventProvider = PointerEventProvider;


/***/ }),

/***/ "./src/core/eventing/user-interaction/plot-event-handler.ts":
/*!******************************************************************!*\
  !*** ./src/core/eventing/user-interaction/plot-event-handler.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlotEventHandler = void 0;
const e_pointer_event_type_1 = __webpack_require__(/*! ./internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_mouse_event_type_1 = __webpack_require__(/*! ./internal-events/e-mouse-event-type */ "./src/core/eventing/user-interaction/internal-events/e-mouse-event-type.ts");
const pointer_event_provider_1 = __webpack_require__(/*! ./internal-events/pointer-event-provider */ "./src/core/eventing/user-interaction/internal-events/pointer-event-provider.ts");
const chart_pointer_event_1 = __webpack_require__(/*! ./internal-events/chart-pointer-event */ "./src/core/eventing/user-interaction/internal-events/chart-pointer-event.ts");
/**
 * @internal
 */
class PlotEventHandler {
    constructor(initialState, plot) {
        this.plot = plot;
        this.pointerEvent = chart_pointer_event_1.ChartPointerEvent.createOneEmpty();
        this.currentState = initialState;
        this.pointerEventProvider = new pointer_event_provider_1.PointerEventProvider(plot.attachPoint);
    }
    onCanvasResized(canvasDims) {
        this.pointerEventProvider.setCanvasDims(canvasDims);
    }
    onPointerEvent(eventType, $event) {
        this.pointerEventProvider.updatePointerEvent($event, this.pointerEvent);
        if (!this.plot.plotDimensionsOBL.clipSpaceArea.interactiveRange.isPointInRange(this.pointerEvent.pointerClipPosition)) {
            // it's outside of the plot's range, act as if it's an out event
            eventType = e_pointer_event_type_1.EPointerEventType.Out;
        }
        const newState = this.currentState.handlePointerEvent(eventType, this.pointerEvent);
        if (newState != null) {
            DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
                const prevState = this.currentState.constructor.name;
                const curState = newState.constructor.name;
                const eventName = e_pointer_event_type_1.EPointerEventTypeNames[eventType];
                const name = this.plot.plotName == null ? "" : `${this.plot.plotName} `;
                rc_js_util_1._Debug.verboseLog(`${name}${prevState} -> ${curState} (${eventName})`);
            });
            this.currentState = newState;
        }
    }
    onMouseEvent(eventType, $event) {
        this.pointerEventProvider.updatePointerEvent($event, this.pointerEvent);
        if (!this.plot.plotDimensionsOBL.clipSpaceArea.interactiveRange.isPointInRange(this.pointerEvent.pointerClipPosition)) {
            // it's outside of the plot's range, only zoom is supported... do nothing
            return;
        }
        const newState = this.currentState.handleMouseEvent(eventType, this.pointerEvent);
        if (newState != null) {
            DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
                const prevState = this.currentState.constructor.name;
                const curState = newState.constructor.name;
                const eventName = e_mouse_event_type_1.EMouseEventTypeNames[eventType];
                const name = this.plot.plotName == null ? "" : `${this.plot.plotName} `;
                rc_js_util_1._Debug.verboseLog(`${name}${prevState} -> ${curState} (${eventName})`);
            });
            this.currentState = newState;
        }
    }
}
exports.PlotEventHandler = PlotEventHandler;


/***/ }),

/***/ "./src/core/eventing/user-interaction/quad-tree/quad-event-target-provider.ts":
/*!************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/quad-tree/quad-event-target-provider.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuadEventTargetProvider = void 0;
const hit_test_result_1 = __webpack_require__(/*! ../hit-test/hit-test-result */ "./src/core/eventing/user-interaction/hit-test/hit-test-result.ts");
const quad_element_shared_object_1 = __webpack_require__(/*! ../../../../plugins/cartesian2d/quad-tree/quad-element-shared-object */ "./src/plugins/cartesian2d/quad-tree/quad-element-shared-object.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class QuadEventTargetProvider {
    constructor(hitTestableEntities, quadTree) {
        this.hitTestableEntities = hitTestableEntities;
        this.quadTree = quadTree;
    }
    hitTestPlot(pointerEvent) {
        const resultCount = this.quadTree.sharedTree.queryPoint(pointerEvent.pointerCssPosition, this.hitTestableEntities.groupMask);
        const entities = this.quadTree.entities;
        const results = this.quadTree.sharedTree.getResults();
        const updateArg = this.quadTree.hitTestArg;
        const elements = new Map();
        if (updateArg == null) {
            rc_js_util_1._Production.error("updateArg must be set before query");
        }
        for (let i = 0, iEnd = resultCount * quad_element_shared_object_1.QuadElementSharedObject.elementCount; i < iEnd; i += quad_element_shared_object_1.QuadElementSharedObject.elementCount) {
            const entity = entities[results[i]];
            DEBUG_MODE && rc_js_util_1._Debug.assert(entity != null, "failed entity lookup");
            if (!this.hitTestableEntities.isHitTestableComponentStore
                .getComponent(entity)
                .isHitAllowed(entity, pointerEvent, updateArg)) {
                continue;
            }
            const dataId = results[i + 1];
            if (!this.hitTestableEntities.hitTestableGroup
                .getHitTester(entity)
                .hitTest(entity, dataId, pointerEvent.pointerCssPosition, updateArg)) {
                continue;
            }
            const element = elements.get(entity);
            if (element == null) {
                elements.set(entity, new hit_test_result_1.HitTestResult(entity, new Set([dataId]), updateArg, results[i + 2]));
            }
            else {
                element.segmentIds.add(dataId);
            }
        }
        return rc_js_util_1._Map.valuesToArray(elements);
    }
}
exports.QuadEventTargetProvider = QuadEventTargetProvider;


/***/ }),

/***/ "./src/core/eventing/user-interaction/quad-tree/quad-tree-event-target-provider.ts":
/*!*****************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/quad-tree/quad-tree-event-target-provider.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuadTreeEventTargetProvider = void 0;
const quad_event_target_provider_1 = __webpack_require__(/*! ./quad-event-target-provider */ "./src/core/eventing/user-interaction/quad-tree/quad-event-target-provider.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class QuadTreeEventTargetProvider {
    constructor(entityTree, plot, interactiveGroups, options) {
        this.entityTree = entityTree;
        this.plot = plot;
        this.interactiveGroups = interactiveGroups;
        this.options = options;
        this.dragTargetProvider = new quad_event_target_provider_1.QuadEventTargetProvider(this.interactiveGroups.draggable, this.entityTree);
        this.clickTargetProvider = new quad_event_target_provider_1.QuadEventTargetProvider(this.interactiveGroups.clickable, this.entityTree);
        this.hoverTargetProvider = new quad_event_target_provider_1.QuadEventTargetProvider(this.interactiveGroups.hoverable, this.entityTree);
    }
    *update(canvasDims, start) {
        const plotDimensions = this.plot.plotDimensionsOBL.cssArea.wholeRange;
        const range = rc_js_util_1._Math.min(plotDimensions.getXRange(), plotDimensions.getYRange());
        this.entityTree.sharedTree.setOptions(Math.floor(Math.log2(range)), 4);
        this.entityTree.sharedTree.setTopLevel(plotDimensions);
        const entitiesByHitTester = this.interactiveGroups.hitTestable.getEntitiesByHitTester();
        const updateArg = this.interactiveGroups.hitTestable.argProvider.getUpdateArg(this.plot, canvasDims);
        this.entityTree.update(updateArg);
        const quadTree = this.entityTree;
        const yieldTime = this.options.yieldTime;
        for (let i = 0, iEnd = entitiesByHitTester.length; i < iEnd; ++i) {
            const hitTestComponent = entitiesByHitTester[i][0];
            const entities = entitiesByHitTester[i][1];
            for (let j = 0, jEnd = entities.length; j < jEnd; ++j) {
                const entity = entities[i];
                hitTestComponent.index(entity, updateArg, quadTree);
                if (performance.now() - start > yieldTime) {
                    yield;
                    start = performance.now();
                }
            }
        }
    }
}
exports.QuadTreeEventTargetProvider = QuadTreeEventTargetProvider;


/***/ }),

/***/ "./src/core/eventing/user-interaction/user-event-handler-callbacks.ts":
/*!****************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/user-event-handler-callbacks.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEventHandlerCallbacks = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class UserEventHandlerCallbacks {
    onDragStart() {
        return true;
    }
    onDrag() {
        // no action required
    }
    onDragEnd() {
        // no action required
    }
    onPan() {
        // no action required
    }
    onWheel() {
        // no action required
    }
    onPanZoomStart() {
        // no action required
    }
    onPanZoomChange() {
        // no action required
    }
    onClick() {
        // no action required
    }
    onDoubleClick() {
        // no action required
    }
    onHover() {
        // no action required
    }
    onCanvasResized() {
        // no action required
    }
    constructor(listeners) {
        rc_js_util_1._Dictionary.extend(this, listeners);
    }
}
exports.UserEventHandlerCallbacks = UserEventHandlerCallbacks;


/***/ }),

/***/ "./src/core/eventing/user-interaction/util/get-center-between-pointer-events.ts":
/*!**************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/util/get-center-between-pointer-events.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCenterBetweenPointerEvents = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * In css pixels.
 */
function getCenterBetweenPointerEvents(firstEvent, secondEvent, result = new rc_js_util_1.Vec2.f32()) {
    firstEvent.pointerCssPosition
        .add(secondEvent.pointerCssPosition, result)
        .scalarMultiply(0.5, result);
    return result;
}
exports.getCenterBetweenPointerEvents = getCenterBetweenPointerEvents;


/***/ }),

/***/ "./src/core/eventing/user-interaction/util/get-distance-between-pointer-events.ts":
/*!****************************************************************************************!*\
  !*** ./src/core/eventing/user-interaction/util/get-distance-between-pointer-events.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDistanceBetweenPointerEvents = void 0;
/**
 * In css pixels.
 */
function getDistanceBetweenPointerEvents(firstEvent, secondEvent) {
    const adjacent = firstEvent.clientX - secondEvent.clientX;
    const opposite = firstEvent.clientY - secondEvent.clientY;
    return Math.hypot(adjacent, opposite);
}
exports.getDistanceBetweenPointerEvents = getDistanceBetweenPointerEvents;


/***/ }),

/***/ "./src/core/plot/events/on-entity-added-to-group.ts":
/*!**********************************************************!*\
  !*** ./src/core/plot/events/on-entity-added-to-group.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnEntityAddedToGroup = void 0;
class OnEntityAddedToGroup {
    constructor(onEntityAddedToGroup) {
        this.onEntityAddedToGroup = onEntityAddedToGroup;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityAddedToGroup)
            .addTemporaryListener(new OnEntityAddedToGroup(onEvent));
    }
    static registerOneTimeListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityAddedToGroup)
            .addOneTimeListener(new OnEntityAddedToGroup(onEvent));
    }
    static emit(plot, entity, group) {
        const listeners = plot.eventService
            .getCategory(OnEntityAddedToGroup)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onEntityAddedToGroup(entity, group);
        }
    }
}
exports.OnEntityAddedToGroup = OnEntityAddedToGroup;
OnEntityAddedToGroup.callbackKey = "onEntityAddedToGroup";


/***/ }),

/***/ "./src/core/plot/events/on-entity-added.ts":
/*!*************************************************!*\
  !*** ./src/core/plot/events/on-entity-added.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnEntityAdded = void 0;
class OnEntityAdded {
    constructor(onEntityAdded) {
        this.onEntityAdded = onEntityAdded;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityAdded)
            .addTemporaryListener(new OnEntityAdded(onEvent));
    }
    static registerOneTimeListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityAdded)
            .addOneTimeListener(new OnEntityAdded(onEvent));
    }
    static emit(plot, entity) {
        const listeners = plot.eventService
            .getCategory(OnEntityAdded)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onEntityAdded(entity, plot);
        }
    }
}
exports.OnEntityAdded = OnEntityAdded;
OnEntityAdded.callbackKey = "onEntityAdded";


/***/ }),

/***/ "./src/core/plot/events/on-entity-modified.ts":
/*!****************************************************!*\
  !*** ./src/core/plot/events/on-entity-modified.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnEntityModified = void 0;
class OnEntityModified {
    constructor(onEntityModified) {
        this.onEntityModified = onEntityModified;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityModified)
            .addTemporaryListener(new OnEntityModified(onEvent));
    }
    static registerOneTimeListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityModified)
            .addOneTimeListener(new OnEntityModified(onEvent));
    }
    static emit(plot, entity) {
        const listeners = plot.eventService
            .getCategory(OnEntityModified)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onEntityModified(entity, plot);
        }
    }
}
exports.OnEntityModified = OnEntityModified;
OnEntityModified.callbackKey = "onEntityModified";


/***/ }),

/***/ "./src/core/plot/events/on-entity-removed-from-group.ts":
/*!**************************************************************!*\
  !*** ./src/core/plot/events/on-entity-removed-from-group.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnEntityRemovedFromGroup = void 0;
class OnEntityRemovedFromGroup {
    constructor(onEntityRemovedFromGroup) {
        this.onEntityRemovedFromGroup = onEntityRemovedFromGroup;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityRemovedFromGroup)
            .addTemporaryListener(new OnEntityRemovedFromGroup(onEvent));
    }
    static registerOneTimeListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityRemovedFromGroup)
            .addOneTimeListener(new OnEntityRemovedFromGroup(onEvent));
    }
    static emit(plot, entity, group) {
        const listeners = plot.eventService
            .getCategory(OnEntityRemovedFromGroup)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onEntityRemovedFromGroup(entity, group);
        }
    }
}
exports.OnEntityRemovedFromGroup = OnEntityRemovedFromGroup;
OnEntityRemovedFromGroup.callbackKey = "onEntityRemovedFromGroup";


/***/ }),

/***/ "./src/core/plot/events/on-entity-removed.ts":
/*!***************************************************!*\
  !*** ./src/core/plot/events/on-entity-removed.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnEntityRemoved = void 0;
class OnEntityRemoved {
    constructor(onEntityRemoved) {
        this.onEntityRemoved = onEntityRemoved;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityRemoved)
            .addTemporaryListener(new OnEntityRemoved(onEvent));
    }
    static registerOneTimeListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnEntityRemoved)
            .addOneTimeListener(new OnEntityRemoved(onEvent));
    }
    static emit(plot, entity) {
        const listeners = plot.eventService
            .getCategory(OnEntityRemoved)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onEntityRemoved(entity, plot);
        }
    }
}
exports.OnEntityRemoved = OnEntityRemoved;
OnEntityRemoved.callbackKey = "onEntityRemoved";


/***/ }),

/***/ "./src/core/plot/events/on-plot-attached.ts":
/*!**************************************************!*\
  !*** ./src/core/plot/events/on-plot-attached.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnPlotAttached = void 0;
class OnPlotAttached {
    constructor(onPlotAttached) {
        this.onPlotAttached = onPlotAttached;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnPlotAttached)
            .addTemporaryListener(new OnPlotAttached(onEvent));
    }
    static emit(plot, chart) {
        const listeners = plot.eventService
            .getCategory(OnPlotAttached)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onPlotAttached(chart);
        }
    }
}
exports.OnPlotAttached = OnPlotAttached;
OnPlotAttached.callbackKey = "onPlotAttached";


/***/ }),

/***/ "./src/core/plot/events/on-plot-detached.ts":
/*!**************************************************!*\
  !*** ./src/core/plot/events/on-plot-detached.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnPlotDetached = void 0;
class OnPlotDetached {
    constructor(onPlotDetached) {
        this.onPlotDetached = onPlotDetached;
    }
    static registerListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnPlotDetached)
            .addTemporaryListener(new OnPlotDetached(onEvent));
    }
    static registerOneTimeListener(plot, onEvent) {
        return plot.eventService
            .getCategory(OnPlotDetached)
            .addOneTimeListener(new OnPlotDetached(onEvent));
    }
    static emit(plot, chart) {
        const listeners = plot.eventService
            .getCategory(OnPlotDetached)
            .getTargets();
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].onPlotDetached(chart);
        }
    }
}
exports.OnPlotDetached = OnPlotDetached;
OnPlotDetached.callbackKey = "onPlotDetached";


/***/ }),

/***/ "./src/core/plot/i-plot-area.ts":
/*!**************************************!*\
  !*** ./src/core/plot/i-plot-area.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlotArea = void 0;
const full_clip_space_range2d_1 = __webpack_require__(/*! ../transforms/full-clip-space-range2d */ "./src/core/transforms/full-clip-space-range2d.ts");
class PlotArea {
    constructor(wholeRange, interactiveRange) {
        this.wholeRange = wholeRange;
        this.interactiveRange = interactiveRange;
    }
    static createOneWithMargins(wholeArea, margins) {
        const interactiveArea = margins.getInnerRange(wholeArea);
        return new PlotArea(wholeArea, interactiveArea);
    }
    static createDefault() {
        return new PlotArea(full_clip_space_range2d_1.fullClipSpaceRange2d.slice(), full_clip_space_range2d_1.fullClipSpaceRange2d.slice());
    }
}
exports.PlotArea = PlotArea;


/***/ }),

/***/ "./src/core/plot/interaction-connector/plot-interaction-connector.ts":
/*!***************************************************************************!*\
  !*** ./src/core/plot/interaction-connector/plot-interaction-connector.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlotInteractionConnector = void 0;
const chart_interaction_providers_1 = __webpack_require__(/*! ../../eventing/user-interaction/chart-interaction-providers */ "./src/core/eventing/user-interaction/chart-interaction-providers.ts");
const plot_event_handler_1 = __webpack_require__(/*! ../../eventing/user-interaction/plot-event-handler */ "./src/core/eventing/user-interaction/plot-event-handler.ts");
const on_canvas_mouse_event_1 = __webpack_require__(/*! ../../eventing/events/on-canvas-mouse-event */ "./src/core/eventing/events/on-canvas-mouse-event.ts");
const on_canvas_pointer_event_1 = __webpack_require__(/*! ../../eventing/events/on-canvas-pointer-event */ "./src/core/eventing/events/on-canvas-pointer-event.ts");
const on_canvas_resized_1 = __webpack_require__(/*! ../../eventing/events/on-canvas-resized */ "./src/core/eventing/events/on-canvas-resized.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Provides a reasonably generic attach point for behaviors on events. A default state machine will be supplied which
 * provides both mouse and touch events for: click, double click, pinch and mouse zooming, dragging and entity hover.
 *
 * @remarks
 * The default state machine can be extended by providing supplying a custom initial state, pointing to the extension.
 */
class PlotInteractionConnector {
    constructor(stateChangeCallbacks, options = { doubleClickOptions: { timeout: 500, maxRadius: 2 }, pinchZoomSensitivity: 1 }, createEventHandler = (initialState, plot) => new plot_event_handler_1.PlotEventHandler(initialState, plot)) {
        this.stateChangeCallbacks = stateChangeCallbacks;
        this.options = options;
        this.createEventHandler = createEventHandler;
        this.eventHandler = null;
        this.userCallbacks = null;
        this.targetProvider = null;
        this.temporaryListeners = new rc_js_util_1.TemporaryListener();
    }
    register(plot, chartEventService, getTargetProviders, getInitialState) {
        this.unregister();
        const targetProvider = this.targetProvider = getTargetProviders();
        this.userCallbacks = this.stateChangeCallbacks(targetProvider);
        const initialState = getInitialState(this.options, new chart_interaction_providers_1.ChartInteractionProviders(this.userCallbacks, targetProvider, plot.attachPoint));
        this.eventHandler = this.createEventHandler(initialState, plot);
        this.temporaryListeners.addListener(chartEventService.getCategory(on_canvas_resized_1.OnCanvasResized).addTemporaryListener(this.userCallbacks));
        this.temporaryListeners.addListener(chartEventService.getCategory(on_canvas_resized_1.OnCanvasResized).addTemporaryListener(this.eventHandler));
        this.temporaryListeners.addListener(chartEventService.getCategory(on_canvas_mouse_event_1.OnCanvasMouseEvent).addTemporaryListener(this.eventHandler));
        this.temporaryListeners.addListener(chartEventService.getCategory(on_canvas_pointer_event_1.OnCanvasPointerEvent).addTemporaryListener(this.eventHandler));
        return targetProvider;
    }
    unregister() {
        this.temporaryListeners.clearingEmit();
        this.eventHandler = null;
        this.userCallbacks = null;
    }
    update(canvasDims, startTime) {
        return this.targetProvider == null
            ? rc_js_util_1._Iterator.emptyIterator
            : this.targetProvider.update(canvasDims, startTime);
    }
}
exports.PlotInteractionConnector = PlotInteractionConnector;


/***/ }),

/***/ "./src/core/plot/plot-dimensions.ts":
/*!******************************************!*\
  !*** ./src/core/plot/plot-dimensions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlotDimensions = void 0;
const i_plot_area_1 = __webpack_require__(/*! ./i-plot-area */ "./src/core/plot/i-plot-area.ts");
class PlotDimensions {
    constructor(clipSpaceArea, cssArea, pixelArea) {
        this.clipSpaceArea = clipSpaceArea;
        this.cssArea = cssArea;
        this.pixelArea = pixelArea;
    }
    /**
     * Origin bottom left (OBL).
     */
    static createOneOBL(clipSpaceRange, canvasDims) {
        return new PlotDimensions(clipSpaceRange, new i_plot_area_1.PlotArea(clipSpaceRange.wholeRange.mat3Multiply(canvasDims.transforms.clipToCss), clipSpaceRange.interactiveRange.mat3Multiply(canvasDims.transforms.clipToCss)), new i_plot_area_1.PlotArea(clipSpaceRange.wholeRange.mat3Multiply(canvasDims.transforms.clipToPixel), clipSpaceRange.interactiveRange.mat3Multiply(canvasDims.transforms.clipToPixel)));
    }
    /**
     * Origin top left (OTL).
     */
    static createOneOTL(clipSpaceRange, canvasDims) {
        const dims = new PlotDimensions(clipSpaceRange, new i_plot_area_1.PlotArea(clipSpaceRange.wholeRange.mat3Multiply(canvasDims.reverseYTransforms.clipToCss), clipSpaceRange.interactiveRange.mat3Multiply(canvasDims.reverseYTransforms.clipToCss)), new i_plot_area_1.PlotArea(clipSpaceRange.wholeRange.mat3Multiply(canvasDims.reverseYTransforms.clipToPixel), clipSpaceRange.interactiveRange.mat3Multiply(canvasDims.reverseYTransforms.clipToPixel)));
        // the y range is upside down,correct it
        dims.cssArea.interactiveRange.ensureAABB();
        dims.cssArea.wholeRange.ensureAABB();
        dims.pixelArea.interactiveRange.ensureAABB();
        dims.pixelArea.wholeRange.ensureAABB();
        return dims;
    }
    static createDefault() {
        return new PlotDimensions(i_plot_area_1.PlotArea.createDefault(), i_plot_area_1.PlotArea.createDefault(), i_plot_area_1.PlotArea.createDefault());
    }
}
exports.PlotDimensions = PlotDimensions;


/***/ }),

/***/ "./src/core/plot/plot.ts":
/*!*******************************!*\
  !*** ./src/core/plot/plot.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plot = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const plot_dimensions_1 = __webpack_require__(/*! ./plot-dimensions */ "./src/core/plot/plot-dimensions.ts");
const chart_event_service_1 = __webpack_require__(/*! ../eventing/chart-event-service */ "./src/core/eventing/chart-event-service.ts");
const on_entity_removed_1 = __webpack_require__(/*! ./events/on-entity-removed */ "./src/core/plot/events/on-entity-removed.ts");
const on_entity_added_1 = __webpack_require__(/*! ./events/on-entity-added */ "./src/core/plot/events/on-entity-added.ts");
const on_entity_added_to_group_1 = __webpack_require__(/*! ./events/on-entity-added-to-group */ "./src/core/plot/events/on-entity-added-to-group.ts");
const on_entity_removed_from_group_1 = __webpack_require__(/*! ./events/on-entity-removed-from-group */ "./src/core/plot/events/on-entity-removed-from-group.ts");
class Plot {
    constructor(arg) {
        var _a;
        this.eventService = new chart_event_service_1.EventService();
        this.onCanvasResized = () => {
            this.setPlotArea(this.plotDimensionsOBL.clipSpaceArea);
        };
        this.interactionHandler = null;
        this.entities = new Set();
        this.entitiesByGroup = new Map();
        this.groupsByEntities = new Map();
        this.changeIdFactory = arg.chart.changeIdFactory;
        this.plotRange = arg.plotOptions.plotRange;
        this.plotName = (_a = arg.plotOptions.plotName) !== null && _a !== void 0 ? _a : null;
        this.chartEventService = arg.chart.eventService;
        this.attachPoint = arg.chart.attachPoint;
        this.plotDimensionsOTL = plot_dimensions_1.PlotDimensions.createOneOTL(arg.plotArea, this.attachPoint.canvasDims);
        this.plotDimensionsOBL = plot_dimensions_1.PlotDimensions.createOneOBL(arg.plotArea, this.attachPoint.canvasDims);
        this.updateStrategy = arg.plotOptions.createUpdateStrategy(this, arg.plotOptions.updateGroup);
    }
    getInteractionHandler() {
        return this.interactionHandler;
    }
    setInteractionHandler(interactionHandler, getTargetProviders, initialStateProvider) {
        this.clearInteractionHandler();
        this.interactionHandler = interactionHandler;
        return this.interactionHandler.register(this, this.chartEventService, getTargetProviders, initialStateProvider);
    }
    clearInteractionHandler() {
        if (this.interactionHandler != null) {
            this.interactionHandler.unregister(this.chartEventService);
            this.interactionHandler = null;
        }
    }
    setPlotArea(plotClipSpaceArea) {
        this.plotDimensionsOTL = plot_dimensions_1.PlotDimensions.createOneOTL(plotClipSpaceArea, this.attachPoint.canvasDims);
        this.plotDimensionsOBL = plot_dimensions_1.PlotDimensions.createOneOBL(plotClipSpaceArea, this.attachPoint.canvasDims);
    }
    addEntity(entity) {
        if (this.entities.has(entity)) {
            return;
        }
        if (entity.changeId === -1) {
            entity.changeId = this.changeIdFactory.getNextId();
        }
        this.entities.add(entity);
        on_entity_added_1.OnEntityAdded.emit(this, entity);
    }
    removeEntity(entity) {
        const removedEntity = this.entities.delete(entity);
        if (!removedEntity) {
            return;
        }
        const groups = this.groupsByEntities.get(entity);
        if (groups == null) {
            return;
        }
        groups.forEach(group => {
            const entities = this.entitiesByGroup.get(group);
            if (entities != null) {
                DEBUG_MODE && rc_js_util_1._Debug.assert(entities.has(entity), "expected entity to be in group");
                entities.delete(entity);
                group.onEntityRemoved(entity);
            }
        });
        on_entity_removed_1.OnEntityRemoved.emit(this, entity);
    }
    addToGroup(entity, group, options) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(this.entities.has(entity), "entity must be added before adding a trait");
        const added = rc_js_util_1._Map.reportingAddToSet(this.entitiesByGroup, group, entity);
        rc_js_util_1._Map.addToSet(this.groupsByEntities, entity, group);
        if (added) {
            group.onEntityAdded(entity, options);
            on_entity_added_to_group_1.OnEntityAddedToGroup.emit(this, entity, group);
        }
        return added;
    }
    removeFromGroup(entity, group) {
        rc_js_util_1._Map.deleteFromSet(this.groupsByEntities, entity, group);
        const removed = rc_js_util_1._Map.deleteFromSet(this.entitiesByGroup, group, entity);
        if (removed) {
            group.onEntityRemoved(entity);
            on_entity_removed_from_group_1.OnEntityRemovedFromGroup.emit(this, entity, group);
        }
        return removed;
    }
    getEntitiesInGroup(trait) {
        const entitiesByAncillaryObject = this.entitiesByGroup.get(trait);
        if (entitiesByAncillaryObject == null) {
            return rc_js_util_1._Array.emptyArray;
        }
        return rc_js_util_1._Set.valuesToArray(entitiesByAncillaryObject);
    }
}
exports.Plot = Plot;


/***/ }),

/***/ "./src/core/rendering/canvas/canvas-context-adapter.ts":
/*!*************************************************************!*\
  !*** ./src/core/rendering/canvas/canvas-context-adapter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasContextAdapter = void 0;
const context_change_hooks_1 = __webpack_require__(/*! ../context-change-hooks */ "./src/core/rendering/context-change-hooks.ts");
class CanvasContextAdapter {
    constructor(canvasElement, graphContextChangeHooks = new context_change_hooks_1.ContextChangeHooks()) {
        this.canvasElement = canvasElement;
        this.graphContextChangeHooks = graphContextChangeHooks;
        this.context = null;
    }
    onResize() {
        // no action needed
    }
    getContext() {
        if (this.context != null) {
            return this.context;
        }
        return this.context = this.canvasElement.getContext("2d");
    }
}
exports.CanvasContextAdapter = CanvasContextAdapter;


/***/ }),

/***/ "./src/core/rendering/canvas/canvas-entity-renderer-provider.ts":
/*!**********************************************************************!*\
  !*** ./src/core/rendering/canvas/canvas-entity-renderer-provider.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasEntityRendererProvider = void 0;
class CanvasEntityRendererProvider {
    constructor(context) {
        this.context = context;
    }
    getRenderer() {
        return this.context;
    }
    initializeRenderer() {
        return this.context;
    }
    reinitializeRenderers() {
        // no action is required
    }
}
exports.CanvasEntityRendererProvider = CanvasEntityRendererProvider;


/***/ }),

/***/ "./src/core/rendering/canvas/canvas-entity-renderer.ts":
/*!*************************************************************!*\
  !*** ./src/core/rendering/canvas/canvas-entity-renderer.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasEntityRenderer = void 0;
class CanvasEntityRenderer {
    constructor(context, sharedState) {
        this.context = context;
        this.sharedState = sharedState;
        this.specification = {};
    }
    onAfterInitialization() {
        // no action needed
    }
    onBeforeInitialization() {
        // no action needed
    }
    onAfterDraw() {
        // no action needed
    }
    onBeforeDraw() {
        // no action needed
    }
}
exports.CanvasEntityRenderer = CanvasEntityRenderer;


/***/ }),

/***/ "./src/core/rendering/canvas/canvas-renderer-factory.ts":
/*!**************************************************************!*\
  !*** ./src/core/rendering/canvas/canvas-renderer-factory.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasRendererFactory = void 0;
class CanvasRendererFactory {
    constructor(entityRenderer) {
        this.entityRenderer = entityRenderer;
    }
    createRenderer() {
        return this.entityRenderer;
    }
}
exports.CanvasRendererFactory = CanvasRendererFactory;


/***/ }),

/***/ "./src/core/rendering/canvas/canvas-renderer-shared-state.ts":
/*!*******************************************************************!*\
  !*** ./src/core/rendering/canvas/canvas-renderer-shared-state.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasRendererSharedState = void 0;
class CanvasRendererSharedState {
    constructor() {
        this.frameCounter = 0;
        this.scissorRange = null;
    }
    onNewFrame() {
        ++this.frameCounter;
    }
    updateScissorRange(scissorRange) {
        this.scissorRange = scissorRange;
    }
}
exports.CanvasRendererSharedState = CanvasRendererSharedState;


/***/ }),

/***/ "./src/core/rendering/canvas/canvas-renderer.ts":
/*!******************************************************!*\
  !*** ./src/core/rendering/canvas/canvas-renderer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasRenderer = void 0;
const canvas_entity_renderer_1 = __webpack_require__(/*! ./canvas-entity-renderer */ "./src/core/rendering/canvas/canvas-entity-renderer.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const canvas_entity_renderer_provider_1 = __webpack_require__(/*! ./canvas-entity-renderer-provider */ "./src/core/rendering/canvas/canvas-entity-renderer-provider.ts");
const canvas_renderer_factory_1 = __webpack_require__(/*! ./canvas-renderer-factory */ "./src/core/rendering/canvas/canvas-renderer-factory.ts");
const composite_graphics_component_1 = __webpack_require__(/*! ../../components/composite-graphics-component */ "./src/core/components/composite-graphics-component.ts");
const canvas_renderer_shared_state_1 = __webpack_require__(/*! ./canvas-renderer-shared-state */ "./src/core/rendering/canvas/canvas-renderer-shared-state.ts");
class CanvasRenderer {
    constructor(context, callbacks) {
        this.graphicsComponents = new Map();
        this.sharedState = new canvas_renderer_shared_state_1.CanvasRendererSharedState();
        this.callbacks = {
            onBeforePlotDraw(context, plotDimensions) {
                const plotRange = plotDimensions.pixelArea.wholeRange;
                context.clearRect(plotRange.getXMin() | 0, plotRange.getYMin() | 0, plotRange.getXRange() | 0, plotRange.getYRange() | 0);
            },
            onAfterPlotDraw() {
                // no action needed
            },
        };
        if (callbacks != null) {
            rc_js_util_1._Dictionary.extend(this.callbacks, callbacks);
        }
        this.context = context;
        const entityRenderer = new canvas_entity_renderer_1.CanvasEntityRenderer(context, this.sharedState);
        this.entityRendererProvider = new canvas_entity_renderer_provider_1.CanvasEntityRendererProvider(entityRenderer);
        this.entityRendererFactory = new canvas_renderer_factory_1.CanvasRendererFactory(entityRenderer);
    }
    static createOne(context, callbacks) {
        if (context == null) {
            return null;
        }
        return new CanvasRenderer(context, callbacks);
    }
    onBeforePlotDraw(plot, canvasDims) {
        this.sharedState.onNewFrame();
        this.callbacks.onBeforePlotDraw(this.context, plot.plotDimensionsOTL, canvasDims);
    }
    onAfterPlotDraw() {
        this.callbacks.onAfterPlotDraw(this.context);
    }
    createCompositeGraphicsComponent(graphicsComp) {
        return new composite_graphics_component_1.CompositeGraphicsComponent({}, graphicsComp);
    }
}
exports.CanvasRenderer = CanvasRenderer;


/***/ }),

/***/ "./src/core/rendering/context-change-hooks.ts":
/*!****************************************************!*\
  !*** ./src/core/rendering/context-change-hooks.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextChangeHooks = void 0;
class ContextChangeHooks {
    registerCallbacks(contextLost, contextRestored) {
        this.contextLost = contextLost;
        this.contextRestored = contextRestored;
    }
    onContextLost() {
        if (this.contextLost != null) {
            this.contextLost();
        }
    }
    onContextRestored() {
        if (this.contextRestored != null) {
            this.contextRestored();
        }
    }
}
exports.ContextChangeHooks = ContextChangeHooks;


/***/ }),

/***/ "./src/core/rendering/dummy-entity-renderer.ts":
/*!*****************************************************!*\
  !*** ./src/core/rendering/dummy-entity-renderer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DummyEntityRenderer = void 0;
class DummyEntityRenderer {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    onAfterDraw() {
        // no action
    }
    onAfterInitialization() {
        // no action
    }
    onBeforeDraw() {
        // no action
    }
    onBeforeInitialization() {
        // no action
    }
}
exports.DummyEntityRenderer = DummyEntityRenderer;


/***/ }),

/***/ "./src/core/rendering/gl/attributes/a-gl-attribute.ts":
/*!************************************************************!*\
  !*** ./src/core/rendering/gl/attributes/a-gl-attribute.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AGlAttribute = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * {@inheritDoc IGlAttribute}
 */
class AGlAttribute {
    constructor(name, buffer, componentsPerVertex, byteOffset = 0, byteStride = 0, normalized = false) {
        this.name = name;
        this.buffer = buffer;
        this.componentsPerVertex = componentsPerVertex;
        this.byteOffset = byteOffset;
        this.byteStride = byteStride;
        this.normalized = normalized;
        this.attributeLocation = null;
        this.type = null;
        this.isOffsetDirty = true;
        this.divisor = null;
    }
    static extractBuffer(attribute) {
        return attribute.buffer;
    }
    static setBuffer(attribute, buffer) {
        attribute.buffer = buffer;
    }
    initialize(entityRenderer) {
        this.buffer.initialize(entityRenderer);
        this.attributeLocation = entityRenderer.getAttributeLocation(this.name);
        this.type = this.getGlType(entityRenderer.context);
        if (entityRenderer.isVaoActive()) {
            entityRenderer.context.enableVertexAttribArray(this.attributeLocation);
        }
    }
    setData(data, changeId) {
        this.buffer.setData(data, changeId);
    }
    overrideValues(entityRenderer, byteOffset, data, changeId, updateId) {
        this.buffer.overrideValues(entityRenderer.context, byteOffset, data, changeId, updateId);
    }
    setOffset(byteOffset) {
        if (this.byteOffset !== byteOffset) {
            this.isOffsetDirty = true;
            this.byteOffset = byteOffset;
        }
    }
    // FIXME this is missing bind constant / default, sub buffer updates & transforms
    bind(entityRenderer, usage = entityRenderer.context.DYNAMIC_DRAW) {
        if (this.attributeLocation == null || this.type == null) {
            DEBUG_MODE && rc_js_util_1._Debug.error(`expected attribute ${this.name} to be initialized`);
            return;
        }
        if (entityRenderer.isVaoActive()) {
            if (this.buffer.isDirty || this.isOffsetDirty) {
                this.buffer.bindBuffer(entityRenderer.context, usage);
            }
            if (this.isOffsetDirty) {
                this.setAttributePtr(entityRenderer.context, this.attributeLocation, this.type);
            }
        }
        else {
            this.buffer.bindBuffer(entityRenderer.context, usage);
            this.setAttributePtr(entityRenderer.context, this.attributeLocation, this.type);
        }
        this.isOffsetDirty = false;
    }
    bindInstanced(entityRenderer, divisor, usage) {
        if (this.attributeLocation == null) {
            DEBUG_MODE && rc_js_util_1._Debug.error(`expected attribute ${this.name} to be initialized`);
            return;
        }
        this.bind(entityRenderer, usage);
        if (entityRenderer.isVaoActive()) {
            if (this.divisor === divisor) {
                return;
            }
            this.divisor = divisor;
        }
        if (entityRenderer.isGl2) {
            entityRenderer.context.vertexAttribDivisor(this.attributeLocation, divisor);
        }
        else {
            entityRenderer.extensions.ANGLE_instanced_arrays.vertexAttribDivisorANGLE(this.attributeLocation, divisor);
        }
    }
    // todo jack: this should be called for every attribute, too error prone, use a registration system
    reset(entityRenderer) {
        if (entityRenderer.isVaoActive()) {
            return;
        }
        if (this.attributeLocation == null) {
            DEBUG_MODE && rc_js_util_1._Debug.error(`expected attribute ${this.name} to be initialized`);
            return;
        }
        if (entityRenderer.isGl2) {
            entityRenderer.context.vertexAttribDivisor(this.attributeLocation, 0);
        }
        else {
            entityRenderer.extensions.ANGLE_instanced_arrays.vertexAttribDivisorANGLE(this.attributeLocation, 0);
        }
        entityRenderer.context.disableVertexAttribArray(this.attributeLocation);
    }
    setAttributePtr(context, attributeLocation, type) {
        context.vertexAttribPointer(attributeLocation, this.componentsPerVertex, type, this.normalized, this.byteStride, this.byteOffset);
    }
}
exports.AGlAttribute = AGlAttribute;


/***/ }),

/***/ "./src/core/rendering/gl/attributes/gl-buffer.ts":
/*!*******************************************************!*\
  !*** ./src/core/rendering/gl/attributes/gl-buffer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlBuffer = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Dirty checked wrapper of `ARRAY_BUFFER`. Modify via {@link IGlAttribute}.
 */
class GlBuffer {
    constructor(data) {
        this.data = data;
        this.isDirty = true;
        this.buffer = null;
        this.changeId = -1;
        this.mutatorId = -1;
        this.updateId = -1;
    }
    initialize(entityRenderer) {
        if (this.buffer == null) {
            this.buffer = entityRenderer.context.createBuffer();
        }
    }
    setData(data, changeId) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(changeId !== -1, "found changeId that was not initialized");
        if (this.changeId === changeId) {
            return;
        }
        this.changeId = changeId;
        this.isDirty = true;
        this.data = data;
    }
    bindBuffer(context, usage) {
        context.bindBuffer(context.ARRAY_BUFFER, this.buffer);
        if (this.isDirty) {
            DEBUG_MODE && rc_js_util_1._Debug.assert(this.data != null, "expected data to have been set");
            const data = DEBUG_MODE ?
                rc_js_util_1.DebugProtectedView.unwrapProtectedView(this.data)
                : this.data;
            context.bufferData(context.ARRAY_BUFFER, data, usage);
            this.isDirty = false;
        }
    }
    overrideValues(context, byteOffset, data, changeId, updateId) {
        if (this.mutatorId === changeId) {
            if (updateId < this.updateId) {
                return;
            }
            else {
                this.updateId = updateId;
            }
        }
        else {
            this.updateId = updateId;
        }
        context.bufferSubData(context.ARRAY_BUFFER, byteOffset, data);
        this.mutatorId = changeId;
    }
}
exports.GlBuffer = GlBuffer;


/***/ }),

/***/ "./src/core/rendering/gl/attributes/gl-float-attribute.ts":
/*!****************************************************************!*\
  !*** ./src/core/rendering/gl/attributes/gl-float-attribute.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlFloatAttribute = void 0;
const a_gl_attribute_1 = __webpack_require__(/*! ./a-gl-attribute */ "./src/core/rendering/gl/attributes/a-gl-attribute.ts");
/**
 * @public
 * A Float32 {@link IGlAttribute}.
 */
class GlFloatAttribute extends a_gl_attribute_1.AGlAttribute {
    getGlType(context) {
        return context.FLOAT;
    }
}
exports.GlFloatAttribute = GlFloatAttribute;


/***/ }),

/***/ "./src/core/rendering/gl/bindings/a-gl-binder.ts":
/*!*******************************************************!*\
  !*** ./src/core/rendering/gl/bindings/a-gl-binder.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AGlBinder = void 0;
/**
 * @public
 * Data binder for webgl graphics components.
 */
class AGlBinder {
    update(connector, entityRenderer) {
        this.updateData(connector);
        this.updatePointers(connector);
        this.bindUniforms(entityRenderer);
        this.bindAttributes(entityRenderer);
    }
}
exports.AGlBinder = AGlBinder;


/***/ }),

/***/ "./src/core/rendering/gl/bindings/a-gl-instanced-binder.ts":
/*!*****************************************************************!*\
  !*** ./src/core/rendering/gl/bindings/a-gl-instanced-binder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AGlInstancedBinder = void 0;
const a_gl_binder_1 = __webpack_require__(/*! ./a-gl-binder */ "./src/core/rendering/gl/bindings/a-gl-binder.ts");
/**
 * @public
 * Instanced data binder for webgl graphics components.
 */
class AGlInstancedBinder extends a_gl_binder_1.AGlBinder {
    updateInstanced(connector, entityRenderer, divisor, usage) {
        this.updateData(connector);
        this.updatePointers(connector);
        this.bindUniforms(entityRenderer);
        this.bindInstanced(entityRenderer, divisor, usage);
    }
}
exports.AGlInstancedBinder = AGlInstancedBinder;


/***/ }),

/***/ "./src/core/rendering/gl/context/gl-context-adapter.ts":
/*!*************************************************************!*\
  !*** ./src/core/rendering/gl/context/gl-context-adapter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlContextAdapter = void 0;
/**
 * @public
 * Base webgl context adapter. Handles viewport and context loss.
 */
class GlContextAdapter {
    constructor(canvasElement, ctxId, options, graphContextChangeHooks) {
        this.canvasElement = canvasElement;
        this.ctxId = ctxId;
        this.options = options;
        this.graphContextChangeHooks = graphContextChangeHooks;
        this.context = null;
        this.lastCanvasDims = null;
        this.registerEventHandlers();
    }
    onResize(canvasDims) {
        this.lastCanvasDims = canvasDims;
        if (this.context == null) {
            return;
        }
        this.context.viewport(0, 0, canvasDims.pixelDims.getXMax(), canvasDims.pixelDims.getYMax());
    }
    getContext() {
        if (this.context != null) {
            return this.context;
        }
        return this.context = this.canvasElement.getContext(this.ctxId, this.options);
    }
    registerEventHandlers() {
        this.canvasElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            this.context = null;
        });
        this.canvasElement.addEventListener("webglcontextrestored", (e) => {
            e.preventDefault();
            this.getContext();
            if (this.lastCanvasDims != null) {
                this.onResize(this.lastCanvasDims);
            }
            this.graphContextChangeHooks.onContextRestored();
        });
    }
}
exports.GlContextAdapter = GlContextAdapter;


/***/ }),

/***/ "./src/core/rendering/gl/context/gl2-context-adapter.ts":
/*!**************************************************************!*\
  !*** ./src/core/rendering/gl/context/gl2-context-adapter.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gl2ContextAdapter = void 0;
const context_change_hooks_1 = __webpack_require__(/*! ../../context-change-hooks */ "./src/core/rendering/context-change-hooks.ts");
const gl_context_adapter_1 = __webpack_require__(/*! ./gl-context-adapter */ "./src/core/rendering/gl/context/gl-context-adapter.ts");
/**
 * @public
 * Webgl2 context adapter. Handles viewport and context loss.
 */
class Gl2ContextAdapter extends gl_context_adapter_1.GlContextAdapter {
    constructor(canvasElement, options, graphContextChangeHooks = new context_change_hooks_1.ContextChangeHooks()) {
        super(canvasElement, "webgl2", options, graphContextChangeHooks);
    }
}
exports.Gl2ContextAdapter = Gl2ContextAdapter;


/***/ }),

/***/ "./src/core/rendering/gl/entity-renderer/gl-entity-renderer-provider.ts":
/*!******************************************************************************!*\
  !*** ./src/core/rendering/gl/entity-renderer/gl-entity-renderer-provider.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlEntityRendererProvider = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class GlEntityRendererProvider {
    constructor() {
        this.cache = new Map();
    }
    getRenderer(graphicsComponent) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.cache.get(graphicsComponent.getCacheId());
    }
    initializeRenderer(graphicsComponent, create) {
        return rc_js_util_1._Map.initializeGet(this.cache, graphicsComponent.getCacheId(), create);
    }
    reinitializeRenderers(factory) {
        this.cache.forEach((renderer, key) => {
            this.cache.set(key, factory.createRenderer(renderer.specification));
        });
    }
}
exports.GlEntityRendererProvider = GlEntityRendererProvider;


/***/ }),

/***/ "./src/core/rendering/gl/entity-renderer/gl-entity-renderer.ts":
/*!*********************************************************************!*\
  !*** ./src/core/rendering/gl/entity-renderer/gl-entity-renderer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlEntityRenderer = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Webgl / webgl2 entity renderer implementation.
 */
class GlEntityRenderer {
    constructor(context, program, extensions, specification, sharedState) {
        this.context = context;
        this.program = program;
        this.extensions = extensions;
        this.specification = specification;
        this.sharedState = sharedState;
        this.attributeLocations = new Map();
        this.isGl2 = this.context instanceof WebGL2RenderingContext;
        this.vao = this.createVao();
    }
    onBeforeDraw() {
        this.useProgram();
        if (this.vao != null) {
            this.bindVao(this.vao);
        }
    }
    onAfterDraw() {
        // action not currently required
    }
    onBeforeInitialization() {
        if (this.vao != null) {
            this.bindVao(this.vao);
        }
    }
    onAfterInitialization() {
        if (this.vao != null) {
            this.unbindVao();
        }
    }
    getAttributeLocation(name) {
        return rc_js_util_1._Map.initializeGet(this.attributeLocations, name, () => this.context.getAttribLocation(this.program, name));
    }
    useProgram() {
        this.context.useProgram(this.program);
    }
    isVaoActive() {
        return this.vao != null;
    }
    drawInstancedArrays(mode, first, count, instanceCount) {
        if (this.isGl2) {
            this.context.drawArraysInstanced(mode, first, count, instanceCount);
        }
        else {
            this.extensions.ANGLE_instanced_arrays.drawArraysInstancedANGLE(mode, first, count, instanceCount);
        }
    }
    bindVao(vao) {
        const toBind = vao === undefined ? this.vao : vao;
        if (this.isGl2) {
            this.context.bindVertexArray(toBind);
        }
        else {
            this.extensions.OES_vertex_array_object.bindVertexArrayOES(toBind);
        }
    }
    unbindVao() {
        this.bindVao(null);
    }
    createVao() {
        if (this.isGl2) {
            return this.context.createVertexArray();
        }
        if (this.extensions.OES_vertex_array_object != null) {
            return this.extensions.OES_vertex_array_object.createVertexArrayOES();
        }
        return null;
    }
}
exports.GlEntityRenderer = GlEntityRenderer;


/***/ }),

/***/ "./src/core/rendering/gl/gl-program-specification.ts":
/*!***********************************************************!*\
  !*** ./src/core/rendering/gl/gl-program-specification.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlProgramSpecification = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_shader_1 = __webpack_require__(/*! ./gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
class GlProgramSpecification {
    constructor(vertexShader, fragmentShader, requiredExtensions = [], optionalExtensions = []) {
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.requiredExtensions = requiredExtensions;
        this.optionalExtensions = optionalExtensions;
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            const vlv = this.vertexShader.requiredLanguageVersion;
            const flv = this.fragmentShader.requiredLanguageVersion;
            if (vlv != null && flv != null) {
                rc_js_util_1._Debug.assert(vlv === flv, "vertex and fragment shader language versions must be the same");
            }
        });
        if (this.vertexShader.requiredLanguageVersion != null) {
            this.shaderLanguageVersion = this.vertexShader.requiredLanguageVersion;
        }
    }
    static mergeProgramSpecifications(specs) {
        const vertexVersion = GlProgramSpecification.getHighestShaderVersion(specs, "vertexShader");
        const fragmentVersion = GlProgramSpecification.getHighestShaderVersion(specs, "fragmentShader");
        const version = rc_js_util_1._Math.max(vertexVersion, fragmentVersion);
        const combinedVertexShader = GlProgramSpecification.combineShadersFinal(specs, "vertexShader", version, GlProgramSpecification.vertexShaderCompat);
        const combinedFragmentShader = GlProgramSpecification.combineShadersFinal(specs, "fragmentShader", version, GlProgramSpecification.fragmentShaderCompat);
        const requiredExts = rc_js_util_1._Array.collect(specs, new Set(), (extensions, specification) => {
            rc_js_util_1._Array.forEach(specification.requiredExtensions, (extension) => extensions.add(extension));
        });
        const optionalExts = rc_js_util_1._Array.collect(specs, new Set(), (extensions, specification) => {
            rc_js_util_1._Array.forEach(specification.optionalExtensions, (extension) => extensions.add(extension));
        });
        return new GlProgramSpecification(combinedVertexShader, combinedFragmentShader, rc_js_util_1._Set.valuesToArray(requiredExts), rc_js_util_1._Set.valuesToArray(optionalExts));
    }
    static getHighestShaderVersion(specs, key) {
        let version = -1;
        for (let i = 0, iEnd = specs.length; i < iEnd; ++i) {
            const shader = specs[i][key];
            if (shader.requiredLanguageVersion != null && shader.requiredLanguageVersion > version) {
                version = shader.requiredLanguageVersion;
            }
        }
        return version;
    }
    static combineShadersFinal(specs, key, version, compatPrefix) {
        const preLines = 3;
        const vertexParts = new Array(specs.length + preLines);
        let j = preLines;
        for (let i = 0, iEnd = specs.length; i < iEnd; ++i) {
            const shader = specs[i][key];
            vertexParts[j++] = shader.source;
            if (shader.requiredLanguageVersion != null && shader.requiredLanguageVersion > version) {
                version = shader.requiredLanguageVersion;
            }
        }
        vertexParts[0] = version === -1 ? "" : `#version ${version} es`;
        vertexParts[2] = compatPrefix;
        return new gl_shader_1.GlShader(vertexParts.join("\n"), version === -1 ? undefined : version);
    }
}
exports.GlProgramSpecification = GlProgramSpecification;
// @formatter:off
// when updating make sure to update the language injection prefix
// language=GLSL
GlProgramSpecification.vertexShaderCompat = `
#if __VERSION__ >=300 && __VERSION__ < 400
#define ATTRIBUTE in
#define VARYING out
#else
#define ATTRIBUTE attribute
#define VARYING varying
#endif`;
// @formatter:on
// @formatter:off
// when updating make sure to update the language injection prefix
// language=GLSL
GlProgramSpecification.fragmentShaderCompat = `
#if __VERSION__ >=300 && __VERSION__ < 400
out highp vec4 fragColor;
#endif

#if __VERSION__ >=300 && __VERSION__ < 400
#define VARYING in
#define TEXTURE2D texture
#else
#define VARYING varying
#define TEXTURE2D texture2D
#endif

void setFragmentColor(in lowp vec4 color)
{
    #if __VERSION__ >=300 && __VERSION__ < 400
    fragColor = color;
    #else
    gl_FragColor = color;
    #endif
}`;


/***/ }),

/***/ "./src/core/rendering/gl/gl-renderer-factory.ts":
/*!******************************************************!*\
  !*** ./src/core/rendering/gl/gl-renderer-factory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlRendererFactory = void 0;
const gl_entity_renderer_1 = __webpack_require__(/*! ./entity-renderer/gl-entity-renderer */ "./src/core/rendering/gl/entity-renderer/gl-entity-renderer.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_compile_error_1 = __webpack_require__(/*! ../../errors/gl-compile-error */ "./src/core/errors/gl-compile-error.ts");
const developer_error_localization_1 = __webpack_require__(/*! ../../errors/developer-error-localization */ "./src/core/errors/developer-error-localization.ts");
class GlRendererFactory {
    constructor(context, isGl2, localizations, sharedState) {
        this.context = context;
        this.isGl2 = isGl2;
        this.localizations = localizations;
        this.sharedState = sharedState;
    }
    static createOne(context, requiredExtensions, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    localizations = developer_error_localization_1.developerErrorLocalization, sharedState) {
        if (context == null) {
            return null;
        }
        const isGl2 = context instanceof WebGL2RenderingContext;
        for (let i = 0, iEnd = requiredExtensions.length; i < iEnd; ++i) {
            const extension = requiredExtensions[i];
            if (context.getExtension(extension) == null) {
                if (isGl2 && GlRendererFactory.gl2StandardExtensions.has(extension)) {
                    continue;
                }
                DEBUG_MODE && rc_js_util_1._Debug.verboseLog(`required extension "${extension}" not available`);
                return null;
            }
        }
        return new GlRendererFactory(context, isGl2, localizations, sharedState);
    }
    createRenderer(specification) {
        const program = this.compileProgram(specification.vertexShader.source, specification.fragmentShader.source);
        const extensions = {};
        for (let i = 0, iEnd = specification.requiredExtensions.length; i < iEnd; ++i) {
            const name = specification.requiredExtensions[i];
            const ext = this.context.getExtension(name);
            if (ext == null) {
                if (this.isGl2 && GlRendererFactory.gl2StandardExtensions.has(name)) {
                    continue;
                }
                rc_js_util_1._Production.error(`extension "${name}" is required but not available`);
            }
            extensions[name] = ext;
        }
        rc_js_util_1._Array.forEach(specification.optionalExtensions, (name) => {
            const ext = this.context.getExtension(name);
            if (ext != null) {
                extensions[name] = ext;
            }
        });
        return new gl_entity_renderer_1.GlEntityRenderer(this.context, program, extensions, specification, this.sharedState);
    }
    compileProgram(vertexShaderSource, fragmentShaderSource) {
        const vertexShader = this.compileShader(this.context.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.compileShader(this.context.FRAGMENT_SHADER, fragmentShaderSource);
        const program = this.context.createProgram();
        if (program == null) {
            rc_js_util_1._Production.error("failed to create program");
        }
        this.context.attachShader(program, vertexShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        const linked = this.context.getProgramParameter(program, this.context.LINK_STATUS);
        if (!linked) {
            const causedBy = this.context.getProgramInfoLog(program);
            this.context.deleteProgram(program);
            throw new gl_compile_error_1.GlCompileError(this.localizations.glCompileError, causedBy, this.localizations.getTx);
        }
        else {
            return program;
        }
    }
    compileShader(type, source) {
        const shader = this.context.createShader(type);
        if (shader == null) {
            rc_js_util_1._Production.error(`failed to create shader of type ${type}`);
        }
        this.context.shaderSource(shader, source);
        this.context.compileShader(shader);
        const compiled = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);
        DEBUG_MODE && rc_js_util_1._Debug.conditionalBlock("DEBUG_SHADER_COMPILATION", () => {
            const ext = this.context.getExtension("WEBGL_debug_shaders");
            if (ext != null) {
                console.debug(ext.getTranslatedShaderSource(shader));
            }
        });
        if (!compiled) {
            const causedBy = this.context.getShaderInfoLog(shader);
            this.context.deleteShader(shader);
            throw new gl_compile_error_1.GlCompileError(this.localizations.glCompileError, causedBy, this.localizations.getTx);
        }
        else {
            return shader;
        }
    }
}
exports.GlRendererFactory = GlRendererFactory;
GlRendererFactory.gl2StandardExtensions = new Set([
    "ANGLE_instanced_arrays",
    "OES_vertex_array_object",
    "WEBGL_depth_texture",
    "OES_texture_float",
    "OES_texture_float_linear",
    "OES_texture_half_float",
    "OES_texture_half_float_linear",
    "OES_standard_derivatives",
    "OES_element_index_uint",
    "EXT_frag_depth",
    "EXT_blend_minmax",
    "EXT_shader_texture_lod",
    "WEBGL_draw_buffers",
    "EXT_sRGB",
]);


/***/ }),

/***/ "./src/core/rendering/gl/gl-renderer-options.ts":
/*!******************************************************!*\
  !*** ./src/core/rendering/gl/gl-renderer-options.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlRendererOptions = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class GlRendererOptions {
    constructor(requiredExtensions, attributes, featureFlags) {
        this.onCreate = {
            featuresToEnable: featureFlags !== null && featureFlags !== void 0 ? featureFlags : ["CULL_FACE", "DEPTH_TEST", "SCISSOR_TEST"],
            requiredExtensionsToGet: requiredExtensions,
            contextAttributes: attributes,
        };
        this.onNewFrame = {
            bufferBitsToClear: ["COLOR_BUFFER_BIT", "DEPTH_BUFFER_BIT"],
            clearWithColor: rc_js_util_1.Vec4.f32.factory.createOne(0, 0, 0, 0),
        };
    }
}
exports.GlRendererOptions = GlRendererOptions;


/***/ }),

/***/ "./src/core/rendering/gl/gl-renderer-shared-state.ts":
/*!***********************************************************!*\
  !*** ./src/core/rendering/gl/gl-renderer-shared-state.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlRendererSharedState = void 0;
class GlRendererSharedState {
    constructor(maxTextureCount) {
        this.maxTextureCount = maxTextureCount;
        this.textureIndex = 0;
        this.frameCounter = 0;
        this.scissorRange = null;
    }
    onNewFrame() {
        ++this.frameCounter;
    }
    updateScissorRange(scissorRange) {
        this.scissorRange = scissorRange;
    }
    claimTextureUnit() {
        return this.textureIndex++;
    }
}
exports.GlRendererSharedState = GlRendererSharedState;


/***/ }),

/***/ "./src/core/rendering/gl/gl-renderer-util.ts":
/*!***************************************************!*\
  !*** ./src/core/rendering/gl/gl-renderer-util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlRendererUtil = void 0;
class GlRendererUtil {
    static clearScissor(context, sharedState) {
        if (sharedState.scissorRange != null) {
            context.disable(context.SCISSOR_TEST);
            sharedState.updateScissorRange(null);
        }
    }
    static scissor(context, sharedState, range) {
        if (sharedState.scissorRange == null) {
            context.enable(context.SCISSOR_TEST);
            sharedState.updateScissorRange(range);
        }
        // scissor and viewport start in the bottom left
        context.scissor(range.getXMin() | 0, range.getYMin() | 0, 1 + range.getXRange() | 0, 1 + range.getYRange() | 0);
    }
}
exports.GlRendererUtil = GlRendererUtil;


/***/ }),

/***/ "./src/core/rendering/gl/gl-renderer.ts":
/*!**********************************************!*\
  !*** ./src/core/rendering/gl/gl-renderer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlRenderer = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_entity_renderer_provider_1 = __webpack_require__(/*! ./entity-renderer/gl-entity-renderer-provider */ "./src/core/rendering/gl/entity-renderer/gl-entity-renderer-provider.ts");
const gl_renderer_factory_1 = __webpack_require__(/*! ./gl-renderer-factory */ "./src/core/rendering/gl/gl-renderer-factory.ts");
const gl_renderer_util_1 = __webpack_require__(/*! ./gl-renderer-util */ "./src/core/rendering/gl/gl-renderer-util.ts");
const developer_error_localization_1 = __webpack_require__(/*! ../../errors/developer-error-localization */ "./src/core/errors/developer-error-localization.ts");
const composite_graphics_component_1 = __webpack_require__(/*! ../../components/composite-graphics-component */ "./src/core/components/composite-graphics-component.ts");
const empty_gl_program_specification_1 = __webpack_require__(/*! ./shaders/empty-gl-program-specification */ "./src/core/rendering/gl/shaders/empty-gl-program-specification.ts");
const gl_renderer_shared_state_1 = __webpack_require__(/*! ./gl-renderer-shared-state */ "./src/core/rendering/gl/gl-renderer-shared-state.ts");
class GlRenderer {
    constructor(context, options, renderContextFactory, callbacks, sharedState) {
        this.graphicsComponents = new Map();
        this.callbacks = {
            onBeforePlotDraw: (context, plotDimensions) => {
                gl_renderer_util_1.GlRendererUtil.scissor(context, this.sharedState, plotDimensions.pixelArea.wholeRange);
                context.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
                context.clear(this.clearBit);
            },
            onAfterPlotDraw() {
                // no action needed
            },
        };
        if (callbacks != null) {
            rc_js_util_1._Dictionary.extend(this.callbacks, callbacks);
        }
        this.sharedState = sharedState;
        this.context = context;
        this.entityRendererProvider = new gl_entity_renderer_provider_1.GlEntityRendererProvider();
        this.entityRendererFactory = renderContextFactory;
        rc_js_util_1._Array.forEach(options.onCreate.featuresToEnable, feature => this.context.enable(this.context[feature]));
        this.clearBit = options.onNewFrame.bufferBitsToClear.reduce((clearBit, flagName) => clearBit | this.context[flagName], 0);
        this.clearColor = options.onNewFrame.clearWithColor;
    }
    static createOne(context, options, localizations = developer_error_localization_1.developerErrorLocalization, callbacks) {
        if (context == null) {
            return null;
        }
        const sharedState = new gl_renderer_shared_state_1.GlRendererSharedState(context.getParameter(context.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
        const factory = gl_renderer_factory_1.GlRendererFactory.createOne(context, options.onCreate.requiredExtensionsToGet, localizations, sharedState);
        if (factory == null) {
            return null;
        }
        return new GlRenderer(context, options, factory, callbacks, sharedState);
    }
    onBeforePlotDraw(plot, canvasDims) {
        this.sharedState.onNewFrame();
        this.callbacks.onBeforePlotDraw(this.context, plot.plotDimensionsOBL, canvasDims);
    }
    onAfterPlotDraw() {
        this.callbacks.onAfterPlotDraw(this.context);
    }
    createCompositeGraphicsComponent(graphicsComp) {
        const spec = empty_gl_program_specification_1.emptyGlProgramSpecification;
        return new composite_graphics_component_1.CompositeGraphicsComponent(spec, graphicsComp);
    }
}
exports.GlRenderer = GlRenderer;


/***/ }),

/***/ "./src/core/rendering/gl/gl-shader.ts":
/*!********************************************!*\
  !*** ./src/core/rendering/gl/gl-shader.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlShader = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class GlShader {
    constructor(source, 
    /**
     * Absence indicates version agnostic.
     */
    requiredLanguageVersion) {
        this.source = source;
        this.requiredLanguageVersion = requiredLanguageVersion;
    }
    static getShaderFlag(flagName, value) {
        return [`#define `, flagName, value ? "true" : "false", `\n`].join(" ");
    }
    static getShaderInt(flagName, value) {
        return [`#define `, flagName, value, `\n`].join(" ");
    }
    static combineShaders(shaders) {
        let version = -1;
        for (let i = 0, iEnd = shaders.length; i < iEnd; ++i) {
            const shader = shaders[i];
            if (shader.requiredLanguageVersion != null && shader.requiredLanguageVersion > version) {
                version = shader.requiredLanguageVersion;
            }
        }
        const source = rc_js_util_1._Array
            .map(shaders, shader => shader.source)
            .join("\n");
        return new GlShader(source, version === -1 ? undefined : version);
    }
}
exports.GlShader = GlShader;


/***/ }),

/***/ "./src/core/rendering/gl/shaders/dummy-gl-program-specification.ts":
/*!*************************************************************************!*\
  !*** ./src/core/rendering/gl/shaders/dummy-gl-program-specification.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dummyGlProgramSpecification = void 0;
const gl_program_specification_1 = __webpack_require__(/*! ../gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const dummy_shader_1 = __webpack_require__(/*! ./dummy-shader */ "./src/core/rendering/gl/shaders/dummy-shader.ts");
/**
 * @internal
 */
exports.dummyGlProgramSpecification = new gl_program_specification_1.GlProgramSpecification(dummy_shader_1.dummyShader, dummy_shader_1.dummyShader);


/***/ }),

/***/ "./src/core/rendering/gl/shaders/dummy-shader.ts":
/*!*******************************************************!*\
  !*** ./src/core/rendering/gl/shaders/dummy-shader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dummyShader = void 0;
const gl_shader_1 = __webpack_require__(/*! ../gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
/**
 * @internal
 */
// @formatter:off
// language=GLSL
exports.dummyShader = new gl_shader_1.GlShader(`
void main()
{
}
`);
// @formatter:on


/***/ }),

/***/ "./src/core/rendering/gl/shaders/empty-gl-program-specification.ts":
/*!*************************************************************************!*\
  !*** ./src/core/rendering/gl/shaders/empty-gl-program-specification.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emptyGlProgramSpecification = void 0;
const gl_program_specification_1 = __webpack_require__(/*! ../gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const empty_shader_1 = __webpack_require__(/*! ./empty-shader */ "./src/core/rendering/gl/shaders/empty-shader.ts");
/**
 * @internal
 */
exports.emptyGlProgramSpecification = new gl_program_specification_1.GlProgramSpecification(empty_shader_1.emptyShader, empty_shader_1.emptyShader);


/***/ }),

/***/ "./src/core/rendering/gl/shaders/empty-shader.ts":
/*!*******************************************************!*\
  !*** ./src/core/rendering/gl/shaders/empty-shader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emptyShader = void 0;
const gl_shader_1 = __webpack_require__(/*! ../gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
/**
 * @internal
 */
exports.emptyShader = new gl_shader_1.GlShader("");


/***/ }),

/***/ "./src/core/rendering/gl/shaders/generate2-lined-normal-shader.ts":
/*!************************************************************************!*\
  !*** ./src/core/rendering/gl/shaders/generate2-lined-normal-shader.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generate2LinedNormalShader = void 0;
const gl_shader_1 = __webpack_require__(/*! ../gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
/**
 * @public
 * Generates normal to a line. If the points `a` & `b` are the same it instead
 * returns `fallback`.
 */
exports.generate2LinedNormalShader = new gl_shader_1.GlShader(
// @formatter:off
// language=GLSL
`
#ifndef NORMAL_2D_GENERATOR

#define NORMAL_2D_GENERATOR 1
/* === normal generator === */
vec2 generate2dLineNormal(in vec2 a, in vec2 b, in vec2 fallback)
{
    vec2 difference = b - a;
    vec2 absoluteDifference = abs(difference);
    float isNonZero = sign(absoluteDifference.x + absoluteDifference.y);
    difference = mix(fallback, difference, isNonZero);

    return normalize(vec2(difference.y, -difference.x));
}

#endif
`);


/***/ }),

/***/ "./src/core/rendering/gl/shaders/mat2-multiply-value-shader.ts":
/*!*********************************************************************!*\
  !*** ./src/core/rendering/gl/shaders/mat2-multiply-value-shader.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mat2MultiplyValueShader = void 0;
const gl_shader_1 = __webpack_require__(/*! ../gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
/**
 * @public
 * Pad float up to vec2 up with additional 1 and multiply.
 */
// language=GLSL
exports.mat2MultiplyValueShader = new gl_shader_1.GlShader(
// @formatter:off
`
#ifndef GET_MAT2_MULTIPLY_VALUE

#define GET_MAT2_MULTIPLY_VALUE 1

float mat2MultiplyValue(mat2 transform, float value)
{
    return (transform * vec2(value, 1)).x;
}

#endif
`);


/***/ }),

/***/ "./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts":
/*!********************************************************************!*\
  !*** ./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mat3MultiplyVec2Shader = void 0;
const gl_shader_1 = __webpack_require__(/*! ../gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
/**
 * @public
 * Pad vec2 up with additional 1 and multiply.
 */
// language=GLSL
exports.mat3MultiplyVec2Shader = new gl_shader_1.GlShader(
// @formatter:off
`
#ifndef GET_MAT3_MULTIPLY_VEC2

#define GET_MAT3_MULTIPLY_VEC2 1

vec2 mat3MultiplyVec2(mat3 transform, vec2 coords)
{
    return (transform * vec3(coords, 1)).xy;
}

#endif
`);


/***/ }),

/***/ "./src/core/rendering/gl/shaders/unpack-color-shader.ts":
/*!**************************************************************!*\
  !*** ./src/core/rendering/gl/shaders/unpack-color-shader.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unpackColorShader = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_shader_1 = __webpack_require__(/*! ../gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
/**
 * @public
 * Takes a float32 which is used to store a packed int24 storing RGB.
 */
exports.unpackColorShader = new gl_shader_1.GlShader(
// @formatter:off
// language=GLSL
`
#ifndef FLOAT_COLOR_PACKER

#define FLOAT_COLOR_PACKER 1

/* === color unpacker (float) === */
const highp int ERgbaShift_R = ${rc_js_util_1.ERgbaShift.R};
const highp int ERgbaShift_G = ${rc_js_util_1.ERgbaShift.G};
const highp int ERgbaShift_B = ${rc_js_util_1.ERgbaShift.B};

const highp int ERgbaMasks_R = 0xFF << ERgbaShift_R;
const highp int ERgbaMasks_G = 0xFF << ERgbaShift_G;
const highp int ERgbaMasks_B = 0xFF << ERgbaShift_B;

mediump vec4 unpackColor(highp float packedColor)
{
    highp int tmp = int(packedColor);
    const highp float sf = 1./255.;

    return vec4(
        float(((tmp & ERgbaMasks_R) >> ERgbaShift_R) & 0xFF) * sf,
        float(((tmp & ERgbaMasks_G) >> ERgbaShift_G) & 0xFF) * sf,
        float(((tmp & ERgbaMasks_B) >> ERgbaShift_B) & 0xFF) * sf,
        1.
    );
}

#endif
`, 
// @formatter:on
300);


/***/ }),

/***/ "./src/core/rendering/gl/textures/gl-texture2d.ts":
/*!********************************************************!*\
  !*** ./src/core/rendering/gl/textures/gl-texture2d.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlTexture2d = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Currently only supports canvas as texture.
 */
class GlTexture2d {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.uniformLocation = null;
        this.texture = null;
        this.isDirty = true;
        this.textureUnit = null;
    }
    initialize(entityRenderer) {
        // FIXME this doesn't allow sharing of units where we need more than the max units
        this.textureUnit = entityRenderer.sharedState.claimTextureUnit();
        const context = entityRenderer.context;
        context.activeTexture(context.TEXTURE0 + this.textureUnit);
        this.uniformLocation = context.getUniformLocation(entityRenderer.program, this.name);
        this.texture = context.createTexture();
        context.bindTexture(context.TEXTURE_2D, this.texture);
        // FIXME this should be configurable
        context.pixelStorei(context.UNPACK_FLIP_Y_WEBGL, false);
        context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.NEAREST);
        context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.NEAREST);
        context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.CLAMP_TO_EDGE);
        context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.CLAMP_TO_EDGE);
    }
    updateData(canvas) {
        this.data = canvas;
        this.isDirty = true;
    }
    bind(entityRenderer) {
        if (this.data == null || this.textureUnit == null) {
            throw rc_js_util_1._Production.error("expected data to be initialized");
        }
        if (this.isDirty) {
            const context = entityRenderer.context;
            context.activeTexture(context.TEXTURE0 + this.textureUnit);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, this.data);
            this.isDirty = false;
        }
    }
}
exports.GlTexture2d = GlTexture2d;


/***/ }),

/***/ "./src/core/rendering/gl/uniforms/a-gl-uniform-array.ts":
/*!**************************************************************!*\
  !*** ./src/core/rendering/gl/uniforms/a-gl-uniform-array.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AGlUniformArray = void 0;
/**
 * @public
 * Wrapper for webgl uniform.
 */
class AGlUniformArray {
    constructor(name, data, transpose = false) {
        this.name = name;
        this.data = data;
        this.transpose = transpose;
        this.uniformLocation = null;
    }
    initialize(entityRenderer) {
        this.uniformLocation = entityRenderer.context.getUniformLocation(entityRenderer.program, this.name);
    }
    setData(data) {
        this.data = data;
    }
}
exports.AGlUniformArray = AGlUniformArray;


/***/ }),

/***/ "./src/core/rendering/gl/uniforms/a-gl-uniform-value.ts":
/*!**************************************************************!*\
  !*** ./src/core/rendering/gl/uniforms/a-gl-uniform-value.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AGlUniformValue = void 0;
/**
 * @public
 * wrapper for a single uniform value.
 */
class AGlUniformValue {
    constructor(name, data) {
        this.name = name;
        this.data = data;
        this.uniformLocation = null;
    }
    initialize(entityRenderer) {
        this.uniformLocation = entityRenderer.context.getUniformLocation(entityRenderer.program, this.name);
    }
    setData(data) {
        this.data = data;
    }
}
exports.AGlUniformValue = AGlUniformValue;


/***/ }),

/***/ "./src/core/rendering/gl/uniforms/gl-float-uniform.ts":
/*!************************************************************!*\
  !*** ./src/core/rendering/gl/uniforms/gl-float-uniform.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlFloatUniform = void 0;
const a_gl_uniform_value_1 = __webpack_require__(/*! ./a-gl-uniform-value */ "./src/core/rendering/gl/uniforms/a-gl-uniform-value.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * wrapper for a single uniform float.
 */
class GlFloatUniform extends a_gl_uniform_value_1.AGlUniformValue {
    bind(renderer) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            if (this.uniformLocation == null) {
                console.debug(`failed to bind uniform: ${this.name}`);
            }
        });
        renderer.context.uniform1f(this.uniformLocation, this.data);
    }
}
exports.GlFloatUniform = GlFloatUniform;


/***/ }),

/***/ "./src/core/rendering/gl/uniforms/gl-mat2-uniform.ts":
/*!***********************************************************!*\
  !*** ./src/core/rendering/gl/uniforms/gl-mat2-uniform.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlMat2Uniform = void 0;
const a_gl_uniform_array_1 = __webpack_require__(/*! ./a-gl-uniform-array */ "./src/core/rendering/gl/uniforms/a-gl-uniform-array.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Wrapper for webgl float matrix2 uniform.
 */
class GlMat2Uniform extends a_gl_uniform_array_1.AGlUniformArray {
    bind(renderer) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            if (this.uniformLocation == null) {
                console.debug(`failed to bind uniform: ${this.name}`);
            }
        });
        const data = this.data;
        renderer.context.uniformMatrix2fv(this.uniformLocation, this.transpose, data);
    }
}
exports.GlMat2Uniform = GlMat2Uniform;


/***/ }),

/***/ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts":
/*!***********************************************************!*\
  !*** ./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlMat3Uniform = void 0;
const a_gl_uniform_array_1 = __webpack_require__(/*! ./a-gl-uniform-array */ "./src/core/rendering/gl/uniforms/a-gl-uniform-array.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Wrapper for webgl float matrix3 uniform.
 */
class GlMat3Uniform extends a_gl_uniform_array_1.AGlUniformArray {
    bind(renderer) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            if (this.uniformLocation == null) {
                console.debug(`failed to bind uniform: ${this.name}`);
            }
        });
        const data = this.data;
        renderer.context.uniformMatrix3fv(this.uniformLocation, this.transpose, data);
    }
}
exports.GlMat3Uniform = GlMat3Uniform;


/***/ }),

/***/ "./src/core/rendering/gl/uniforms/gl-mat4-uniform.ts":
/*!***********************************************************!*\
  !*** ./src/core/rendering/gl/uniforms/gl-mat4-uniform.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlMat4Uniform = void 0;
const a_gl_uniform_array_1 = __webpack_require__(/*! ./a-gl-uniform-array */ "./src/core/rendering/gl/uniforms/a-gl-uniform-array.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Wrapper for webgl float matrix4 uniform.
 */
class GlMat4Uniform extends a_gl_uniform_array_1.AGlUniformArray {
    bind(renderer) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            if (this.uniformLocation == null) {
                console.debug(`failed to bind uniform: ${this.name}`);
            }
        });
        const data = this.data;
        renderer.context.uniformMatrix4fv(this.uniformLocation, this.transpose, data);
    }
}
exports.GlMat4Uniform = GlMat4Uniform;


/***/ }),

/***/ "./src/core/rendering/graphics-sub-components.ts":
/*!*******************************************************!*\
  !*** ./src/core/rendering/graphics-sub-components.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphicsSubComponents = void 0;
class GraphicsSubComponents {
    constructor(graphicsComponents) {
        this.graphicsComponents = graphicsComponents;
        this.entityRenderers = [];
    }
    getSubComponents() {
        return this.graphicsComponents;
    }
    setEntityRenderers(entityRenderers) {
        this.entityRenderers = entityRenderers;
    }
}
exports.GraphicsSubComponents = GraphicsSubComponents;


/***/ }),

/***/ "./src/core/sprites/sprite-lookup.ts":
/*!*******************************************!*\
  !*** ./src/core/sprites/sprite-lookup.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpriteLookup = void 0;
/**
 * @public
 * Store for sprite positions.
 */
class SpriteLookup {
    static createOne(imageCount) {
        // todo jack27: halves might be required given the borky nature of canvas, can we use ints for gl?
        return new Float32Array(imageCount * 4);
    }
    static toTypedArray(lookup) {
        return lookup;
    }
    static setSpriteAtIndex(sprite, index, x, y, width, height) {
        index *= 4;
        sprite[index] = x;
        sprite[index + 1] = y;
        sprite[index + 2] = width;
        sprite[index + 3] = height;
    }
    static getXAtIndex(sprite, imageIndex) {
        return sprite[imageIndex * 4];
    }
    static getYAtIndex(sprite, imageIndex) {
        return sprite[imageIndex * 4 + 1];
    }
    static getWidthAtIndex(sprite, imageIndex) {
        return sprite[imageIndex * 4 + 2];
    }
    static getHeightAtIndex(sprite, imageIndex) {
        return sprite[imageIndex * 4 + 3];
    }
}
exports.SpriteLookup = SpriteLookup;


/***/ }),

/***/ "./src/core/sprites/sprite-provider.ts":
/*!*********************************************!*\
  !*** ./src/core/sprites/sprite-provider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpriteProvider = void 0;
class SpriteProvider {
    constructor(attachPoint) {
        this.canvasElement = attachPoint.addHiddenElement("axis-labels", "canvas");
        this.context = this.initializeContext();
    }
    upscaleCanvas(width, height) {
        if (height > this.canvasElement.height) {
            height = SpriteProvider.nearestPowerOf2(height);
            this.canvasElement.height = height;
        }
        if (width > this.canvasElement.width) {
            width = SpriteProvider.nearestPowerOf2(width);
            this.canvasElement.width = width;
        }
    }
    getCanvas() {
        return this.canvasElement;
    }
    getContext() {
        return this.context;
    }
    initializeContext() {
        const context = this.canvasElement.getContext("2d");
        if (context == null) {
            throw new Error("failed to initialize axis canvas");
        }
        return context;
    }
    static nearestPowerOf2(value) {
        return 1 << (32 - Math.clz32(value));
    }
}
exports.SpriteProvider = SpriteProvider;


/***/ }),

/***/ "./src/core/templating/canvas-dimensions.ts":
/*!**************************************************!*\
  !*** ./src/core/templating/canvas-dimensions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasDimensions = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const full_clip_space_range2d_1 = __webpack_require__(/*! ../transforms/full-clip-space-range2d */ "./src/core/transforms/full-clip-space-range2d.ts");
const full_clip_space_size2d_1 = __webpack_require__(/*! ../transforms/full-clip-space-size2d */ "./src/core/transforms/full-clip-space-size2d.ts");
const reverse_y_full_clip_space_range2d_1 = __webpack_require__(/*! ../transforms/reverse-y-full-clip-space-range2d */ "./src/core/transforms/reverse-y-full-clip-space-range2d.ts");
const canvas_transforms_1 = __webpack_require__(/*! ./canvas-transforms */ "./src/core/templating/canvas-transforms.ts");
class CanvasDimensions {
    constructor(dpr, cssDims, pixelDims, boundingRect) {
        this.dpr = dpr;
        this.cssDims = cssDims;
        this.pixelDims = pixelDims;
        this.boundingRect = boundingRect;
        this.transforms = new canvas_transforms_1.CanvasTransforms(full_clip_space_range2d_1.fullClipSpaceRange2d.getRangeTransform(pixelDims), full_clip_space_range2d_1.fullClipSpaceRange2d.getRangeTransform(cssDims), pixelDims.getRangeTransform(full_clip_space_range2d_1.fullClipSpaceRange2d), cssDims.getRangeTransform(full_clip_space_range2d_1.fullClipSpaceRange2d));
        this.reverseYTransforms = new canvas_transforms_1.CanvasTransforms(reverse_y_full_clip_space_range2d_1.reverseYFullClipSpaceRange2d.getRangeTransform(pixelDims), reverse_y_full_clip_space_range2d_1.reverseYFullClipSpaceRange2d.getRangeTransform(cssDims), pixelDims.getRangeTransform(reverse_y_full_clip_space_range2d_1.reverseYFullClipSpaceRange2d), cssDims.getRangeTransform(reverse_y_full_clip_space_range2d_1.reverseYFullClipSpaceRange2d));
        this.pixelToClipSize = pixelDims.getRangeTransform(full_clip_space_size2d_1.fullClipSpaceSize2d);
    }
    static createDefault() {
        return new CanvasDimensions(1, rc_js_util_1.Range2d.f32.factory.createOne(0, 300, 0, 300), rc_js_util_1.Range2d.f32.factory.createOne(0, 300, 0, 300), rc_js_util_1.Range2d.f32.factory.createOne(0, 300, 0, 300));
    }
    clone() {
        return new CanvasDimensions(this.dpr, this.pixelDims, this.pixelDims, this.boundingRect);
    }
}
exports.CanvasDimensions = CanvasDimensions;


/***/ }),

/***/ "./src/core/templating/canvas-transforms.ts":
/*!**************************************************!*\
  !*** ./src/core/templating/canvas-transforms.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasTransforms = void 0;
class CanvasTransforms {
    constructor(clipToPixel, clipToCss, pixelToClip, cssToClip) {
        this.clipToPixel = clipToPixel;
        this.clipToCss = clipToCss;
        this.pixelToClip = pixelToClip;
        this.cssToClip = cssToClip;
    }
}
exports.CanvasTransforms = CanvasTransforms;


/***/ }),

/***/ "./src/core/templating/graph-attach-point-provider.ts":
/*!************************************************************!*\
  !*** ./src/core/templating/graph-attach-point-provider.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphAttachPointProvider = void 0;
const chartMarkup = `
<div class="ecs-chart">
    <canvas class="ecs-canvas"></canvas>
    <div class="ecs-hidden-element"></div>
</div>
`;
class GraphAttachPointProvider {
    constructor(attachPointElement, template = chartMarkup) {
        this.attachPointElement = attachPointElement;
        attachPointElement.innerHTML = template;
    }
    getCanvasElement() {
        return this.attachPointElement.getElementsByClassName("ecs-canvas")[0];
    }
    getWrapperElement() {
        return this.attachPointElement.getElementsByClassName("ecs-chart")[0];
    }
    getHiddenElement() {
        return this.attachPointElement.getElementsByClassName("ecs-hidden-element")[0];
    }
}
exports.GraphAttachPointProvider = GraphAttachPointProvider;


/***/ }),

/***/ "./src/core/templating/graph-attach-point.ts":
/*!***************************************************!*\
  !*** ./src/core/templating/graph-attach-point.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphAttachPoint = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const e_mouse_event_type_1 = __webpack_require__(/*! ../eventing/user-interaction/internal-events/e-mouse-event-type */ "./src/core/eventing/user-interaction/internal-events/e-mouse-event-type.ts");
const e_pointer_event_type_1 = __webpack_require__(/*! ../eventing/user-interaction/internal-events/e-pointer-event-type */ "./src/core/eventing/user-interaction/internal-events/e-pointer-event-type.ts");
const canvas_dimensions_1 = __webpack_require__(/*! ./canvas-dimensions */ "./src/core/templating/canvas-dimensions.ts");
const on_canvas_pointer_event_1 = __webpack_require__(/*! ../eventing/events/on-canvas-pointer-event */ "./src/core/eventing/events/on-canvas-pointer-event.ts");
const on_canvas_mouse_event_1 = __webpack_require__(/*! ../eventing/events/on-canvas-mouse-event */ "./src/core/eventing/events/on-canvas-mouse-event.ts");
class GraphAttachPoint extends rc_js_util_1.AOnDestroy {
    constructor(attachPointProvider, chartEventService, chartConfig, $window = window) {
        super();
        this.chartEventService = chartEventService;
        this.chartConfig = chartConfig;
        this.$window = $window;
        this.canvasDims = canvas_dimensions_1.CanvasDimensions.createDefault();
        this.hiddenElements = {};
        this.chartWrapper = attachPointProvider.getWrapperElement();
        this.hiddenElement = attachPointProvider.getHiddenElement();
        this.canvasElement = attachPointProvider.getCanvasElement();
        this.registerEventHandlers();
    }
    resizeCanvas() {
        DEBUG_MODE && rc_js_util_1._Debug.assert(this.canvasElement.clientWidth > 0 && this.canvasElement.clientHeight > 0, "probably resized while off screen");
        const w = this.canvasElement.clientWidth | 0;
        const h = this.canvasElement.clientHeight | 0;
        if (this.canvasDims.cssDims.getXMax() === w && this.canvasDims.cssDims.getYMax() === h) {
            return this.canvasDims;
        }
        // update dims
        const dpr = this.$window.devicePixelRatio;
        const boundingRect = this.canvasElement.getBoundingClientRect();
        this.canvasDims = new canvas_dimensions_1.CanvasDimensions(dpr, rc_js_util_1.Range2d.f32.factory.createOne(0, w | 0, 0, h | 0), rc_js_util_1.Range2d.f32.factory.createOne(0, (w * dpr) | 0, 0, (h * dpr) | 0), rc_js_util_1.Range2d.f32.factory.createOne(boundingRect.left, boundingRect.right, boundingRect.top, boundingRect.bottom));
        // synchronize the canvas' dimensions to the css size
        this.canvasElement.width = this.canvasDims.pixelDims.getXRange();
        this.canvasElement.height = this.canvasDims.pixelDims.getYRange();
        return this.canvasDims;
    }
    addHiddenElement(className, tagName) {
        const storedElement = this.hiddenElements[className];
        if (storedElement != null) {
            return storedElement;
        }
        else {
            const element = this.hiddenElements[className] = this.$window.document.createElement(tagName);
            element.classList.add(className);
            this.hiddenElement.appendChild(element);
            return element;
        }
    }
    removeHiddenElement(className) {
        const element = this.hiddenElement.getElementsByClassName(className)[0];
        if (element == null) {
            return;
        }
        this.hiddenElement.removeChild(element);
    }
    registerEventHandlers() {
        if (this.chartConfig.interactionOptions.disableAllInteraction) {
            return;
        }
        // mouse events
        if (this.chartConfig.interactionOptions.scrollZooms) {
            this.onDestroyListener.initializeListener(() => {
                const onEvent = ($event) => {
                    $event.stopPropagation();
                    $event.preventDefault();
                    on_canvas_mouse_event_1.OnCanvasMouseEvent.emit(this.chartEventService, e_mouse_event_type_1.EMouseEventType.Wheel, $event);
                };
                this.chartConfig.changeDetectionConfig.runOutsideOfChangeDetection(() => {
                    this.canvasElement.addEventListener("wheel", onEvent, { passive: false });
                });
                return () => this.canvasElement.removeEventListener("wheel", onEvent);
            });
        }
        if (this.chartConfig.interactionOptions.disableLongPressContext) {
            this.onDestroyListener.initializeListener(() => {
                const onEvent = ($event) => {
                    $event.stopPropagation();
                    $event.preventDefault();
                };
                this.chartConfig.changeDetectionConfig.runOutsideOfChangeDetection(() => {
                    this.canvasElement.addEventListener("contextmenu", onEvent, { passive: false });
                });
                return () => this.canvasElement.removeEventListener("contextmenu", onEvent);
            });
        }
        // pointer events
        this.onDestroyListener.initializeListener(() => {
            const onEvent = ($event) => on_canvas_pointer_event_1.OnCanvasPointerEvent.emit(this.chartEventService, e_pointer_event_type_1.EPointerEventType.Out, $event);
            this.chartConfig.changeDetectionConfig.runOutsideOfChangeDetection(() => {
                this.canvasElement.addEventListener("pointerout", onEvent, { passive: true });
            });
            return () => this.canvasElement.removeEventListener("pointerout", onEvent);
        });
        this.onDestroyListener.initializeListener(() => {
            const onEvent = ($event) => on_canvas_pointer_event_1.OnCanvasPointerEvent.emit(this.chartEventService, e_pointer_event_type_1.EPointerEventType.Down, $event);
            this.chartConfig.changeDetectionConfig.runOutsideOfChangeDetection(() => {
                this.canvasElement.addEventListener("pointerdown", onEvent, { passive: true });
            });
            return () => this.canvasElement.removeEventListener("pointerdown", onEvent);
        });
        this.onDestroyListener.initializeListener(() => {
            const onEvent = ($event) => on_canvas_pointer_event_1.OnCanvasPointerEvent.emit(this.chartEventService, e_pointer_event_type_1.EPointerEventType.Up, $event);
            this.chartConfig.changeDetectionConfig.runOutsideOfChangeDetection(() => {
                this.canvasElement.addEventListener("pointerup", onEvent, { passive: true });
            });
            return () => this.canvasElement.removeEventListener("pointerup", onEvent);
        });
        this.onDestroyListener.initializeListener(() => {
            const onEvent = ($event) => on_canvas_pointer_event_1.OnCanvasPointerEvent.emit(this.chartEventService, e_pointer_event_type_1.EPointerEventType.Move, $event);
            this.chartConfig.changeDetectionConfig.runOutsideOfChangeDetection(() => {
                this.canvasElement.addEventListener("pointermove", onEvent, { passive: true });
            });
            return () => this.canvasElement.removeEventListener("pointermove", onEvent);
        });
    }
}
exports.GraphAttachPoint = GraphAttachPoint;


/***/ }),

/***/ "./src/core/transforms/full-clip-space-range2d.ts":
/*!********************************************************!*\
  !*** ./src/core/transforms/full-clip-space-range2d.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fullClipSpaceRange2d = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
exports.fullClipSpaceRange2d = rc_js_util_1.Range2d.f32.factory.createOne(-1, 1, -1, 1);


/***/ }),

/***/ "./src/core/transforms/full-clip-space-size2d.ts":
/*!*******************************************************!*\
  !*** ./src/core/transforms/full-clip-space-size2d.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fullClipSpaceSize2d = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
exports.fullClipSpaceSize2d = rc_js_util_1.Range2d.f32.factory.createOne(0, 2, 0, 2);


/***/ }),

/***/ "./src/core/transforms/reverse-y-full-clip-space-range2d.ts":
/*!******************************************************************!*\
  !*** ./src/core/transforms/reverse-y-full-clip-space-range2d.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reverseYFullClipSpaceRange2d = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
exports.reverseYFullClipSpaceRange2d = rc_js_util_1.Range2d.f32.factory.createOne(-1, 1, 1, -1);


/***/ }),

/***/ "./src/core/update/entity-update-grouping.ts":
/*!***************************************************!*\
  !*** ./src/core/update/entity-update-grouping.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityUpdateGrouping = void 0;
class EntityUpdateGrouping {
    constructor(graphicsComponent, entityRenderer) {
        this.graphicsComponent = graphicsComponent;
        this.entityRenderer = entityRenderer;
    }
}
exports.EntityUpdateGrouping = EntityUpdateGrouping;


/***/ }),

/***/ "./src/core/update/frame-provider.ts":
/*!*******************************************!*\
  !*** ./src/core/update/frame-provider.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrameProvider = void 0;
const interaction_handler_updater_1 = __webpack_require__(/*! ./interaction-handler-updater */ "./src/core/update/interaction-handler-updater.ts");
class FrameProvider {
    constructor(drawCallback, updateInteractionHandlersCallback, rollupTime, $window = window) {
        this.drawCallback = drawCallback;
        this.updateInteractionHandlersCallback = updateInteractionHandlersCallback;
        this.$window = $window;
        this.onRafCallback = () => {
            this.plotsToUpdate.forEach((plot) => {
                this.drawCallback(plot);
                this.interactionStateUpdater.addPlotToUpdateQueue(plot);
            });
            this.nextFrame = null;
            this.interactionStateUpdater.updateInteractionHandlers();
            this.plotsToUpdate.clear();
        };
        this.plotsToUpdate = new Set();
        this.nextFrame = null;
        this.interactionStateUpdater = new interaction_handler_updater_1.InteractionHandlerUpdater(this.updateInteractionHandlersCallback, rollupTime);
    }
    updateOnNextFrame(plot) {
        this.plotsToUpdate.add(plot);
        if (this.nextFrame == null) {
            this.nextFrame = this.$window.requestAnimationFrame(this.onRafCallback);
        }
    }
    cancelNextFrame() {
        if (this.nextFrame == null) {
            return;
        }
        this.$window.cancelAnimationFrame(this.nextFrame);
        this.nextFrame = null;
        this.plotsToUpdate.clear();
        this.interactionStateUpdater.cancelAll();
    }
}
exports.FrameProvider = FrameProvider;


/***/ }),

/***/ "./src/core/update/interaction-handler-updater.ts":
/*!********************************************************!*\
  !*** ./src/core/update/interaction-handler-updater.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionHandlerUpdater = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class InteractionHandlerUpdater {
    constructor(updateInteractionHandlersCallback, rollupTime) {
        this.updateInteractionHandlersCallback = updateInteractionHandlersCallback;
        this.rollupTime = rollupTime;
        this.updateInteractionHandlersImpl = rc_js_util_1._Fp.debounce(this.rollupTime, false, () => {
            if (this.incrementalUpdater.isUpdating) {
                this.incrementalUpdater.resume();
            }
            else {
                this.incrementalUpdater.beginUpdate();
            }
        });
        this.incrementalUpdater = new rc_js_util_1.IncrementalUpdater(this);
        this.plotsToUpdate = new Set();
        this.nextPlotsToUpdate = new Set();
    }
    addPlotToUpdateQueue(plot) {
        if (this.incrementalUpdater.isUpdating) {
            this.plotsToUpdate.delete(plot);
            this.nextPlotsToUpdate.add(plot);
        }
        else {
            this.plotsToUpdate.add(plot);
        }
    }
    updateInteractionHandlers() {
        if (this.incrementalUpdater.isUpdating) {
            this.incrementalUpdater.suspend();
        }
        this.updateInteractionHandlersImpl();
    }
    cancelAll() {
        this.plotsToUpdate.clear();
        this.nextPlotsToUpdate.clear();
        this.incrementalUpdater.cancel();
    }
    *incrementallyUpdate() {
        var _a;
        while (true) {
            for (const plot of this.plotsToUpdate) {
                const it = this.updateInteractionHandlersCallback(plot);
                while (!((_a = it.next().done) !== null && _a !== void 0 ? _a : false)) {
                    yield;
                    if (!this.plotsToUpdate.has(plot)) {
                        break;
                    }
                }
            }
            if (this.nextPlotsToUpdate.size === 0) {
                break;
            }
            else {
                this.swap();
            }
        }
        this.plotsToUpdate.clear();
    }
    swap() {
        const tmp = this.plotsToUpdate;
        this.plotsToUpdate = this.nextPlotsToUpdate;
        this.nextPlotsToUpdate = tmp;
        this.nextPlotsToUpdate.clear();
    }
}
exports.InteractionHandlerUpdater = InteractionHandlerUpdater;


/***/ }),

/***/ "./src/core/update/render-list.ts":
/*!****************************************!*\
  !*** ./src/core/update/render-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderList = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class RenderList {
    constructor(updateGroupHooks) {
        this.updateGroupHooks = updateGroupHooks;
        this.groupings = [];
        this.entitiesInGroup = [];
        this.currentGrouping = null;
        this.uniqueEntitiesSet = new Set();
    }
    addGrouping(grouping) {
        this.currentGrouping = [grouping, []];
        this.groupings.push(this.currentGrouping);
    }
    addEntity(entity) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(this.currentGrouping != null, "expected to find grouping");
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.currentGrouping[1].push(entity);
        this.uniqueEntitiesSet.add(entity);
    }
    build() {
        this.entitiesInGroup = rc_js_util_1._Set.valuesToArray(this.uniqueEntitiesSet);
        this.uniqueEntitiesSet.clear();
    }
}
exports.RenderList = RenderList;


/***/ }),

/***/ "./src/extract/generate-cricle-geometry.ts":
/*!*************************************************!*\
  !*** ./src/extract/generate-cricle-geometry.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateCircleGeometry = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
function generateCircleGeometry(writeTo, range, rnd) {
    const increment = 2 * Math.PI / (writeTo.getLength() - 1);
    const xMin = range.getXMin();
    const yMin = range.getYMin();
    const sf = rc_js_util_1._Math.min(range.getXRange(), range.getYRange()) * rnd.getNext();
    for (let i = writeTo.getStart(); i < writeTo.getEnd(); ++i) {
        const step = increment * i;
        writeTo.setValue(i, writeTo.offsets.x, xMin + Math.cos(step) * sf);
        writeTo.setValue(i, writeTo.offsets.y, yMin + Math.sin(step) * sf);
    }
}
exports.generateCircleGeometry = generateCircleGeometry;


/***/ }),

/***/ "./src/extract/generate-linear-point-sizes.ts":
/*!****************************************************!*\
  !*** ./src/extract/generate-linear-point-sizes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateLinearPointSizes = void 0;
function generateLinearPointSizes(range, writeTo, sizeOffset) {
    const increment = (range.getY() - range.getX()) / (writeTo.getLength() - 1);
    const xMin = range.getX();
    for (let i = writeTo.getStart(), iEnd = writeTo.getEnd(); i < iEnd; ++i) {
        const x = xMin + increment * i;
        writeTo.setValue(i, sizeOffset, x);
    }
}
exports.generateLinearPointSizes = generateLinearPointSizes;


/***/ }),

/***/ "./src/extract/generate-linear-r-g-b-range.ts":
/*!****************************************************!*\
  !*** ./src/extract/generate-linear-r-g-b-range.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateLinearRGBRange = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
function generateLinearRGBRange(min, max, writeTo, colorOffset) {
    const _ERgbaShift = rc_js_util_1.ERgbaShift;
    const rStep = getColorStepSize(min, max, _ERgbaShift.R, writeTo.getLength() - 1);
    const gStep = getColorStepSize(min, max, _ERgbaShift.G, writeTo.getLength() - 1);
    const bStep = getColorStepSize(min, max, _ERgbaShift.B, writeTo.getLength() - 1);
    for (let i = writeTo.getStart(), iEnd = writeTo.getEnd(); i < iEnd; ++i) {
        let color = incrementColorChannel(min, _ERgbaShift.R, rStep * i);
        color = incrementColorChannel(color, _ERgbaShift.G, gStep * i);
        color = incrementColorChannel(color, _ERgbaShift.B, bStep * i);
        writeTo.setValue(i, colorOffset, color);
    }
}
exports.generateLinearRGBRange = generateLinearRGBRange;
function getColorStepSize(min, max, shift, stepCount) {
    const mask = 0xFF << shift;
    const range = ((max & mask) >>> shift) - ((min & mask) >>> shift);
    return range / stepCount;
}
function incrementColorChannel(color, shift, step) {
    const mask = 0xFF << shift;
    const channel = ((color & mask) >>> shift) + step;
    color &= ~mask;
    return color | (channel << shift);
}


/***/ }),

/***/ "./src/extract/get-test-plot-options.ts":
/*!**********************************************!*\
  !*** ./src/extract/get-test-plot-options.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTestPlotOptions = void 0;
const i_cartesian2d_plot_construction_options_1 = __webpack_require__(/*! ../plugins/cartesian2d/i-cartesian2d-plot-construction-options */ "./src/plugins/cartesian2d/i-cartesian2d-plot-construction-options.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const update_2d_group_1 = __webpack_require__(/*! ../plugins/cartesian2d/update-2d-group */ "./src/plugins/cartesian2d/update-2d-group.ts");
const sorted2d_update_strategy_1 = __webpack_require__(/*! ../plugins/cartesian2d/sorted2d-update-strategy */ "./src/plugins/cartesian2d/sorted2d-update-strategy.ts");
const scene2d_category_sorted_1 = __webpack_require__(/*! ../plugins/cartesian2d/scene2d-category-sorted */ "./src/plugins/cartesian2d/scene2d-category-sorted.ts");
const gutterOptions = {
    margins: rc_js_util_1.Margin2d.f32.factory.createOne(50, 10, 10, 20),
    unit: i_cartesian2d_plot_construction_options_1.EScreenUnit.CssPixel,
};
const axisOptions = new i_cartesian2d_plot_construction_options_1.Cartesian2dAxisOptions({
    fontFamilies: ["sans-serif"],
    fontSize: 12,
    maxWidth: 50,
    formatNumber: (value) => value.toPrecision(3),
    textColor: rc_js_util_1.RgbaColorPacker.packColor(240, 240, 240, 255),
    padding: 14,
});
const traceOptions = {
    traceColor: rc_js_util_1.RgbaColorPacker.packColor(0, 201, 201, 255),
    maxTraceCount: 5,
    traceLinePixelSize: 5,
};
function getTestPlotOptions(updateArgProvider, plotPosition, plotName, plotRange) {
    return new i_cartesian2d_plot_construction_options_1.CartesianPlotConstructionOptions({
        plotName: plotName,
        plotRange: plotRange,
        gutterConfig: gutterOptions,
        plotPosition: plotPosition,
        axisOptions: axisOptions,
        traceOptions: traceOptions,
        updateGroup: new update_2d_group_1.Update2dGroup(updateArgProvider),
        createUpdateStrategy: (plot, updateGroup) => {
            return new sorted2d_update_strategy_1.Sorted2dUpdateStrategy(plot, updateGroup, new scene2d_category_sorted_1.Scene2dCategorySorted(updateGroup));
        },
    });
}
exports.getTestPlotOptions = getTestPlotOptions;


/***/ }),

/***/ "./src/extract/populate-test-data.ts":
/*!*******************************************!*\
  !*** ./src/extract/populate-test-data.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.populateTestData = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const generate_linear_point_sizes_1 = __webpack_require__(/*! ./generate-linear-point-sizes */ "./src/extract/generate-linear-point-sizes.ts");
const generate_linear_r_g_b_range_1 = __webpack_require__(/*! ./generate-linear-r-g-b-range */ "./src/extract/generate-linear-r-g-b-range.ts");
const generate_cricle_geometry_1 = __webpack_require__(/*! ./generate-cricle-geometry */ "./src/extract/generate-cricle-geometry.ts");
function populateTestData(connector, range, alpha, rnd) {
    (0, generate_cricle_geometry_1.generateCircleGeometry)(connector, range, rnd);
    if (connector.offsets.size != null) {
        (0, generate_linear_point_sizes_1.generateLinearPointSizes)(rc_js_util_1.Vec2.f32.factory.createOne(1, 100), connector, connector.offsets.size);
    }
    if (connector.offsets.color != null) {
        (0, generate_linear_r_g_b_range_1.generateLinearRGBRange)(rc_js_util_1.RgbaColorPacker.packColor(rnd.getNext() * 255, rnd.getNext() * 255, 0, alpha), rc_js_util_1.RgbaColorPacker.packColor(0, rnd.getNext() * 255, rnd.getNext() * 255, alpha), connector, connector.offsets.color);
    }
}
exports.populateTestData = populateTestData;


/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/***/ (() => {

"use strict";



/***/ }),

/***/ "./src/plugins/cartesian2d/axis/axis-label-generator.ts":
/*!**************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/axis-label-generator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxisLabelGenerator = void 0;
const sprite_provider_1 = __webpack_require__(/*! ../../../core/sprites/sprite-provider */ "./src/core/sprites/sprite-provider.ts");
const sprite_lookup_1 = __webpack_require__(/*! ../../../core/sprites/sprite-lookup */ "./src/core/sprites/sprite-lookup.ts");
class AxisLabelGenerator {
    constructor(attachPoint, spriteProvider = new sprite_provider_1.SpriteProvider(attachPoint)) {
        this.spriteProvider = spriteProvider;
    }
    getCanvas() {
        return this.spriteProvider.getCanvas();
    }
    update(entity, dpr) {
        const formattingOptions = entity.graphicsSettings.axisOptions;
        const connector = entity.data;
        const labelW = formattingOptions.maxWidth * dpr;
        const labelH = formattingOptions.fontSize * dpr;
        this.spriteProvider.upscaleCanvas(labelW, connector.getTraceCount() * labelH);
        const spriteLookup = AxisLabelGenerator.generateSpriteLookup(entity, dpr);
        const context = this.spriteProvider.getContext();
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.font = AxisLabelGenerator.createFontString(formattingOptions, dpr);
        // FIXME these should be part of the options
        context.textBaseline = "middle";
        context.textAlign = "center";
        const xTraceCount = connector.getXTraceCount();
        const hh = labelH * 0.5;
        for (let i = 0; i < xTraceCount; ++i) {
            const y = sprite_lookup_1.SpriteLookup.getYAtIndex(spriteLookup, i);
            context.fillText(formattingOptions.formatNumber(connector.getXTick(i)), labelW * 0.5, y + hh, labelW);
        }
        context.textAlign = "right";
        for (let i = 0, iEnd = connector.getYTraceCount(); i < iEnd; ++i) {
            const y = sprite_lookup_1.SpriteLookup.getYAtIndex(spriteLookup, xTraceCount + i);
            context.fillText(formattingOptions.formatNumber(connector.getYTick(i)), labelW, y + hh, labelW);
        }
        return spriteLookup;
    }
    static generateSpriteLookup(entity, dpr) {
        const labelCount = entity.data.getTraceCount();
        const formattingOptions = entity.graphicsSettings.axisOptions;
        const spriteLookup = sprite_lookup_1.SpriteLookup.createOne(labelCount);
        const labelH = formattingOptions.fontSize * dpr;
        const labelW = formattingOptions.maxWidth * dpr;
        for (let i = 0; i < labelCount; ++i) {
            sprite_lookup_1.SpriteLookup.setSpriteAtIndex(spriteLookup, i, 0, labelH * i, labelW, labelH);
        }
        return spriteLookup;
    }
    static createFontString(formattingOptions, dpr) {
        AxisLabelGenerator.tmp[0] = formattingOptions.fontSize * dpr;
        AxisLabelGenerator.tmp[2] = formattingOptions.fontFamilyString;
        return AxisLabelGenerator.tmp.join("");
    }
}
exports.AxisLabelGenerator = AxisLabelGenerator;
AxisLabelGenerator.tmp = [12, `px "`, "Times new roman", `"`];


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/canvas-axis-graphics-component.ts":
/*!************************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/canvas-axis-graphics-component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasAxisGraphicsComponent = void 0;
const sprite_lookup_1 = __webpack_require__(/*! ../../../core/sprites/sprite-lookup */ "./src/core/sprites/sprite-lookup.ts");
const axis_label_generator_1 = __webpack_require__(/*! ./axis-label-generator */ "./src/plugins/cartesian2d/axis/axis-label-generator.ts");
class CanvasAxisGraphicsComponent {
    constructor(attachPoint, axisLabelGenerator = new axis_label_generator_1.AxisLabelGenerator(attachPoint)) {
        this.axisLabelGenerator = axisLabelGenerator;
        this.specification = {};
    }
    getCacheId() {
        return "CanvasAxisGraphicsComponent";
    }
    initialize() {
        // no action needed
    }
    resetState() {
        // no action needed
    }
    onBeforeUpdate() {
        // no action needed
    }
    update(entity, entityRenderer, updateArg) {
        const context = entityRenderer.context;
        const dataToCanvasTransform = updateArg.drawTransforms.dataToInteractiveArea;
        const lookup = this.axisLabelGenerator.update(entity, updateArg.canvasDimensions.dpr);
        const canvas = this.axisLabelGenerator.getCanvas();
        const graphY = dataToCanvasTransform.getVec3MultiplyY(updateArg.plotRange.getYMin());
        for (let i = 0, iEnd = entity.data.getXTraceCount(); i < iEnd; ++i) {
            const graphX = dataToCanvasTransform.getVec3MultiplyX(entity.data.getXTick(i));
            const spriteX = sprite_lookup_1.SpriteLookup.getXAtIndex(lookup, i);
            const spriteY = sprite_lookup_1.SpriteLookup.getYAtIndex(lookup, i);
            const spriteWidth = sprite_lookup_1.SpriteLookup.getWidthAtIndex(lookup, i);
            const spriteHeight = sprite_lookup_1.SpriteLookup.getHeightAtIndex(lookup, i);
            context.drawImage(canvas, 
            // position in sprite
            spriteX, spriteY, spriteWidth, spriteHeight, 
            // position in graph
            graphX - spriteWidth * 0.5, // center about the trace
            graphY, spriteWidth, spriteHeight);
        }
        const xTraceCount = entity.data.getXTraceCount();
        const graphX = dataToCanvasTransform.getVec3MultiplyX(updateArg.plotRange.getXMin());
        for (let i = 0, iEnd = entity.data.getYTraceCount(); i < iEnd; ++i) {
            const spriteIndex = xTraceCount + i;
            const graphY = dataToCanvasTransform.getVec3MultiplyY(entity.data.getYTick(i));
            const spriteX = sprite_lookup_1.SpriteLookup.getXAtIndex(lookup, spriteIndex);
            const spriteY = sprite_lookup_1.SpriteLookup.getYAtIndex(lookup, spriteIndex);
            const spriteWidth = sprite_lookup_1.SpriteLookup.getWidthAtIndex(lookup, spriteIndex);
            const spriteHeight = sprite_lookup_1.SpriteLookup.getHeightAtIndex(lookup, spriteIndex);
            context.drawImage(canvas, 
            // position in sprite
            spriteX, spriteY, spriteWidth, spriteHeight, 
            // position in graph
            graphX - spriteWidth, graphY - spriteHeight * 0.5, // center about the trace
            spriteWidth, spriteHeight);
        }
    }
}
exports.CanvasAxisGraphicsComponent = CanvasAxisGraphicsComponent;


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/canvas-trace-graphics-component.ts":
/*!*************************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/canvas-trace-graphics-component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasTraceGraphicsComponent = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class CanvasTraceGraphicsComponent {
    constructor() {
        this.specification = {};
    }
    getCacheId() {
        return "CanvasTraceGraphicsComponent";
    }
    initialize() {
        // no action needed
    }
    resetState() {
        // no action needed
    }
    onBeforeUpdate() {
        // no action needed
    }
    update(entity, renderer, arg) {
        renderer.context.beginPath();
        const transform = arg.drawTransforms.dataToInteractiveArea;
        renderer.context.strokeStyle = rc_js_util_1.RgbaColorPacker.getHexColorString(entity.graphicsSettings.traceColor);
        renderer.context.lineWidth = entity.graphicsSettings.traceLinePixelSize;
        const yMin = transform.getVec3MultiplyY(arg.plotRange.getYMin());
        const yMax = transform.getVec3MultiplyY(arg.plotRange.getYMax());
        for (let i = 0, iEnd = entity.data.getXTraceCount(); i < iEnd; ++i) {
            const x = transform.getVec3MultiplyX(entity.data.getXTick(i));
            renderer.context.moveTo(x, yMin);
            renderer.context.lineTo(x, yMax);
        }
        const xMin = transform.getVec3MultiplyX(arg.plotRange.getXMin());
        const xMax = transform.getVec3MultiplyX(arg.plotRange.getXMax());
        for (let i = 0, iEnd = entity.data.getYTraceCount(); i < iEnd; ++i) {
            const y = transform.getVec3MultiplyY(entity.data.getYTick(i));
            renderer.context.moveTo(xMin, y);
            renderer.context.lineTo(xMax, y);
        }
        renderer.context.closePath();
        renderer.context.stroke();
    }
}
exports.CanvasTraceGraphicsComponent = CanvasTraceGraphicsComponent;


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/gl-axis2d-graphics-component.ts":
/*!**********************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/gl-axis2d-graphics-component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlAxis2dGraphicsComponent = void 0;
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
const mat3_multiply_vec2_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/mat3-multiply-vec2-shader */ "./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts");
const gl_mat3_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat3-uniform */ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const axis_label_generator_1 = __webpack_require__(/*! ./axis-label-generator */ "./src/plugins/cartesian2d/axis/axis-label-generator.ts");
const sprite_lookup_1 = __webpack_require__(/*! ../../../core/sprites/sprite-lookup */ "./src/core/sprites/sprite-lookup.ts");
const gl_mat2_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat2-uniform */ "./src/core/rendering/gl/uniforms/gl-mat2-uniform.ts");
const gl_texture2d_1 = __webpack_require__(/*! ../../../core/rendering/gl/textures/gl-texture2d */ "./src/core/rendering/gl/textures/gl-texture2d.ts");
// todo jack27: what about z offsets in a composite? would like labels to always be above traces yet be the same entity
class GlAxis2dGraphicsComponent {
    constructor(attachPoint, traceBinder, cameraBinder, axisLabelGenerator = new axis_label_generator_1.AxisLabelGenerator(attachPoint)) {
        this.traceBinder = traceBinder;
        this.cameraBinder = cameraBinder;
        this.axisLabelGenerator = axisLabelGenerator;
        this.config = new rc_js_util_1.Mat2.f32();
        this.bindings = {
            textureMappingAttribute: new gl_float_attribute_1.GlFloatAttribute("axisGc_texMapping", new gl_buffer_1.GlBuffer(null), 4),
            spriteGeometryAttribute: new gl_float_attribute_1.GlFloatAttribute("axisGc_spriteGeometry", new gl_buffer_1.GlBuffer(new Float32Array([
                0, 0,
                1, 0,
                0, 1,
                1, 1,
            ])), 2),
            configUniform: new gl_mat2_uniform_1.GlMat2Uniform("axisGc_config", this.config),
            canvasToClipSizeUniform: new gl_mat3_uniform_1.GlMat3Uniform("traceGc_screenToClipSize", new rc_js_util_1.Mat3.f32()),
            labelSpriteTexture2d: new gl_texture2d_1.GlTexture2d("axisGc_texture", null),
        };
        this.specification = gl_program_specification_1.GlProgramSpecification.mergeProgramSpecifications([
            traceBinder.specification,
            cameraBinder.specification,
            new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders([
                mat3_multiply_vec2_shader_1.mat3MultiplyVec2Shader,
                vertexShader,
            ]), fragmentShader)
        ]);
    }
    getCacheId() {
        return "GlAxisGraphicsComponent";
    }
    initialize(entityRenderer) {
        this.cameraBinder.initialize(entityRenderer);
        this.traceBinder.initialize(entityRenderer);
        this.bindings.canvasToClipSizeUniform.initialize(entityRenderer);
        this.bindings.configUniform.initialize(entityRenderer);
        this.bindings.textureMappingAttribute.initialize(entityRenderer);
        this.bindings.spriteGeometryAttribute.initialize(entityRenderer);
        this.bindings.labelSpriteTexture2d.initialize(entityRenderer);
    }
    resetState(entityRenderer) {
        this.traceBinder.resetInstancing(entityRenderer);
        this.bindings.textureMappingAttribute.reset(entityRenderer);
    }
    onBeforeUpdate(entityRenderer, updateArg) {
        this.bindings.spriteGeometryAttribute.bind(entityRenderer);
        this.bindings.canvasToClipSizeUniform.setData(updateArg.canvasDimensions.pixelToClipSize);
        this.bindings.canvasToClipSizeUniform.bind(entityRenderer);
    }
    update(entity, entityRenderer, updateArg) {
        this.cameraBinder.setZ(entity);
        this.cameraBinder.update(updateArg.drawTransforms, entityRenderer);
        this.traceBinder.updateData(entity);
        this.traceBinder.bindInstanced(entityRenderer, 1);
        const spriteLookup = this.axisLabelGenerator.update(entity, updateArg.canvasDimensions.dpr);
        this.bindings.textureMappingAttribute.setData(sprite_lookup_1.SpriteLookup.toTypedArray(spriteLookup), entity.changeId);
        this.bindings.textureMappingAttribute.bindInstanced(entityRenderer, 1);
        const canvas = this.axisLabelGenerator.getCanvas();
        this.updateConfig(entity, canvas.width, canvas.height);
        this.bindings.configUniform.bind(entityRenderer);
        this.bindings.labelSpriteTexture2d.updateData(canvas);
        this.bindings.labelSpriteTexture2d.bind(entityRenderer);
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, entity.data.getTraceCount());
    }
    updateConfig(entity, textureWidth, textureHeight) {
        this.config[0] = entity.graphicsSettings.axisOptions.padding;
        this.config[1] = entity.graphicsSettings.axisOptions.padding;
        this.config[2] = 1 / textureWidth;
        this.config[3] = 1 / textureHeight;
    }
}
exports.GlAxis2dGraphicsComponent = GlAxis2dGraphicsComponent;
// @formatter:off
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
const vertexShader = new gl_shader_1.GlShader(`

ATTRIBUTE mediump vec4 axisGc_texMapping;
ATTRIBUTE lowp vec2 axisGc_spriteGeometry;
uniform mediump mat2 axisGc_config;
uniform highp mat3 traceGc_screenToClipSize;
VARYING mediump vec2 axisGc_texCoord;

vec2 axisGc_getTexDims()
{
    return axisGc_texMapping.zw;
}

vec2 axisGc_getTexOffset()
{
    return axisGc_texMapping.xy;
}

vec2 axisGc_getPadding()
{
    return axisGc_config[0];
}

vec2 axisGc_getTexScaleFactor()
{
    return axisGc_config[1];
}

vec2 getTexCoord()
{
    float invertedY = mix(1., 0., axisGc_spriteGeometry.y);
    vec2 texPos = axisGc_getTexOffset() + axisGc_getTexDims() * vec2(axisGc_spriteGeometry.x, invertedY);
    return texPos * axisGc_getTexScaleFactor();
}

vec4 getPosition()
{
    vec2 near = traceConnector_getPosition()[0];
    vec2 far = traceConnector_getPosition()[1];
    vec3 nearTrace = v_2dCamera_getClipspaceCoords2d(near);

    vec2 offsetDir = sign(near - far);
    vec2 adjustedDimensions = mat3MultiplyVec2(traceGc_screenToClipSize, axisGc_getTexDims() * 0.5);
    adjustedDimensions = mix(-adjustedDimensions, adjustedDimensions, axisGc_spriteGeometry) + offsetDir * adjustedDimensions;
    vec2 labelPadding = mat3MultiplyVec2(traceGc_screenToClipSize, axisGc_getPadding()) * offsetDir.xy;

    return vec4(nearTrace.xy + adjustedDimensions + labelPadding, nearTrace.z, 1);
}

void main()
{
    vec2 texCoord = getTexCoord();
    axisGc_texCoord = texCoord;
    gl_Position = getPosition();
}`);
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define VARYING in \n #define TEXTURE2D texture \n #else \n #define VARYING varying \n #define TEXTURE2D texture2D \n #endif \n void setFragmentColor(in lowp vec4 color);"
const fragmentShader = new gl_shader_1.GlShader(`
uniform highp sampler2D axisGc_texture;
VARYING mediump vec2 axisGc_texCoord;

void main()
{
    setFragmentColor(TEXTURE2D(axisGc_texture, axisGc_texCoord));
}`);
// @formatter:on


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/gl-trace-binder.ts":
/*!*********************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/gl-trace-binder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlTraceBinder = void 0;
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const a_gl_instanced_binder_1 = __webpack_require__(/*! ../../../core/rendering/gl/bindings/a-gl-instanced-binder */ "./src/core/rendering/gl/bindings/a-gl-instanced-binder.ts");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
const gl_mat4_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat4-uniform */ "./src/core/rendering/gl/uniforms/gl-mat4-uniform.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
// todo jack27: we actually want one of two difference programs depending on use case here...
// another way to do it would be to have a composite, one that handle log ranges, the other that doesn't, do nothing if not your bag <--- better idea
class GlTraceBinder extends a_gl_instanced_binder_1.AGlInstancedBinder {
    constructor() {
        super();
        this.specification = new gl_program_specification_1.GlProgramSpecification(vertex, fragmentShader);
        // pixel size at 0, trace color on first row
        this.config = rc_js_util_1.Mat4.f32.factory.createOneEmpty();
        this.colorCache = rc_js_util_1.Vec4.f32.factory.createOneEmpty();
        this.bindings = {
            positionAttribute: new gl_float_attribute_1.GlFloatAttribute("traceConnector_position", new gl_buffer_1.GlBuffer(null), 4),
            configUniform: new gl_mat4_uniform_1.GlMat4Uniform("traceConnector_config", this.config),
        };
    }
    getCacheId() {
        return "GlTrace";
    }
    mergeBuffers(binders) {
        const pointBuffer = gl_float_attribute_1.GlFloatAttribute.extractBuffer(this.bindings.positionAttribute);
        for (let i = 0, iEnd = binders.length; i < iEnd; ++i) {
            gl_float_attribute_1.GlFloatAttribute.setBuffer(binders[i].bindings.positionAttribute, pointBuffer);
        }
    }
    initialize(entityRenderer) {
        this.bindings.positionAttribute.initialize(entityRenderer);
        this.bindings.configUniform.initialize(entityRenderer);
    }
    updateData(entity) {
        this.bindings.positionAttribute.setData(entity.graphicsSettings.traces, entity.changeId);
        this.config.setRow(1, this.colorCache.setRGBAColor(entity.graphicsSettings.traceColor, true));
        this.config[0] = entity.graphicsSettings.traceLinePixelSize;
    }
    updatePointers() {
        // static pointers
    }
    bindUniforms(entityRenderer) {
        this.bindings.configUniform.bind(entityRenderer);
    }
    bindAttributes(entityRenderer) {
        this.bindings.positionAttribute.bind(entityRenderer);
    }
    bindInstanced(entityRenderer, divisor, usage) {
        this.bindings.positionAttribute.bindInstanced(entityRenderer, divisor, usage);
    }
    resetInstancing(entityRenderer) {
        this.bindings.positionAttribute.reset(entityRenderer);
    }
}
exports.GlTraceBinder = GlTraceBinder;
// @formatter:off
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
const vertex = new gl_shader_1.GlShader(`
ATTRIBUTE highp vec4 traceConnector_position;
uniform lowp mat4 traceConnector_config;

mat2 traceConnector_getPosition()
{
    return mat2(traceConnector_position);
}

float traceConnector_getWidth()
{
    return traceConnector_config[0][0];
}
`);
// @formatter:on
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define VARYING in \n #define TEXTURE2D texture \n #else \n #define VARYING varying \n #define TEXTURE2D texture2D \n #endif \n void setFragmentColor(in lowp vec4 color);"
const fragmentShader = new gl_shader_1.GlShader(`
uniform lowp mat4 traceConnector_config;

lowp vec4 traceConnector_getColor()
{
    return traceConnector_config[1];
}
`);


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/gl-trace-graphics-component.ts":
/*!*********************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/gl-trace-graphics-component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlTraceGraphicsComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_mat3_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat3-uniform */ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
const mat3_multiply_vec2_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/mat3-multiply-vec2-shader */ "./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts");
class GlTraceGraphicsComponent {
    constructor(traceBinder, cameraBinder) {
        this.traceBinder = traceBinder;
        this.cameraBinder = cameraBinder;
        this.specification = gl_program_specification_1.GlProgramSpecification.mergeProgramSpecifications([
            traceBinder.specification,
            cameraBinder.specification,
            new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders([
                mat3_multiply_vec2_shader_1.mat3MultiplyVec2Shader,
                vertexShaderPartial,
            ]), fragmentShader, ["ANGLE_instanced_arrays"]),
        ]);
        this.bindings = {
            // 0 min, 1 is max index
            lineGeometryAttribute: new gl_float_attribute_1.GlFloatAttribute("traceGc_lineGeometry", new gl_buffer_1.GlBuffer(new Float32Array([
                0, 0,
                1, 0,
                0, 1,
                1, 1,
            ])), 2),
            screenToClipSizeUniform: new gl_mat3_uniform_1.GlMat3Uniform("traceGc_screenToClipSize", new rc_js_util_1.Mat3.f32()),
        };
    }
    getCacheId() {
        return ["GlTraceGraphicsComponent", this.traceBinder.getCacheId()].join("_");
    }
    initialize(entityRenderer) {
        this.traceBinder.initialize(entityRenderer);
        this.cameraBinder.initialize(entityRenderer);
        this.bindings.lineGeometryAttribute.initialize(entityRenderer);
        this.bindings.screenToClipSizeUniform.initialize(entityRenderer);
    }
    resetState(entityRenderer) {
        this.traceBinder.resetInstancing(entityRenderer);
    }
    onBeforeUpdate(entityRenderer, updateArg) {
        this.bindings.lineGeometryAttribute.bind(entityRenderer, entityRenderer.context.STATIC_DRAW);
        this.bindings.screenToClipSizeUniform.setData(updateArg.canvasDimensions.pixelToClipSize);
        this.bindings.screenToClipSizeUniform.bind(entityRenderer);
    }
    update(entity, entityRenderer, updateArg) {
        // update dependencies
        this.cameraBinder.setZ(entity);
        this.cameraBinder.update(updateArg.drawTransforms, entityRenderer);
        this.traceBinder.updateInstanced(entity, entityRenderer, 1);
        // draw
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, entity.data.getTraceCount());
    }
}
(0, tslib_1.__decorate)([
    rc_js_util_1.Once
], GlTraceGraphicsComponent.prototype, "getCacheId", null);
exports.GlTraceGraphicsComponent = GlTraceGraphicsComponent;
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
const vertexShaderPartial = new gl_shader_1.GlShader(
// @formatter:off
`
ATTRIBUTE lowp vec2 traceGc_lineGeometry;
uniform highp mat3 traceGc_screenToClipSize;

vec2 traceGc_getWidth(float width, vec2 rangeSign, vec2 trianglePosition)
{
    vec2 widthOffset = width * rangeSign.yx * (trianglePosition - 0.5);

    return mat3MultiplyVec2(traceGc_screenToClipSize, widthOffset);
}

// tracePosition [xMin, yMin, xMax, yMax]
vec3 traceGc_getPosition(mat2 tracePosition, float width, vec2 trianglePosition)
{
    vec2 min = tracePosition[0];
    vec2 range = tracePosition[1] - min;
    vec3 basePosition = v_2dCamera_getClipspaceCoords2d(range * trianglePosition + min);
    return basePosition + vec3(traceGc_getWidth(width, sign(range), trianglePosition), 0);
}

void main()
{
    vec3 position = traceGc_getPosition(traceConnector_getPosition(), traceConnector_getWidth(), traceGc_lineGeometry);
    gl_Position = vec4(position, 1);
}
`);
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define VARYING in \n #define TEXTURE2D texture \n #else \n #define VARYING varying \n #define TEXTURE2D texture2D \n #endif \n void setFragmentColor(in lowp vec4 color);"
const fragmentShader = new gl_shader_1.GlShader(`

void main()
{
    setFragmentColor(traceConnector_getColor());
}
`);


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/populate-trace2d-bindings.ts":
/*!*******************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/populate-trace2d-bindings.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.populateTrace2dBindings = void 0;
function populateTrace2dBindings(entity) {
    const connector = entity.data;
    const buffer = entity.graphicsSettings.traces;
    const yMin = connector.dataRange.getYMin();
    const yMax = connector.dataRange.getYMax();
    const xTraceCount = connector.getXTraceCount();
    for (let i = 0, iEnd = xTraceCount, bufferIndex = 0; i < iEnd; ++i) {
        const xTick = connector.getXTick(i);
        buffer[bufferIndex] = xTick;
        buffer[bufferIndex + 1] = yMin;
        buffer[bufferIndex + 2] = xTick;
        buffer[bufferIndex + 3] = yMax;
        bufferIndex += 4;
    }
    const xMin = connector.dataRange.getXMin();
    const xMax = connector.dataRange.getXMax();
    for (let i = 0, iEnd = connector.getYTraceCount(), bufferIndex = xTraceCount * 4; i < iEnd; ++i) {
        const yTick = connector.getYTick(i);
        buffer[bufferIndex] = xMin;
        buffer[bufferIndex + 1] = yTick;
        buffer[bufferIndex + 2] = xMax;
        buffer[bufferIndex + 3] = yTick;
        bufferIndex += 4;
    }
}
exports.populateTrace2dBindings = populateTrace2dBindings;


/***/ }),

/***/ "./src/plugins/cartesian2d/axis/trace-entity-connector.ts":
/*!****************************************************************!*\
  !*** ./src/plugins/cartesian2d/axis/trace-entity-connector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraceEntityConnector = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class TraceEntityConnector {
    constructor(rangeCtor, maxTraceCount, changeIdGenerator) {
        this.maxTraceCount = maxTraceCount;
        this.changeIdGenerator = changeIdGenerator;
        this.xStart = 0;
        this.xStep = 0;
        this.yStart = 0;
        this.yStep = 0;
        this.xCount = 0;
        this.yCount = 0;
        this.dataRange = rc_js_util_1.Range2d.getCtor(rangeCtor).factory.createOneEmpty();
    }
    update(dataRange) {
        this.dataRange = dataRange;
        const xTickSize = this.getTickSize(dataRange.getXRange());
        const yTickSize = this.getTickSize(dataRange.getYRange());
        this.xStart = TraceEntityConnector.getStart(dataRange.getXMin(), xTickSize);
        this.yStart = TraceEntityConnector.getStart(dataRange.getYMin(), yTickSize);
        this.xCount = TraceEntityConnector.getCount(this.xStart, xTickSize, dataRange.getXMax());
        this.yCount = TraceEntityConnector.getCount(this.yStart, yTickSize, dataRange.getYMax());
        this.xStep = xTickSize;
        this.yStep = yTickSize;
        return this.changeIdGenerator.getNextId();
    }
    getXTick(index) {
        return this.xStart + this.xStep * index;
    }
    getYTick(index) {
        return this.yStart + this.yStep * index;
    }
    getTraceCount() {
        return this.xCount + this.yCount;
    }
    getXTraceCount() {
        return this.xCount;
    }
    getYTraceCount() {
        return this.yCount;
    }
    getTickSize(range) {
        const exponent = Math.round(Math.log10(range));
        let tickSize = Math.pow(10, exponent - 1);
        // tickSize may not be representable exactly,
        // round to avoid float funnies
        const ticksInRange = Math.round(range / tickSize);
        if (ticksInRange <= this.maxTraceCount) {
            // no action needed
        }
        else if (ticksInRange * 0.5 <= this.maxTraceCount) {
            tickSize *= 2;
        }
        else if (ticksInRange * 0.2 <= this.maxTraceCount) {
            tickSize *= 5;
        }
        else {
            tickSize *= 10;
        }
        return tickSize;
    }
    static getStart(min, tickSize) {
        const firstTick = ((min / tickSize) | 0) * tickSize;
        if (firstTick < min) {
            return firstTick + tickSize;
        }
        else {
            return firstTick;
        }
    }
    static getCount(start, tickSize, end) {
        return 1 + ((end - start) / tickSize) | 0;
    }
}
exports.TraceEntityConnector = TraceEntityConnector;


/***/ }),

/***/ "./src/plugins/cartesian2d/canvas-cartesian-plot-factory.ts":
/*!******************************************************************!*\
  !*** ./src/plugins/cartesian2d/canvas-cartesian-plot-factory.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasCartesianPlotFactory = void 0;
const canvas_axis_graphics_component_1 = __webpack_require__(/*! ./axis/canvas-axis-graphics-component */ "./src/plugins/cartesian2d/axis/canvas-axis-graphics-component.ts");
const canvas_trace_graphics_component_1 = __webpack_require__(/*! ./axis/canvas-trace-graphics-component */ "./src/plugins/cartesian2d/axis/canvas-trace-graphics-component.ts");
const trace_entity_connector_1 = __webpack_require__(/*! ./axis/trace-entity-connector */ "./src/plugins/cartesian2d/axis/trace-entity-connector.ts");
const chart_data_entity_1 = __webpack_require__(/*! ../../core/entities/chart-data-entity */ "./src/core/entities/chart-data-entity.ts");
const i_cartesian2d_plot_1 = __webpack_require__(/*! ./i-cartesian2d-plot */ "./src/plugins/cartesian2d/i-cartesian2d-plot.ts");
const create_cartesian_plot_ctor_1 = __webpack_require__(/*! ./create-cartesian-plot-ctor */ "./src/plugins/cartesian2d/create-cartesian-plot-ctor.ts");
const composite_graphics_component_1 = __webpack_require__(/*! ../../core/components/composite-graphics-component */ "./src/core/components/composite-graphics-component.ts");
const canvas_cartesian_update_hooks_1 = __webpack_require__(/*! ./canvas-cartesian-update-hooks */ "./src/plugins/cartesian2d/canvas-cartesian-update-hooks.ts");
class CanvasCartesianPlotFactory {
    static createOne(chart, options) {
        const plotArea = options.getPlotArea(chart.attachPoint);
        const arg = new i_cartesian2d_plot_1.Cartesian2dPlotCtorArg(chart, options, plotArea);
        return new CanvasCartesianPlot(arg);
    }
    static setDefaultAxis(plot, options, attachPoint) {
        const traceConnector = new trace_entity_connector_1.TraceEntityConnector(Float64Array, options.traceOptions.maxTraceCount, plot.changeIdFactory);
        const axisGraphicsComponents = composite_graphics_component_1.CompositeGraphicsComponent
            .createOne({}, new canvas_trace_graphics_component_1.CanvasTraceGraphicsComponent())
            .addComponent(new canvas_axis_graphics_component_1.CanvasAxisGraphicsComponent(attachPoint));
        plot.metaCategory.addEntity(new chart_data_entity_1.ChartDataEntity(traceConnector, {
            traceColor: options.traceOptions.traceColor,
            traceLinePixelSize: options.traceOptions.traceLinePixelSize,
            axisOptions: options.axisOptions,
            zIndexRel: 0,
            zIndexAbs: 0,
        }, plot.changeIdFactory, function (arg) {
            this.changeId = this.data.update(arg.plotRange);
        }), axisGraphicsComponents);
    }
}
exports.CanvasCartesianPlotFactory = CanvasCartesianPlotFactory;
const CanvasCartesianPlot = (0, create_cartesian_plot_ctor_1.createCartesianPlotCtor)(CanvasCartesianPlotFactory, new canvas_cartesian_update_hooks_1.CanvasCartesianUpdateHooks(arg => arg.plotDimensionsOTL.pixelArea.wholeRange), new canvas_cartesian_update_hooks_1.CanvasCartesianUpdateHooks(arg => arg.plotDimensionsOTL.pixelArea.interactiveRange));


/***/ }),

/***/ "./src/plugins/cartesian2d/canvas-cartesian-update-hooks.ts":
/*!******************************************************************!*\
  !*** ./src/plugins/cartesian2d/canvas-cartesian-update-hooks.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasCartesianUpdateHooks = void 0;
class CanvasCartesianUpdateHooks {
    constructor(getDrawRange) {
        this.getDrawRange = getDrawRange;
    }
    onAfterUpdate(renderer) {
        renderer.context.restore();
    }
    onBeforeUpdate(renderer, arg) {
        const drawRange = this.getDrawRange(arg);
        renderer.context.save();
        renderer.context.beginPath();
        renderer.context.rect(drawRange.getXMin() | 0, drawRange.getYMin() | 0, drawRange.getXRange() | 0, drawRange.getYRange() | 0);
        renderer.context.closePath();
        renderer.context.clip();
    }
}
exports.CanvasCartesianUpdateHooks = CanvasCartesianUpdateHooks;


/***/ }),

/***/ "./src/plugins/cartesian2d/canvas-chart-factory.ts":
/*!*********************************************************!*\
  !*** ./src/plugins/cartesian2d/canvas-chart-factory.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasChartFactory = void 0;
const graph_attach_point_1 = __webpack_require__(/*! ../../core/templating/graph-attach-point */ "./src/core/templating/graph-attach-point.ts");
const graph_attach_point_provider_1 = __webpack_require__(/*! ../../core/templating/graph-attach-point-provider */ "./src/core/templating/graph-attach-point-provider.ts");
const canvas_renderer_1 = __webpack_require__(/*! ../../core/rendering/canvas/canvas-renderer */ "./src/core/rendering/canvas/canvas-renderer.ts");
const chart_event_service_1 = __webpack_require__(/*! ../../core/eventing/chart-event-service */ "./src/core/eventing/chart-event-service.ts");
const chart_component_1 = __webpack_require__(/*! ../../core/chart-component */ "./src/core/chart-component.ts");
const canvas_context_adapter_1 = __webpack_require__(/*! ../../core/rendering/canvas/canvas-context-adapter */ "./src/core/rendering/canvas/canvas-context-adapter.ts");
class CanvasChartFactory {
    static createOne(chartContainer, config) {
        const eventService = new chart_event_service_1.EventService();
        const attachPoint = new graph_attach_point_1.GraphAttachPoint(new graph_attach_point_provider_1.GraphAttachPointProvider(chartContainer), eventService, config);
        const contextAdapter = new canvas_context_adapter_1.CanvasContextAdapter(attachPoint.canvasElement);
        const renderer = canvas_renderer_1.CanvasRenderer.createOne(contextAdapter.getContext());
        if (renderer == null) {
            return null;
        }
        return new chart_component_1.ChartComponent(attachPoint, renderer, eventService, config, contextAdapter);
    }
}
exports.CanvasChartFactory = CanvasChartFactory;


/***/ }),

/***/ "./src/plugins/cartesian2d/cartesian2d-plot-range.ts":
/*!***********************************************************!*\
  !*** ./src/plugins/cartesian2d/cartesian2d-plot-range.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cartesian2dPlotRange = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const float_precision_range_bounder_1 = __webpack_require__(/*! ../../core/eventing/float-precision-range-bounder */ "./src/core/eventing/float-precision-range-bounder.ts");
class Cartesian2dPlotRange {
    constructor(maxBounds, dataRange, maxZoom, canvasDims, interactionBounder) {
        this.interactionBounder = interactionBounder;
        this.maxBounds = maxBounds;
        this.dataRange = dataRange;
        this.minRange = dataRange
            .slice()
            .fill(0);
        this.updateBounds(maxBounds, maxZoom);
        this.updateDataRange(dataRange, canvasDims);
    }
    static createOneF32(maxBounds, dataRange, maxZoom, canvasDims) {
        return new Cartesian2dPlotRange(maxBounds, dataRange, maxZoom, canvasDims, new float_precision_range_bounder_1.FloatPrecisionRangeBounder(rc_js_util_1._F32, 0.1));
    }
    static createOneF64(maxBounds, dataRange, maxZoom, canvasDims) {
        return new Cartesian2dPlotRange(maxBounds, dataRange, maxZoom, canvasDims, new float_precision_range_bounder_1.FloatPrecisionRangeBounder(rc_js_util_1._F64, 0.1));
    }
    updateDataRange(dataRange, canvasDims) {
        this.dataRange.set(dataRange);
        this.dataRange.ensureMinRange(this.minRange.getXMax(), this.minRange.getYRange());
        this.interactionBounder.boundRange(this.dataRange, canvasDims.pixelDims, this.maxBounds);
    }
    updateBounds(bounds, maxZoom) {
        maxZoom = rc_js_util_1._Math.bound(maxZoom, 1, this.interactionBounder.maxZoom);
        this.maxBounds.set(bounds);
        this.maxBounds.bound(this.interactionBounder.maxBounds);
        this.minRange.update(0, bounds.getXRange() / maxZoom, 0, bounds.getYRange() / maxZoom);
        this.minRange.setXMax(bounds.getXRange() / maxZoom);
        this.minRange.setYMax(bounds.getYRange() / maxZoom);
    }
}
exports.Cartesian2dPlotRange = Cartesian2dPlotRange;


/***/ }),

/***/ "./src/plugins/cartesian2d/cartesian2d-plot-shared-quad-tree.ts":
/*!**********************************************************************!*\
  !*** ./src/plugins/cartesian2d/cartesian2d-plot-shared-quad-tree.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cartesian2dPlotSharedQuadTree = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const interaction_groups_1 = __webpack_require__(/*! ../../core/eventing/user-interaction/interaction-groups */ "./src/core/eventing/user-interaction/interaction-groups.ts");
const plot_interaction_connector_1 = __webpack_require__(/*! ../../core/plot/interaction-connector/plot-interaction-connector */ "./src/core/plot/interaction-connector/plot-interaction-connector.ts");
const interaction_cartesian2d_1 = __webpack_require__(/*! ./eventing/interaction-cartesian2d */ "./src/plugins/cartesian2d/eventing/interaction-cartesian2d.ts");
const quad_tree_event_target_provider_1 = __webpack_require__(/*! ../../core/eventing/user-interaction/quad-tree/quad-tree-event-target-provider */ "./src/core/eventing/user-interaction/quad-tree/quad-tree-event-target-provider.ts");
const get_chart_initial_state_1 = __webpack_require__(/*! ../../core/eventing/user-interaction/default-state-machine/get-chart-initial-state */ "./src/core/eventing/user-interaction/default-state-machine/get-chart-initial-state.ts");
const shared_entity_quad_tree_1 = __webpack_require__(/*! ./quad-tree/shared-entity-quad-tree */ "./src/plugins/cartesian2d/quad-tree/shared-entity-quad-tree.ts");
const on_plot_detached_1 = __webpack_require__(/*! ../../core/plot/events/on-plot-detached */ "./src/core/plot/events/on-plot-detached.ts");
const on_entity_removed_1 = __webpack_require__(/*! ../../core/plot/events/on-entity-removed */ "./src/core/plot/events/on-entity-removed.ts");
const on_entity_added_to_group_1 = __webpack_require__(/*! ../../core/plot/events/on-entity-added-to-group */ "./src/core/plot/events/on-entity-added-to-group.ts");
const on_entity_removed_from_group_1 = __webpack_require__(/*! ../../core/plot/events/on-entity-removed-from-group */ "./src/core/plot/events/on-entity-removed-from-group.ts");
class Cartesian2dPlotSharedQuadTree {
    constructor(plot, options) {
        this.plot = plot;
        this.options = options;
        this.temporaryListeners = new rc_js_util_1.TemporaryListener();
        this.interactionGroups = new interaction_groups_1.InteractionGroups(plot.updateArgProvider, plot);
    }
    setQuadTreeInteractionHandler(emscriptenWrapper, chart, listeners = {}) {
        const entityTree = new shared_entity_quad_tree_1.SharedEntityQuadTree(emscriptenWrapper, 12, 4);
        this.populateTree(entityTree);
        this.configureListeners(entityTree);
        this.plot.setInteractionHandler(new plot_interaction_connector_1.PlotInteractionConnector(() => {
            return new interaction_cartesian2d_1.InteractionCartesian2d(chart, this.plot, listeners);
        }), () => new quad_tree_event_target_provider_1.QuadTreeEventTargetProvider(entityTree, this.plot, this.interactionGroups, this.options), get_chart_initial_state_1.getChartInitialState);
    }
    populateTree(entityTree) {
        const existingEntities = this.plot.getEntitiesInGroup(this.interactionGroups.hitTestable);
        for (let i = 0, iEnd = existingEntities.length; i < iEnd; ++i) {
            entityTree.addEntity(existingEntities[i]);
        }
    }
    configureListeners(entityTree) {
        on_plot_detached_1.OnPlotDetached.registerOneTimeListener(this.plot, () => {
            entityTree.sharedObject.release();
            this.temporaryListeners.clearListeners();
        });
        this.temporaryListeners.addListener(on_entity_added_to_group_1.OnEntityAddedToGroup.registerListener(this.plot, (entity) => {
            if (this.interactionGroups.hitTestable.isEntityInGroup(entity)) {
                entityTree.addEntity(entity);
            }
        }));
        this.temporaryListeners.addListener(on_entity_removed_from_group_1.OnEntityRemovedFromGroup.registerListener(this.plot, (entity) => {
            if (this.interactionGroups.hitTestable.isEntityInGroup(entity)) {
                entityTree.removeEntity(entity);
            }
        }));
        this.temporaryListeners.addListener(on_entity_removed_1.OnEntityRemoved.registerListener(this.plot, (entity) => {
            if (this.interactionGroups.hitTestable.isEntityInGroup(entity)) {
                entityTree.removeEntity(entity);
            }
        }));
    }
}
exports.Cartesian2dPlotSharedQuadTree = Cartesian2dPlotSharedQuadTree;


/***/ }),

/***/ "./src/plugins/cartesian2d/cartesian2d-transforms.ts":
/*!***********************************************************!*\
  !*** ./src/plugins/cartesian2d/cartesian2d-transforms.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cartesian2dTransforms = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class Cartesian2dTransforms {
    constructor(ctor) {
        const Mat3Ctor = rc_js_util_1.Mat3.getCtor(ctor);
        this.dataToPlotArea = new Mat3Ctor();
        this.dataToInteractiveArea = new Mat3Ctor();
        this.dataToPlotSize = new Mat3Ctor();
        this.dataToInteractiveSize = new Mat3Ctor();
        this.tmp = rc_js_util_1.Range2d.getCtor(ctor).factory.createOneEmpty();
    }
    update(dataRange, plotArea, interactionArea) {
        dataRange.getRangeTransform(plotArea, this.dataToPlotArea);
        dataRange.getRangeTransform(interactionArea, this.dataToInteractiveArea);
        const tmp = this.tmp;
        tmp.setXMax(plotArea.getXRange());
        tmp.setYMax(plotArea.getYRange());
        dataRange.getRangeTransform(tmp, this.dataToPlotSize);
        tmp.setXMax(interactionArea.getXRange());
        tmp.setYMax(interactionArea.getYRange());
        dataRange.getRangeTransform(tmp, this.dataToInteractiveSize);
    }
}
exports.Cartesian2dTransforms = Cartesian2dTransforms;


/***/ }),

/***/ "./src/plugins/cartesian2d/categories/canvas-cartesian2d-update-arg-provider.ts":
/*!**************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/categories/canvas-cartesian2d-update-arg-provider.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasCartesian2dUpdateArgProvider = void 0;
const cartesian2d_update_arg_1 = __webpack_require__(/*! ./cartesian2d-update-arg */ "./src/plugins/cartesian2d/categories/cartesian2d-update-arg.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class CanvasCartesian2dUpdateArgProvider {
    constructor() {
        this.reverseWholeRange = new rc_js_util_1.Range2d.f32();
        this.reverseInteractiveRange = new rc_js_util_1.Range2d.f32();
        this.updateArg = new cartesian2d_update_arg_1.Cartesian2dUpdateArg(Float64Array);
    }
    getUpdateArg(plot, canvasDims) {
        CanvasCartesian2dUpdateArgProvider.copyReverseY(this.reverseWholeRange, plot.plotDimensionsOTL.pixelArea.wholeRange);
        CanvasCartesian2dUpdateArgProvider.copyReverseY(this.reverseInteractiveRange, plot.plotDimensionsOTL.pixelArea.interactiveRange);
        this.updateArg.drawTransforms.update(plot.plotRange.dataRange, this.reverseWholeRange, this.reverseInteractiveRange);
        this.updateArg.update(plot, canvasDims);
        return this.updateArg;
    }
    static copyReverseY(to, from) {
        to[0] = from[0];
        to[1] = from[1];
        to[2] = from[3];
        to[3] = from[2];
    }
}
exports.CanvasCartesian2dUpdateArgProvider = CanvasCartesian2dUpdateArgProvider;


/***/ }),

/***/ "./src/plugins/cartesian2d/categories/cartesian2d-update-arg.ts":
/*!**********************************************************************!*\
  !*** ./src/plugins/cartesian2d/categories/cartesian2d-update-arg.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cartesian2dUpdateArg = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const cartesian2d_transforms_1 = __webpack_require__(/*! ../cartesian2d-transforms */ "./src/plugins/cartesian2d/cartesian2d-transforms.ts");
const canvas_dimensions_1 = __webpack_require__(/*! ../../../core/templating/canvas-dimensions */ "./src/core/templating/canvas-dimensions.ts");
const plot_dimensions_1 = __webpack_require__(/*! ../../../core/plot/plot-dimensions */ "./src/core/plot/plot-dimensions.ts");
class Cartesian2dUpdateArg {
    constructor(ctor) {
        this.plotRange = rc_js_util_1.Range2d.getCtor(ctor).factory.createOneEmpty();
        this.drawTransforms = new cartesian2d_transforms_1.Cartesian2dTransforms(ctor);
        this.interactionTransforms = new cartesian2d_transforms_1.Cartesian2dTransforms(ctor);
        this.canvasDimensions = canvas_dimensions_1.CanvasDimensions.createDefault();
        this.plotDimensionsOBL = plot_dimensions_1.PlotDimensions.createDefault();
        this.plotDimensionsOTL = plot_dimensions_1.PlotDimensions.createDefault();
    }
    update(plot, canvasDims) {
        this.plotRange = plot.plotRange.dataRange;
        this.plotDimensionsOBL = plot.plotDimensionsOBL;
        this.plotDimensionsOTL = plot.plotDimensionsOTL;
        this.canvasDimensions = canvasDims;
        // drawTransforms is specific to the drawing technology so is updated elsewhere
        this.interactionTransforms.update(plot.plotRange.dataRange, plot.plotDimensionsOBL.cssArea.wholeRange, plot.plotDimensionsOBL.cssArea.interactiveRange);
    }
}
exports.Cartesian2dUpdateArg = Cartesian2dUpdateArg;


/***/ }),

/***/ "./src/plugins/cartesian2d/categories/gl-cartesian2d-update-arg-provider.ts":
/*!**********************************************************************************!*\
  !*** ./src/plugins/cartesian2d/categories/gl-cartesian2d-update-arg-provider.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlCartesian2dUpdateArgProvider = void 0;
const cartesian2d_update_arg_1 = __webpack_require__(/*! ./cartesian2d-update-arg */ "./src/plugins/cartesian2d/categories/cartesian2d-update-arg.ts");
class GlCartesian2dUpdateArgProvider {
    constructor() {
        this.updateArg = new cartesian2d_update_arg_1.Cartesian2dUpdateArg(Float32Array);
    }
    getUpdateArg(plot, canvasDims) {
        this.updateArg.drawTransforms.update(plot.plotRange.dataRange, plot.plotDimensionsOBL.clipSpaceArea.wholeRange, plot.plotDimensionsOBL.clipSpaceArea.interactiveRange);
        this.updateArg.update(plot, canvasDims);
        return this.updateArg;
    }
}
exports.GlCartesian2dUpdateArgProvider = GlCartesian2dUpdateArgProvider;


/***/ }),

/***/ "./src/plugins/cartesian2d/create-cartesian-plot-ctor.ts":
/*!***************************************************************!*\
  !*** ./src/plugins/cartesian2d/create-cartesian-plot-ctor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCartesianPlotCtor = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const plot_1 = __webpack_require__(/*! ../../core/plot/plot */ "./src/core/plot/plot.ts");
const entity_category2d_1 = __webpack_require__(/*! ./entity-category2d */ "./src/plugins/cartesian2d/entity-category2d.ts");
const on_plot_detached_1 = __webpack_require__(/*! ../../core/plot/events/on-plot-detached */ "./src/core/plot/events/on-plot-detached.ts");
const on_canvas_resized_1 = __webpack_require__(/*! ../../core/eventing/events/on-canvas-resized */ "./src/core/eventing/events/on-canvas-resized.ts");
function createCartesianPlotCtor(axisFactory, metaUpdateHooks, dataUpdateHooks) {
    var _a;
    return _a = class CartesianPlot extends plot_1.Plot {
            constructor(arg) {
                super(arg);
                this.plotListeners = new rc_js_util_1.TemporaryListener();
                const ctor = this.constructor;
                this.updateArgProvider = arg.plotOptions.updateGroup.updateArgProvider;
                this.metaCategory = new entity_category2d_1.EntityCategory2d(this, arg.chart.renderer, arg.plotOptions.updateGroup, ctor.metaUpdateHooks);
                this.dataCategory = new entity_category2d_1.EntityCategory2d(this, arg.chart.renderer, arg.plotOptions.updateGroup, ctor.dataUpdateHooks);
                this.configureDefaults(arg.plotOptions, arg.chart.attachPoint);
                this.registerEventHandlers(arg.plotOptions);
            }
            configureDefaults(options, attachPoint) {
                if (options.useDefaultAxis) {
                    this.constructor.axisFactory.setDefaultAxis(this, options, attachPoint);
                }
            }
            registerEventHandlers(options) {
                on_plot_detached_1.OnPlotDetached.registerListener(this, () => this.plotListeners.clearingEmit());
                this.plotListeners.addListener(on_canvas_resized_1.OnCanvasResized.registerListener(this.eventService, () => {
                    this.setPlotArea(options.getPlotArea(this.attachPoint));
                }));
            }
        },
        _a.axisFactory = axisFactory,
        _a.metaUpdateHooks = metaUpdateHooks,
        _a.dataUpdateHooks = dataUpdateHooks,
        _a;
}
exports.createCartesianPlotCtor = createCartesianPlotCtor;


/***/ }),

/***/ "./src/plugins/cartesian2d/entity-category2d.ts":
/*!******************************************************!*\
  !*** ./src/plugins/cartesian2d/entity-category2d.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityCategory2d = void 0;
const entity_category_1 = __webpack_require__(/*! ../../core/entities/categories/entity-category */ "./src/core/entities/categories/entity-category.ts");
class EntityCategory2d extends entity_category_1.EntityCategory {
    constructor(plot, renderer, updateGroup, updateHooks) {
        super(plot, renderer, updateGroup, updateHooks);
        this.entityZIndexRange = 0;
        this.zIndex = EntityCategory2d.counter++; // todo jack26: actually set these
        // todo jack26: do this in the base
        updateGroup.categories.addCategory(this);
    }
}
exports.EntityCategory2d = EntityCategory2d;
EntityCategory2d.counter = 0;


/***/ }),

/***/ "./src/plugins/cartesian2d/eventing/interaction-cartesian2d.ts":
/*!*********************************************************************!*\
  !*** ./src/plugins/cartesian2d/eventing/interaction-cartesian2d.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionCartesian2d = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const user_event_handler_callbacks_1 = __webpack_require__(/*! ../../../core/eventing/user-interaction/user-event-handler-callbacks */ "./src/core/eventing/user-interaction/user-event-handler-callbacks.ts");
const pinch_zoom_handler_cartesian2d_1 = __webpack_require__(/*! ./pinch-zoom-handler-cartesian2d */ "./src/plugins/cartesian2d/eventing/pinch-zoom-handler-cartesian2d.ts");
// todo jack: definitely bugs around here, (NaN ranges, fast zoom in)
class InteractionCartesian2d {
    constructor(chart, plot, listeners) {
        this.chart = chart;
        this.plot = plot;
        this.interactiveClipToData = rc_js_util_1.Mat3.f32.factory.createOneEmpty();
        this.pinchZoomHandler = new pinch_zoom_handler_cartesian2d_1.PinchZoomHandlerCartesian2d(this.plot, this.chart.attachPoint.canvasDims, rc_js_util_1.Vec2.f32.factory.createOneEmpty(), 0);
        this.userCallbacks = new user_event_handler_callbacks_1.UserEventHandlerCallbacks(listeners);
        this.tmpRange = plot.plotRange.dataRange.slice();
    }
    onCanvasResized() {
        // no action needed
    }
    onClick(targets, $event) {
        this.userCallbacks.onClick(targets, $event);
    }
    onDoubleClick(targets, $event) {
        this.userCallbacks.onDoubleClick(targets, $event);
    }
    onHover(newlyHovered, stillHovered, noLongerHovered, $event) {
        this.userCallbacks.onHover(newlyHovered, stillHovered, noLongerHovered, $event);
    }
    onDragStart(targets, $event) {
        return this.userCallbacks.onDragStart(targets, $event);
    }
    onDragEnd($event) {
        this.userCallbacks.onDragEnd($event);
    }
    onDrag($event) {
        this.userCallbacks.onDrag($event);
    }
    onPan($event, dx, dy) {
        const plotRange = this.plot.plotRange;
        const interactiveRange = this.plot.plotDimensionsOBL.pixelArea.interactiveRange;
        const ddx = plotRange.dataRange.getXRange() * dx / interactiveRange.getXRange();
        const ddy = plotRange.dataRange.getYRange() * dy / interactiveRange.getYRange();
        this.tmpRange.set(plotRange.dataRange);
        this.tmpRange.translateBy(-ddx, -ddy);
        plotRange.updateDataRange(this.tmpRange, this.chart.attachPoint.canvasDims);
        this.userCallbacks.onPan($event, dx, dy);
        this.chart.updateOnNextFrame(this.plot);
    }
    onPanZoomStart(centerPointCssCanvas, width) {
        this.pinchZoomHandler = new pinch_zoom_handler_cartesian2d_1.PinchZoomHandlerCartesian2d(this.plot, this.chart.attachPoint.canvasDims, centerPointCssCanvas.slice(), width);
    }
    onPanZoomChange($event, centerPoint, zoomFactor) {
        this.pinchZoomHandler.onPanZoomChange($event, centerPoint, zoomFactor);
        this.userCallbacks.onPanZoomChange($event, centerPoint, zoomFactor);
        this.chart.updateOnNextFrame(this.plot);
    }
    onWheel($event, dz) {
        const plotRange = this.plot.plotRange;
        const interactiveRange = this.plot.plotDimensionsOBL.clipSpaceArea.interactiveRange;
        interactiveRange.getRangeTransform(plotRange.dataRange, this.interactiveClipToData);
        const dataPosition = $event.pointerClipPosition.mat3Multiply(this.interactiveClipToData);
        this.tmpRange.set(plotRange.dataRange);
        this.tmpRange.scaleRelativeTo(1 - dz * 0.001, dataPosition, this.tmpRange);
        plotRange.updateDataRange(this.tmpRange, this.chart.attachPoint.canvasDims);
        this.userCallbacks.onWheel($event, dz);
        this.chart.updateOnNextFrame(this.plot);
    }
}
exports.InteractionCartesian2d = InteractionCartesian2d;


/***/ }),

/***/ "./src/plugins/cartesian2d/eventing/pinch-zoom-handler-cartesian2d.ts":
/*!****************************************************************************!*\
  !*** ./src/plugins/cartesian2d/eventing/pinch-zoom-handler-cartesian2d.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PinchZoomHandlerCartesian2d = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
// todo jack clean this shit up
class PinchZoomHandlerCartesian2d {
    constructor(plot, canvasDims, centerPointCssCanvas, prevWidth) {
        this.plot = plot;
        this.canvasDims = canvasDims;
        this.prevWidth = prevWidth;
        this.scaleAbout = new rc_js_util_1.Vec2.f32();
        this.canvasToDataTransform = rc_js_util_1.Mat3.f32.factory.createOneEmpty();
        this.tmp = this.plot.plotRange.dataRange.slice();
        this.previousCenterPoint = centerPointCssCanvas.slice();
    }
    onPanZoomChange(chartEvent, centerPoint, currentDistance) {
        const zoomFactor = this.prevWidth / currentDistance;
        this.prevWidth = currentDistance;
        const dataRange = this.plot.plotRange.dataRange;
        const interactiveRange = this.plot.plotDimensionsOBL.pixelArea.interactiveRange;
        // data dx / dy in current zoom
        const ddx = -dataRange.getXRange() * (centerPoint.getX() - this.previousCenterPoint.getX()) / interactiveRange.getXRange();
        const ddy = -dataRange.getYRange() * (centerPoint.getY() - this.previousCenterPoint.getY()) / interactiveRange.getYRange();
        this.previousCenterPoint.set(centerPoint);
        this.tmp.set(this.plot.plotRange.dataRange);
        this.tmp.translateBy(ddx * this.canvasDims.dpr, ddy * this.canvasDims.dpr);
        this.plot.plotDimensionsOBL.cssArea.interactiveRange.getRangeTransform(this.plot.plotRange.dataRange, this.canvasToDataTransform);
        chartEvent.pointerCssPosition.mat3Multiply(this.canvasToDataTransform, this.scaleAbout);
        this.tmp.scaleRelativeTo(zoomFactor, this.scaleAbout, this.tmp);
        this.plot.plotRange.updateDataRange(this.tmp, this.canvasDims);
    }
}
exports.PinchZoomHandlerCartesian2d = PinchZoomHandlerCartesian2d;


/***/ }),

/***/ "./src/plugins/cartesian2d/gl-cartesian-plot-factory.ts":
/*!**************************************************************!*\
  !*** ./src/plugins/cartesian2d/gl-cartesian-plot-factory.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlCartesianPlotFactory = void 0;
const trace_entity_connector_1 = __webpack_require__(/*! ./axis/trace-entity-connector */ "./src/plugins/cartesian2d/axis/trace-entity-connector.ts");
const chart_data_entity_1 = __webpack_require__(/*! ../../core/entities/chart-data-entity */ "./src/core/entities/chart-data-entity.ts");
const gl_trace_graphics_component_1 = __webpack_require__(/*! ./axis/gl-trace-graphics-component */ "./src/plugins/cartesian2d/axis/gl-trace-graphics-component.ts");
const gl_trace_binder_1 = __webpack_require__(/*! ./axis/gl-trace-binder */ "./src/plugins/cartesian2d/axis/gl-trace-binder.ts");
const gl_cartesian2d_camera_binder_1 = __webpack_require__(/*! ./gl-cartesian2d-camera-binder */ "./src/plugins/cartesian2d/gl-cartesian2d-camera-binder.ts");
const i_cartesian2d_plot_1 = __webpack_require__(/*! ./i-cartesian2d-plot */ "./src/plugins/cartesian2d/i-cartesian2d-plot.ts");
const create_cartesian_plot_ctor_1 = __webpack_require__(/*! ./create-cartesian-plot-ctor */ "./src/plugins/cartesian2d/create-cartesian-plot-ctor.ts");
const composite_graphics_component_1 = __webpack_require__(/*! ../../core/components/composite-graphics-component */ "./src/core/components/composite-graphics-component.ts");
const dummy_gl_program_specification_1 = __webpack_require__(/*! ../../core/rendering/gl/shaders/dummy-gl-program-specification */ "./src/core/rendering/gl/shaders/dummy-gl-program-specification.ts");
const gl_cartesian_update_hooks_1 = __webpack_require__(/*! ./gl-cartesian-update-hooks */ "./src/plugins/cartesian2d/gl-cartesian-update-hooks.ts");
const gl_axis2d_graphics_component_1 = __webpack_require__(/*! ./axis/gl-axis2d-graphics-component */ "./src/plugins/cartesian2d/axis/gl-axis2d-graphics-component.ts");
const populate_trace2d_bindings_1 = __webpack_require__(/*! ./axis/populate-trace2d-bindings */ "./src/plugins/cartesian2d/axis/populate-trace2d-bindings.ts");
class GlCartesianPlotFactory {
    static createOne(chart, options) {
        const plotArea = options.getPlotArea(chart.attachPoint);
        const arg = new i_cartesian2d_plot_1.Cartesian2dPlotCtorArg(chart, options, plotArea);
        return new GlCartesianPlot(arg);
    }
    static setDefaultAxis(plot, options) {
        const traceBinderTrace = new gl_trace_binder_1.GlTraceBinder();
        const traceBinderAxis = new gl_trace_binder_1.GlTraceBinder();
        traceBinderTrace.mergeBuffers([traceBinderAxis]);
        const traceConnector = new trace_entity_connector_1.TraceEntityConnector(Float32Array, options.traceOptions.maxTraceCount, plot.changeIdFactory);
        const axisComponents = composite_graphics_component_1.CompositeGraphicsComponent
            .createOne(dummy_gl_program_specification_1.dummyGlProgramSpecification, new gl_trace_graphics_component_1.GlTraceGraphicsComponent(traceBinderTrace, new gl_cartesian2d_camera_binder_1.GlCartesian2dCameraBinder()))
            .addComponent(new gl_axis2d_graphics_component_1.GlAxis2dGraphicsComponent(plot.attachPoint, traceBinderAxis, new gl_cartesian2d_camera_binder_1.GlCartesian2dCameraBinder()));
        plot.metaCategory.addEntity(new chart_data_entity_1.ChartDataEntity(traceConnector, {
            traceColor: options.traceOptions.traceColor,
            traceLinePixelSize: options.traceOptions.traceLinePixelSize,
            zIndexAbs: 0,
            zIndexRel: 0,
            axisOptions: options.axisOptions,
            traces: new Float32Array(2 * 4 * (options.traceOptions.maxTraceCount + 3)),
        }, plot.changeIdFactory, function (arg) {
            this.changeId = this.data.update(arg.plotRange);
            (0, populate_trace2d_bindings_1.populateTrace2dBindings)(this);
        }), axisComponents);
    }
}
exports.GlCartesianPlotFactory = GlCartesianPlotFactory;
const GlCartesianPlot = (0, create_cartesian_plot_ctor_1.createCartesianPlotCtor)(GlCartesianPlotFactory, new gl_cartesian_update_hooks_1.GlCartesianUpdateHooks(arg => arg.plotDimensionsOBL.pixelArea.wholeRange), new gl_cartesian_update_hooks_1.GlCartesianUpdateHooks(arg => arg.plotDimensionsOBL.pixelArea.interactiveRange));


/***/ }),

/***/ "./src/plugins/cartesian2d/gl-cartesian-update-hooks.ts":
/*!**************************************************************!*\
  !*** ./src/plugins/cartesian2d/gl-cartesian-update-hooks.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlCartesianUpdateHooks = void 0;
const gl_renderer_util_1 = __webpack_require__(/*! ../../core/rendering/gl/gl-renderer-util */ "./src/core/rendering/gl/gl-renderer-util.ts");
class GlCartesianUpdateHooks {
    constructor(getDrawRange) {
        this.getDrawRange = getDrawRange;
    }
    onBeforeUpdate(renderer, arg) {
        gl_renderer_util_1.GlRendererUtil.scissor(renderer.context, renderer.sharedState, this.getDrawRange(arg));
    }
    onAfterUpdate() {
        // no action needed
    }
}
exports.GlCartesianUpdateHooks = GlCartesianUpdateHooks;


/***/ }),

/***/ "./src/plugins/cartesian2d/gl-cartesian2d-camera-binder.ts":
/*!*****************************************************************!*\
  !*** ./src/plugins/cartesian2d/gl-cartesian2d-camera-binder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlCartesian2dCameraBinder = void 0;
const gl_program_specification_1 = __webpack_require__(/*! ../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const empty_shader_1 = __webpack_require__(/*! ../../core/rendering/gl/shaders/empty-shader */ "./src/core/rendering/gl/shaders/empty-shader.ts");
const gl_shader_1 = __webpack_require__(/*! ../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const gl_mat3_uniform_1 = __webpack_require__(/*! ../../core/rendering/gl/uniforms/gl-mat3-uniform */ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const a_gl_binder_1 = __webpack_require__(/*! ../../core/rendering/gl/bindings/a-gl-binder */ "./src/core/rendering/gl/bindings/a-gl-binder.ts");
const mat3_multiply_vec2_shader_1 = __webpack_require__(/*! ../../core/rendering/gl/shaders/mat3-multiply-vec2-shader */ "./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts");
const gl_float_uniform_1 = __webpack_require__(/*! ../../core/rendering/gl/uniforms/gl-float-uniform */ "./src/core/rendering/gl/uniforms/gl-float-uniform.ts");
class GlCartesian2dCameraBinder extends a_gl_binder_1.AGlBinder {
    constructor() {
        super(...arguments);
        this.specification = specification;
        this.bindings = GlCartesian2dCameraBinder.getBindings();
    }
    initialize(entityRenderer) {
        this.bindings.cameraWorld.initialize(entityRenderer);
        this.bindings.z.initialize(entityRenderer);
    }
    updatePointers() {
        // no action needed
    }
    setZ(entity) {
        this.bindings.z.setData(entity.graphicsSettings.zIndexAbs);
    }
    updateData(camera) {
        this.bindings.cameraWorld.setData(camera.dataToInteractiveArea);
    }
    bindUniforms(entityRenderer) {
        this.bindings.cameraWorld.bind(entityRenderer);
        this.bindings.z.bind(entityRenderer);
    }
    bindAttributes() {
        // no attributes to bind
    }
    getCacheId() {
        return "GlCamera2d";
    }
    static getBindings() {
        return {
            cameraWorld: new gl_mat3_uniform_1.GlMat3Uniform("u_2dCamera_dataToCanvas", new rc_js_util_1.Mat3.f32()),
            z: new gl_float_uniform_1.GlFloatUniform("u_2dCamera_z", 0),
        };
    }
}
exports.GlCartesian2dCameraBinder = GlCartesian2dCameraBinder;
const specification = new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders([
    mat3_multiply_vec2_shader_1.mat3MultiplyVec2Shader,
    // language=GLSL
    new gl_shader_1.GlShader(
    // @formatter:off
    `
/* === camera2d === */
uniform highp mat3 u_2dCamera_dataToCanvas;
uniform highp float u_2dCamera_z;

vec3 v_2dCamera_getClipspaceCoords2d(vec2 coords)
{
    return vec3(mat3MultiplyVec2(u_2dCamera_dataToCanvas, coords), u_2dCamera_z);
}
`),
]), empty_shader_1.emptyShader);


/***/ }),

/***/ "./src/plugins/cartesian2d/gl-chart-factory.ts":
/*!*****************************************************!*\
  !*** ./src/plugins/cartesian2d/gl-chart-factory.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlChartFactory = void 0;
const chart_component_1 = __webpack_require__(/*! ../../core/chart-component */ "./src/core/chart-component.ts");
const chart_event_service_1 = __webpack_require__(/*! ../../core/eventing/chart-event-service */ "./src/core/eventing/chart-event-service.ts");
const graph_attach_point_1 = __webpack_require__(/*! ../../core/templating/graph-attach-point */ "./src/core/templating/graph-attach-point.ts");
const graph_attach_point_provider_1 = __webpack_require__(/*! ../../core/templating/graph-attach-point-provider */ "./src/core/templating/graph-attach-point-provider.ts");
const chart_config_1 = __webpack_require__(/*! ../../core/chart-config */ "./src/core/chart-config.ts");
const gl_renderer_1 = __webpack_require__(/*! ../../core/rendering/gl/gl-renderer */ "./src/core/rendering/gl/gl-renderer.ts");
class GlChartFactory {
    static createOne(chartContainer, contextAdapterCtor, chartConfig, rendererOptions) {
        const eventService = new chart_event_service_1.EventService();
        const attachPoint = new graph_attach_point_1.GraphAttachPoint(new graph_attach_point_provider_1.GraphAttachPointProvider(chartContainer), eventService, chartConfig);
        const contextAdapter = new contextAdapterCtor(attachPoint.canvasElement, rendererOptions.onCreate.contextAttributes);
        const config = new chart_config_1.ChartConfig();
        const renderer = gl_renderer_1.GlRenderer.createOne(contextAdapter.getContext(), rendererOptions);
        if (renderer == null) {
            return null;
        }
        return new chart_component_1.ChartComponent(attachPoint, renderer, eventService, config, contextAdapter);
    }
}
exports.GlChartFactory = GlChartFactory;


/***/ }),

/***/ "./src/plugins/cartesian2d/i-cartesian2d-plot-construction-options.ts":
/*!****************************************************************************!*\
  !*** ./src/plugins/cartesian2d/i-cartesian2d-plot-construction-options.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CartesianPlotConstructionOptions = exports.Cartesian2dAxisOptions = exports.EScreenUnit = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const i_plot_area_1 = __webpack_require__(/*! ../../core/plot/i-plot-area */ "./src/core/plot/i-plot-area.ts");
var EScreenUnit;
(function (EScreenUnit) {
    EScreenUnit[EScreenUnit["Clip"] = 1] = "Clip";
    EScreenUnit[EScreenUnit["ActualPixel"] = 2] = "ActualPixel";
    EScreenUnit[EScreenUnit["CssPixel"] = 3] = "CssPixel";
})(EScreenUnit = exports.EScreenUnit || (exports.EScreenUnit = {}));
class Cartesian2dAxisOptions {
    constructor(config) {
        Object.assign(this, config);
        this.fontFamilyString = config.fontFamilies.join(" ");
    }
}
exports.Cartesian2dAxisOptions = Cartesian2dAxisOptions;
class CartesianPlotConstructionOptions {
    constructor(options) {
        this.useDefaultAxis = true;
        Object.assign(this, options);
    }
    getPlotArea(attachPoint) {
        const dims = attachPoint.canvasDims;
        const margins = this.gutterConfig.margins.slice();
        switch (this.gutterConfig.unit) {
            case EScreenUnit.ActualPixel:
                this.gutterConfig.margins.mat3TransformLength(dims.transforms.pixelToClip, margins);
                break;
            case EScreenUnit.Clip:
                // clip is the required unit, no action needed
                break;
            case EScreenUnit.CssPixel:
                this.gutterConfig.margins.mat3TransformLength(dims.transforms.cssToClip, margins);
                break;
            default:
                rc_js_util_1._Production.assertValueIsNever(this.gutterConfig.unit);
        }
        return i_plot_area_1.PlotArea.createOneWithMargins(this.plotPosition, margins);
    }
}
exports.CartesianPlotConstructionOptions = CartesianPlotConstructionOptions;


/***/ }),

/***/ "./src/plugins/cartesian2d/i-cartesian2d-plot.ts":
/*!*******************************************************!*\
  !*** ./src/plugins/cartesian2d/i-cartesian2d-plot.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cartesian2dPlotCtorArg = void 0;
class Cartesian2dPlotCtorArg {
    constructor(chart, plotOptions, plotArea) {
        this.chart = chart;
        this.plotOptions = plotOptions;
        this.plotArea = plotArea;
    }
}
exports.Cartesian2dPlotCtorArg = Cartesian2dPlotCtorArg;


/***/ }),

/***/ "./src/plugins/cartesian2d/interleaved-point-connector/a-interleaved-connector.ts":
/*!****************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/interleaved-point-connector/a-interleaved-connector.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AInterleavedConnector = void 0;
class AInterleavedConnector {
    constructor(config, initialDataLength, bytesPerElement) {
        this.offsets = config.offsets;
        this.blockElementCount = config.blockElementCount;
        this.startIndex = this.getInitialStartIndex(config);
        this.length = this.getInitialLength(config, initialDataLength, this.startIndex);
        this.blockByteSize = bytesPerElement * this.blockElementCount;
    }
    getDescriptor() {
        return {
            offsets: this.offsets,
            byteOffset: this.getStart() * this.getBlockByteSize(),
            blockElementCount: this.getBlockElementCount(),
        };
    }
    getValue(index, offset) {
        return this.getData()[index * this.blockElementCount + offset];
    }
    setValue(index, offset, value) {
        this.getData()[index * this.blockElementCount + offset] = value;
    }
    getStart() {
        return this.startIndex;
    }
    setStart(index) {
        this.startIndex = index;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getMaximumLength() {
        return this.getData().length / this.blockElementCount;
    }
    getBlockElementCount() {
        return this.blockElementCount;
    }
    getBlockByteSize() {
        return this.blockByteSize;
    }
    getInterleavedBuffer() {
        return this.getData();
    }
    getEnd() {
        return this.getStart() + this.getLength();
    }
    getLoggableValue() {
        const buffer = this.getData();
        const getBlockElementCount = this.getBlockElementCount();
        const result = new Array(buffer.length / getBlockElementCount);
        for (let i = 0, iEnd = result.length; i < iEnd; ++i) {
            const block = result[i] = new Array(getBlockElementCount);
            for (let j = 0; j < getBlockElementCount; ++j) {
                block[j] = buffer[i * getBlockElementCount + j];
            }
        }
        return result;
    }
    getInitialStartIndex(config) {
        return config.startIndex == null
            ? 0
            : config.startIndex;
    }
    getInitialLength(config, initialDataLength, start) {
        return config.length == null
            ? ((initialDataLength - start * this.blockElementCount) / this.blockElementCount) | 0
            : config.length;
    }
}
exports.AInterleavedConnector = AInterleavedConnector;


/***/ }),

/***/ "./src/plugins/cartesian2d/interleaved-point-connector/gl-interleaved2d-point-binder.ts":
/*!**********************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/interleaved-point-connector/gl-interleaved2d-point-binder.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlInterleaved2dPointBinder = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const unpack_color_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/unpack-color-shader */ "./src/core/rendering/gl/shaders/unpack-color-shader.ts");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const empty_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/empty-shader */ "./src/core/rendering/gl/shaders/empty-shader.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_mat4_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat4-uniform */ "./src/core/rendering/gl/uniforms/gl-mat4-uniform.ts");
const gl_mat2_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat2-uniform */ "./src/core/rendering/gl/uniforms/gl-mat2-uniform.ts");
const mat2_multiply_value_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/mat2-multiply-value-shader */ "./src/core/rendering/gl/shaders/mat2-multiply-value-shader.ts");
const a_gl_instanced_binder_1 = __webpack_require__(/*! ../../../core/rendering/gl/bindings/a-gl-instanced-binder */ "./src/core/rendering/gl/bindings/a-gl-instanced-binder.ts");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
/**
 * @public
 * Provides bindings for an interleaved buffer that described points in 2d.
 *
 * @remarks
 * These may optionally have per point color and size. Where either size or color is not described by the buffer, local config
 * will be supplied in instead. The type of buffer may not be changed after creation (e.g. adding size).
 **/
class GlInterleaved2dPointBinder extends a_gl_instanced_binder_1.AGlInstancedBinder {
    constructor(bindingDescriptor, binderConfig = { pointsToBind: 1 }) {
        super();
        this.bindingDescriptor = bindingDescriptor;
        this.binderConfig = binderConfig;
        this.uniformsToBind = GlInterleaved2dPointBinder.getUniformsToBind(bindingDescriptor.offsets);
        this.bindings = this.getBindings(bindingDescriptor, binderConfig);
        this.specification = GlInterleaved2dPointBinder.generateProgram(bindingDescriptor, binderConfig);
        this.pointsBound = binderConfig.pointsToBind;
    }
    getCacheId() {
        var _a, _b;
        const preprocessorStatements = [
            "PC",
            this.binderConfig.pointsToBind,
            "interleavedPoint",
            this.bindingDescriptor.offsets.x,
            this.bindingDescriptor.offsets.y,
            (_a = this.bindingDescriptor.offsets.color) !== null && _a !== void 0 ? _a : "nco",
            (_b = this.bindingDescriptor.offsets.size) !== null && _b !== void 0 ? _b : "nso",
        ];
        return preprocessorStatements.join("_");
    }
    mergeTracePositionBuffers(binders) {
        const pointBuffer = gl_float_attribute_1.GlFloatAttribute.extractBuffer(this.bindings.pointAttributes[0]);
        for (let i = 0, iEnd = binders.length; i < iEnd; ++i) {
            const pointAttributes = binders[i].bindings.pointAttributes;
            for (let j = 0, jEnd = pointAttributes.length; j < jEnd; ++j) {
                gl_float_attribute_1.GlFloatAttribute.setBuffer(pointAttributes[j], pointBuffer);
            }
        }
    }
    initialize(entityRenderer) {
        const pointAttributes = this.bindings.pointAttributes;
        for (let i = 0, iEnd = pointAttributes.length; i < iEnd; ++i) {
            pointAttributes[i].initialize(entityRenderer);
        }
        if (this.uniformsToBind & EUniformBinding.BindDisplaySettings) {
            this.bindings.displayConfigUniform.initialize(entityRenderer);
        }
        if (this.uniformsToBind & EUniformBinding.BindSizeTransform) {
            this.bindings.sizeTransformUniform.initialize(entityRenderer);
        }
    }
    updateData(entity) {
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            rc_js_util_1._Debug.assert(entity.data.offsets.x === this.bindingDescriptor.offsets.x, "connector does not match");
            rc_js_util_1._Debug.assert(entity.data.offsets.y === this.bindingDescriptor.offsets.y, "connector does not match");
            rc_js_util_1._Debug.assert(entity.data.offsets.color === this.bindingDescriptor.offsets.color, "connector does not match");
            rc_js_util_1._Debug.assert(entity.data.offsets.size === this.bindingDescriptor.offsets.size, "connector does not match");
            rc_js_util_1._Debug.assert(entity.data.getBlockElementCount() === this.bindingDescriptor.blockElementCount, "connector does not match");
        });
        // setting one sets all as they share the same buffer
        this.bindings.pointAttributes[0].setData(entity.data.getInterleavedBuffer(), entity.changeId);
        if (this.uniformsToBind & EUniformBinding.BindDisplaySettings) {
            this.bindings.displayConfigUniform.setData(entity.graphicsSettings.pointDisplay);
        }
        if (this.uniformsToBind & EUniformBinding.BindSizeTransform) {
            this.bindings.sizeTransformUniform.setData(entity.graphicsSettings.pointSizeNormalizer.getSizeToPixelTransform());
        }
    }
    overrideColors(entityRenderer, entity) {
        const overrides = entity.graphicsSettings.pointDisplay.colorOverrides;
        const colorOffset = entity.data.offsets.color;
        if (overrides == null || colorOffset == null) {
            return;
        }
        const pointAttribute = this.bindings.pointAttributes[0];
        const changeId = entity.changeId;
        const blockByteSize = entity.data.getBlockByteSize();
        const byteOffset = colorOffset * Float32Array.BYTES_PER_ELEMENT;
        for (let i = 0, iEnd = overrides.length; i < iEnd; ++i) {
            const override = overrides[i];
            pointAttribute.overrideValues(entityRenderer, override[0] * blockByteSize + byteOffset, override[1], changeId, i);
        }
    }
    updatePointers(entity) {
        this.setPointers(entity.data.getStart(), entity.data.getBlockByteSize());
    }
    setPointers(startIndex, blockByteSize) {
        const pointAttributes = this.bindings.pointAttributes;
        const byteOffsetToStart = startIndex * blockByteSize;
        for (let i = 0, iEnd = pointAttributes.length; i < iEnd; ++i) {
            pointAttributes[i].setOffset(byteOffsetToStart + blockByteSize * i);
        }
    }
    bindUniforms(entityRenderer) {
        if (this.uniformsToBind & EUniformBinding.BindDisplaySettings) {
            this.bindings.displayConfigUniform.bind(entityRenderer);
        }
        if (this.uniformsToBind & EUniformBinding.BindSizeTransform) {
            this.bindings.sizeTransformUniform.bind(entityRenderer);
        }
    }
    bindAttributes(entityRenderer) {
        const pointAttributes = this.bindings.pointAttributes;
        for (let i = 0, iEnd = pointAttributes.length; i < iEnd; ++i) {
            pointAttributes[i].bind(entityRenderer);
        }
    }
    bindInstanced(entityRenderer, divisor, usage) {
        const pointAttributes = this.bindings.pointAttributes;
        for (let i = 0, iEnd = pointAttributes.length; i < iEnd; ++i) {
            pointAttributes[i].bindInstanced(entityRenderer, divisor, usage);
        }
    }
    resetInstancing(entityRenderer) {
        const pointAttributes = this.bindings.pointAttributes;
        for (let i = 0, iEnd = pointAttributes.length; i < iEnd; ++i) {
            pointAttributes[i].reset(entityRenderer);
        }
    }
    getBindings(bindingDescriptor, bindConfig) {
        const blockElementCount = bindingDescriptor.blockElementCount;
        const byteOffset = bindingDescriptor.byteOffset;
        const byteStride = this.binderConfig.byteStride;
        const pointBuffer = new gl_buffer_1.GlBuffer(null);
        const pointAttributes = [
            new gl_float_attribute_1.GlFloatAttribute("interleavedPoint_point", pointBuffer, blockElementCount, byteOffset, byteStride),
        ];
        for (let i = 1, iEnd = bindConfig.pointsToBind; i < iEnd; ++i) {
            pointAttributes.push(new gl_float_attribute_1.GlFloatAttribute(`interleavedPoint_point${i}`, pointBuffer, blockElementCount, byteOffset * i, byteStride));
        }
        return {
            pointAttributes: pointAttributes,
            displayConfigUniform: new gl_mat4_uniform_1.GlMat4Uniform("interleavedPoint_config", rc_js_util_1.Mat4.f32.factory.createOneEmpty()),
            sizeTransformUniform: new gl_mat2_uniform_1.GlMat2Uniform("interleavedPoint_sizeTransform", rc_js_util_1.Mat2.f32.factory.createOneEmpty()),
        };
    }
    static generateProgram(bindingDescriptor, binderConfig) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(binderConfig.pointsToBind > 0, "expected to bind points");
        const vertexShaders = [
            GlInterleaved2dPointBinder.getPreprocessorConstants(bindingDescriptor),
            unpack_color_shader_1.unpackColorShader,
            mat2_multiply_value_shader_1.mat2MultiplyValueShader,
            pointConnectorShader,
            generateAccessor(undefined),
        ];
        for (let i = 1, iEnd = binderConfig.pointsToBind; i < iEnd; ++i) {
            vertexShaders.push(generateAccessor(i));
        }
        return new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders(vertexShaders), empty_shader_1.emptyShader);
    }
    static getPreprocessorConstants(bindingDescriptor) {
        const preprocessorStatements = [
            gl_shader_1.GlShader.getShaderInt("X_OFFSET", bindingDescriptor.offsets.x),
            gl_shader_1.GlShader.getShaderInt("Y_OFFSET", bindingDescriptor.offsets.y),
        ];
        if (bindingDescriptor.offsets.color != null) {
            preprocessorStatements.push(gl_shader_1.GlShader.getShaderInt("COLOR_OFFSET", bindingDescriptor.offsets.color));
        }
        if (bindingDescriptor.offsets.size != null) {
            preprocessorStatements.push(gl_shader_1.GlShader.getShaderInt("SIZE_OFFSET", bindingDescriptor.offsets.size));
        }
        return new gl_shader_1.GlShader(preprocessorStatements.join("\n"));
    }
    static getUniformsToBind(offsets) {
        const shouldBindDisplaySettings = (offsets.color == null || offsets.size == null)
            ? EUniformBinding.BindDisplaySettings
            : 0;
        const shouldBindSizeTransform = (offsets.size != null)
            ? EUniformBinding.BindSizeTransform
            : 0;
        return shouldBindDisplaySettings | shouldBindSizeTransform;
    }
}
(0, tslib_1.__decorate)([
    rc_js_util_1.Once
], GlInterleaved2dPointBinder.prototype, "getCacheId", null);
exports.GlInterleaved2dPointBinder = GlInterleaved2dPointBinder;
const pointConnectorShader = new gl_shader_1.GlShader(
// @formatter:off
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
`
/* === interleaved point connector === */
uniform highp mat4 interleavedPoint_config;
uniform highp mat2 interleavedPoint_sizeTransform;

#define GET_POSITION(NAME, SOURCE) vec2 NAME (void) \\
{ \\
    return vec2( SOURCE [X_OFFSET], SOURCE [Y_OFFSET]); \\
}
#define GET_SIZE_FROM_UNIFORM(NAME) float NAME (void) \\
{ \\
    return interleavedPoint_config[0][0]; \\
}
#define GET_SIZE_FROM_ATTRIBUTE(NAME, SOURCE) float NAME (void) \\
{ \\
    return mat2MultiplyValue(interleavedPoint_sizeTransform, SOURCE [SIZE_OFFSET]); \\
}
# define GET_COLOR_FROM_UNIFORM(NAME) vec4 NAME (void) \\
{ \\
    return vec4(interleavedPoint_config[1]); \\
}
# define GET_COLOR_FROM_ATTRIBUTE(NAME, SOURCE) vec4 NAME (void) \\
{ \\
 return unpackColor( SOURCE [COLOR_OFFSET]); \\
}
`);
function generateAccessor(index) {
    const postfix = index == null ? "" : index.toString();
    return new gl_shader_1.GlShader(`
ATTRIBUTE highp vec4 interleavedPoint_point${postfix};

GET_POSITION(pointConnector_getPosition${postfix}, interleavedPoint_point${postfix})

#ifdef SIZE_OFFSET
GET_SIZE_FROM_ATTRIBUTE(pointConnector_getSize${postfix}, interleavedPoint_point${postfix})
#else
GET_SIZE_FROM_UNIFORM(pointConnector_getSize${postfix})
#endif

#ifdef COLOR_OFFSET
GET_COLOR_FROM_ATTRIBUTE(pointConnector_getColor${postfix}, interleavedPoint_point${postfix})
#else
GET_COLOR_FROM_UNIFORM(pointConnector_getColor${postfix})
#endif
`);
}
var EUniformBinding;
(function (EUniformBinding) {
    EUniformBinding[EUniformBinding["BindDisplaySettings"] = 1] = "BindDisplaySettings";
    EUniformBinding[EUniformBinding["BindSizeTransform"] = 2] = "BindSizeTransform";
})(EUniformBinding || (EUniformBinding = {}));


/***/ }),

/***/ "./src/plugins/cartesian2d/interleaved-point-connector/hit-testable-shared-interleaved-point.ts":
/*!******************************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/interleaved-point-connector/hit-testable-shared-interleaved-point.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HitTestableSharedInterleavedPoint = void 0;
const line_entity_hit_tester_1 = __webpack_require__(/*! ./line-entity-hit-tester */ "./src/plugins/cartesian2d/interleaved-point-connector/line-entity-hit-tester.ts");
class HitTestableSharedInterleavedPoint {
    constructor(indexer) {
        this.indexer = indexer;
    }
    hitTest(entity, indexOfFirstPoint, cssPosition, updateArg) {
        return line_entity_hit_tester_1.LineEntityHitTester.hitTestLineEntity(entity, indexOfFirstPoint, cssPosition, updateArg);
    }
    index(entity, updateArg, tree) {
        this.indexer.update(tree, entity, updateArg.interactionTransforms.dataToInteractiveArea);
    }
}
exports.HitTestableSharedInterleavedPoint = HitTestableSharedInterleavedPoint;


/***/ }),

/***/ "./src/plugins/cartesian2d/interleaved-point-connector/line-entity-hit-tester.ts":
/*!***************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/interleaved-point-connector/line-entity-hit-tester.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineEntityHitTester = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class LineEntityHitTester {
    /**
     * @returns true if the cssPosition is within the line. Does not consider line caps.
     */
    static hitTestLineEntity(entity, indexOfFirstPoint, cssPosition, updateArg) {
        const xOffset = entity.data.offsets.x;
        const yOffset = entity.data.offsets.y;
        const dataTransform = updateArg.interactionTransforms.dataToInteractiveArea;
        LineEntityHitTester.a.update(dataTransform.getVec3MultiplyX(entity.data.getValue(indexOfFirstPoint, xOffset)), dataTransform.getVec3MultiplyY(entity.data.getValue(indexOfFirstPoint, yOffset)));
        LineEntityHitTester.b.update(dataTransform.getVec3MultiplyX(entity.data.getValue(indexOfFirstPoint + 1, xOffset)), dataTransform.getVec3MultiplyY(entity.data.getValue(indexOfFirstPoint + 1, yOffset)));
        const ap = cssPosition.subtract(LineEntityHitTester.a, LineEntityHitTester.ap);
        const bp = cssPosition.subtract(LineEntityHitTester.b, LineEntityHitTester.bp);
        const ab = LineEntityHitTester.b.subtract(LineEntityHitTester.a, LineEntityHitTester.ab);
        const distanceFromLine = LineEntityHitTester.getPerpendicularDistanceToLineSegment(ab, bp, ap);
        const sizeOffset = entity.data.offsets.size;
        let cssLineWidthAtJoin;
        if (sizeOffset != null) {
            const sizeTransform = entity.graphicsSettings.pointSizeNormalizer.getSizeToPixelTransform();
            const sizeStart = sizeTransform.getVec2MultiplyX(entity.data.getValue(indexOfFirstPoint, sizeOffset));
            const sizeEnd = sizeTransform.getVec2MultiplyX(entity.data.getValue(indexOfFirstPoint + 1, sizeOffset));
            const segmentLength = ab.getMagnitude();
            const sizeScalingFactor = (sizeEnd - sizeStart) / segmentLength;
            const apLength = ap.getMagnitude();
            // the length of the segment ab up to the intersection of the line perpendicular to ab that passes through a
            const intersectionLength = Math.sqrt(apLength * apLength - distanceFromLine * distanceFromLine);
            cssLineWidthAtJoin = (sizeStart + sizeScalingFactor * intersectionLength) * 0.5;
        }
        else {
            cssLineWidthAtJoin = entity.graphicsSettings.pointDisplay.getPixelSize() * 0.5;
        }
        return distanceFromLine <= cssLineWidthAtJoin;
    }
    static getPerpendicularDistanceToLineSegment(ab, bp, ap) {
        if (ab.dotProduct(bp) > 0) {
            // outside of line segment
            return Infinity;
        }
        if (ab.dotProduct(ap) < 0) {
            // outside of line segment
            return Infinity;
        }
        else {
            // is perpendicular to line segment
            const x1 = ab.getX();
            const y1 = ab.getY();
            return Math.abs(x1 * ap.getY() - y1 * ap.getX()) / Math.sqrt(x1 * x1 + y1 * y1);
        }
    }
}
exports.LineEntityHitTester = LineEntityHitTester;
// start point of line
LineEntityHitTester.a = rc_js_util_1.Vec2.f64.factory.createOneEmpty();
// end point of line
LineEntityHitTester.b = rc_js_util_1.Vec2.f64.factory.createOneEmpty();
// line vector
LineEntityHitTester.ab = rc_js_util_1.Vec2.f64.factory.createOneEmpty();
// line start to pointer
LineEntityHitTester.ap = rc_js_util_1.Vec2.f64.factory.createOneEmpty();
// line end to pointer
LineEntityHitTester.bp = rc_js_util_1.Vec2.f64.factory.createOneEmpty();


/***/ }),

/***/ "./src/plugins/cartesian2d/interleaved-point-connector/shared-interleaved-connector.ts":
/*!*********************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/interleaved-point-connector/shared-interleaved-connector.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedInterleavedConnector = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const a_interleaved_connector_1 = __webpack_require__(/*! ./a-interleaved-connector */ "./src/plugins/cartesian2d/interleaved-point-connector/a-interleaved-connector.ts");
class SharedInterleavedConnector extends a_interleaved_connector_1.AInterleavedConnector {
    constructor(prefix, wrapper, sharedArray, config) {
        super(config, sharedArray.length, sharedArray.elementByteSize);
        this.cSetStart = `_${prefix}_setStart`;
        this.cSetLength = `_${prefix}_setLength`;
        this.wrapper = wrapper;
        this.sharedArray = sharedArray;
        const pointer = this.initialize(prefix, wrapper, sharedArray.sharedObject.getPtr());
        this.sharedObject = new rc_js_util_1.ReferenceCountedPtr(false, pointer);
        this.sharedObject.registerOnFreeListener(() => this.wrapper.instance._f32InterleavedConnector_delete(this.sharedObject.getPtr()));
        this.sharedObject.bindLifecycle(this.sharedArray.sharedObject);
    }
    static createOneExistingF32SharedArray(wrapper, sharedArray, config, owning) {
        const connector = new SharedInterleavedConnector("f32InterleavedConnector", wrapper, sharedArray, config);
        if (owning) {
            sharedArray.sharedObject.release();
        }
        return connector;
    }
    static createOneF32(wrapper, size, config) {
        const sharedArray = rc_js_util_1.SharedArray.createOneF32(wrapper, size, true);
        SharedInterleavedConnector.createOneExistingF32SharedArray(wrapper, sharedArray, config, true);
        return new SharedInterleavedConnector("f32InterleavedConnector", wrapper, sharedArray, config);
    }
    static createOneExistingF64SharedArray(wrapper, sharedArray, config, owning) {
        const connector = new SharedInterleavedConnector("f64InterleavedConnector", wrapper, sharedArray, config);
        if (owning) {
            sharedArray.sharedObject.release();
        }
        return connector;
    }
    static createOneF64(wrapper, size, config) {
        const sharedArray = rc_js_util_1.SharedArray.createOneF64(wrapper, size, true);
        SharedInterleavedConnector.createOneExistingF64SharedArray(wrapper, sharedArray, config, true);
        return new SharedInterleavedConnector("f64InterleavedConnector", wrapper, sharedArray, config);
    }
    getInterleavedBuffer() {
        return this.sharedArray.getInstance();
    }
    getData() {
        return this.sharedArray.getInstance();
    }
    setStart(index) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(!this.sharedObject.getIsDestroyed(), "attempted modification of destroyed object");
        super.setStart(index);
        this.wrapper.instance[this.cSetStart](this.sharedObject.getPtr(), index);
    }
    setLength(length) {
        DEBUG_MODE && rc_js_util_1._Debug.assert(!this.sharedObject.getIsDestroyed(), "attempted modification of destroyed object");
        super.setLength(length);
        this.wrapper.instance[this.cSetLength](this.sharedObject.getPtr(), length);
    }
    initialize(prefix, wrapper, sharedArrayPtr) {
        const ctorArg = new SharedInterleavedConnectorArg(wrapper, this, sharedArrayPtr);
        const ptr = wrapper.instance[`_${prefix}_createOne`](ctorArg.sharedObject.getPtr());
        ctorArg.sharedObject.release();
        DEBUG_MODE && rc_js_util_1._Debug.assert(ctorArg.sharedObject.getIsDestroyed(), "expected arg to be destroyed after initialization");
        return ptr;
    }
}
exports.SharedInterleavedConnector = SharedInterleavedConnector;
class SharedInterleavedConnectorArg {
    constructor(wrapper, connector, sharedArrayPtr) {
        this.rvp = rc_js_util_1.RawVoidPointer.createOne(wrapper, Uint32Array.BYTES_PER_ELEMENT * 5, true);
        this.sharedObject = this.rvp.sharedObject;
        const dataView = this.rvp.getDataView();
        dataView.setUint32(0, sharedArrayPtr, SharedInterleavedConnectorArg.littleEndian);
        dataView.setUint32(Uint32Array.BYTES_PER_ELEMENT, connector.getStart(), SharedInterleavedConnectorArg.littleEndian);
        dataView.setUint32(Uint32Array.BYTES_PER_ELEMENT * 2, connector.getLength(), SharedInterleavedConnectorArg.littleEndian);
        dataView.setUint32(Uint32Array.BYTES_PER_ELEMENT * 3, connector.getMaximumLength(), SharedInterleavedConnectorArg.littleEndian);
        dataView.setUint32(Uint32Array.BYTES_PER_ELEMENT * 4, connector.getBlockElementCount(), SharedInterleavedConnectorArg.littleEndian);
    }
}
SharedInterleavedConnectorArg.littleEndian = rc_js_util_1.isLittleEndian;


/***/ }),

/***/ "./src/plugins/cartesian2d/interleaved-point-connector/shared-interleaved2d-line-quad-indexer.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/plugins/cartesian2d/interleaved-point-connector/shared-interleaved2d-line-quad-indexer.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedInterleaved2dLineQuadIndexer = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class SharedInterleaved2dLineQuadIndexer {
    constructor(wrapper, prefix) {
        this.wrapper = wrapper;
        this.cIndex = `_${prefix}_index`;
        const offsets = this.wrapper.instance[`_${prefix}_getOffsets`]();
        const size = (offsets & 0xFF);
        this.connectorOffset = (offsets >>> 8) & 0xFF;
        this.offsetsOffset = (offsets >>> 16) & 0xFF;
        this.transformOffset = (offsets >>> 24) & 0xFF;
        this.rvp = rc_js_util_1.RawVoidPointer.createOne(wrapper, size, true);
        this.sharedObject = this.rvp.sharedObject;
    }
    static createOneF32(wrapper) {
        return new SharedInterleaved2dLineQuadIndexer(wrapper, "f32Interleaved2dLineQuadIndexer");
    }
    static createOneF64(wrapper) {
        return new SharedInterleaved2dLineQuadIndexer(wrapper, "f64Interleaved2dLineQuadIndexer");
    }
    update(tree, entity, transform) {
        const connector = entity.data;
        const dataView = this.rvp.getDataView();
        dataView.setUint32(0, tree.sharedObject.getPtr(), SharedInterleaved2dLineQuadIndexer.littleEndian);
        dataView.setUint32(this.connectorOffset, connector.sharedObject.getPtr(), SharedInterleaved2dLineQuadIndexer.littleEndian);
        dataView.setUint8(this.offsetsOffset, connector.offsets.x);
        dataView.setUint8(this.offsetsOffset + 1, connector.offsets.y);
        transform.copyToBuffer(dataView, this.transformOffset, SharedInterleaved2dLineQuadIndexer.littleEndian);
        this.wrapper.instance[this.cIndex](this.rvp.sharedObject.getPtr(), entity.hitTestId, entity.groupMask);
    }
}
exports.SharedInterleaved2dLineQuadIndexer = SharedInterleaved2dLineQuadIndexer;
SharedInterleaved2dLineQuadIndexer.littleEndian = rc_js_util_1.isLittleEndian;


/***/ }),

/***/ "./src/plugins/cartesian2d/point2d-subcategory.ts":
/*!********************************************************!*\
  !*** ./src/plugins/cartesian2d/point2d-subcategory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Point2dSubcategory = void 0;
const get_range_from_indexed_connector_1 = __webpack_require__(/*! ../data-connectors/indexable/get-range-from-indexed-connector */ "./src/plugins/data-connectors/indexable/get-range-from-indexed-connector.ts");
const t_point2d_size_normalizer_trait_1 = __webpack_require__(/*! ./traits/t-point2d-size-normalizer-trait */ "./src/plugins/cartesian2d/traits/t-point2d-size-normalizer-trait.ts");
class Point2dSubcategory {
    constructor(pixelSizeRange) {
        this.normalization = new t_point2d_size_normalizer_trait_1.Point2dSizeNormalizer(pixelSizeRange);
    }
    onEntityAdded(entity) {
        const range = (0, get_range_from_indexed_connector_1.getRangeFromIndexedConnector)(entity.data);
        if (range != null) {
            this.normalization.extendDataRange(range.getMin(), range.getMax());
        }
    }
    onEntityRemoved() {
        // no way to lower range from here
    }
}
exports.Point2dSubcategory = Point2dSubcategory;


/***/ }),

/***/ "./src/plugins/cartesian2d/quad-tree/quad-element-shared-object.ts":
/*!*************************************************************************!*\
  !*** ./src/plugins/cartesian2d/quad-tree/quad-element-shared-object.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuadElementSharedObject = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class QuadElementSharedObject {
    constructor(wrapper) {
        this.rvp = rc_js_util_1.RawVoidPointer.createOne(wrapper, QuadElementSharedObject.byteSize, true);
        this.sharedObject = this.rvp.sharedObject;
    }
    update(entityId, dataId, filterMask) {
        const dataView = this.rvp.getDataView();
        dataView.setUint32(0, entityId, QuadElementSharedObject.littleEndian);
        dataView.setUint32(Uint32Array.BYTES_PER_ELEMENT, dataId, QuadElementSharedObject.littleEndian);
        dataView.setUint32(Uint32Array.BYTES_PER_ELEMENT * 2, filterMask, QuadElementSharedObject.littleEndian);
    }
}
exports.QuadElementSharedObject = QuadElementSharedObject;
QuadElementSharedObject.elementCount = 3;
QuadElementSharedObject.byteSize = Uint32Array.BYTES_PER_ELEMENT * QuadElementSharedObject.elementCount;
QuadElementSharedObject.littleEndian = rc_js_util_1.isLittleEndian;


/***/ }),

/***/ "./src/plugins/cartesian2d/quad-tree/range2d-shared-object.ts":
/*!********************************************************************!*\
  !*** ./src/plugins/cartesian2d/quad-tree/range2d-shared-object.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range2dSharedObject = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class Range2dSharedObject {
    constructor(wrapper, size) {
        this.byteSize = size;
        this.rvp = rc_js_util_1.RawVoidPointer.createOne(wrapper, size, true);
        this.sharedObject = this.rvp.sharedObject;
    }
    static createOneF32(wrapper) {
        return new Range2dSharedObject(wrapper, Float32Array.BYTES_PER_ELEMENT * 4);
    }
    static createOneF64(wrapper) {
        return new Range2dSharedObject(wrapper, Float64Array.BYTES_PER_ELEMENT * 4);
    }
    update(range) {
        range.copyToBuffer(this.rvp.getDataView(), 0, Range2dSharedObject.littleEndian);
    }
}
exports.Range2dSharedObject = Range2dSharedObject;
Range2dSharedObject.littleEndian = rc_js_util_1.isLittleEndian;


/***/ }),

/***/ "./src/plugins/cartesian2d/quad-tree/shared-entity-quad-tree.ts":
/*!**********************************************************************!*\
  !*** ./src/plugins/cartesian2d/quad-tree/shared-entity-quad-tree.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedEntityQuadTree = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const shared_quad_tree_1 = __webpack_require__(/*! ./shared-quad-tree */ "./src/plugins/cartesian2d/quad-tree/shared-quad-tree.ts");
class SharedEntityQuadTree {
    constructor(wrapper, maxDepth, maxElementsPerNode) {
        this.hitTestArg = null;
        this.entities = [];
        this.uniqueEntities = new Set();
        this.isDirty = true;
        this.sharedTree = shared_quad_tree_1.SharedQuadTree.createOneF32(wrapper, maxDepth, maxElementsPerNode);
        this.sharedObject = this.sharedTree.sharedObject;
    }
    update(hitTestArg) {
        this.hitTestArg = hitTestArg;
        if (this.isDirty) {
            this.regenerateIds();
        }
    }
    addEntity(entity) {
        this.uniqueEntities.add(entity);
        this.isDirty = true;
    }
    removeEntity(entity) {
        this.uniqueEntities.delete(entity);
        this.isDirty = true;
    }
    regenerateIds() {
        const uniqueEntities = this.uniqueEntities;
        const entities = this.entities = rc_js_util_1._Set.valuesToArray(uniqueEntities);
        for (let i = 0, iEnd = entities.length; i < iEnd; ++i) {
            entities[i].hitTestId = i;
        }
        this.isDirty = false;
    }
}
exports.SharedEntityQuadTree = SharedEntityQuadTree;


/***/ }),

/***/ "./src/plugins/cartesian2d/quad-tree/shared-quad-tree.ts":
/*!***************************************************************!*\
  !*** ./src/plugins/cartesian2d/quad-tree/shared-quad-tree.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedQuadTree = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const range2d_shared_object_1 = __webpack_require__(/*! ./range2d-shared-object */ "./src/plugins/cartesian2d/quad-tree/range2d-shared-object.ts");
const quad_element_shared_object_1 = __webpack_require__(/*! ./quad-element-shared-object */ "./src/plugins/cartesian2d/quad-tree/quad-element-shared-object.ts");
class SharedQuadTree {
    constructor(wrapper, maxDepth, maxElementsPerNode, maximumResultCount) {
        this.wrapper = wrapper;
        this.maximumResultCount = maximumResultCount;
        this.onMemoryResize = () => {
            this.results = this.getResultArray();
        };
        const treePointer = wrapper.instance._f32QuadTree_createTree(maxDepth, maxElementsPerNode);
        this.sharedObject = new rc_js_util_1.ReferenceCountedPtr(false, treePointer);
        this.sharedObject.registerOnFreeListener(this.wrapper.memoryResize.addTemporaryListener(this));
        this.sharedObject.registerOnFreeListener(() => this.wrapper.instance._f32QuadTree_delete(this.sharedObject.getPtr()));
        DEBUG_MODE && rc_js_util_1._Debug.runBlock(() => {
            const protectedView = new rc_js_util_1.DebugProtectedView(["BYTES_PER_ELEMENT"], "Shared quad tree - memory resize danger, refresh instance with getResults");
            rc_js_util_1.DebugSharedObjectChecks.registerWithCleanup(this, protectedView, "shared array");
        });
        this.sharedRange2d = range2d_shared_object_1.Range2dSharedObject.createOneF32(wrapper);
        this.sharedObject.takeOwnership(this.sharedRange2d.sharedObject);
        this.sharedQuadElement = new quad_element_shared_object_1.QuadElementSharedObject(wrapper);
        this.sharedObject.takeOwnership(this.sharedQuadElement.sharedObject);
        this.maximumResultCount = SharedQuadTree.getResultCount(maximumResultCount);
        this.resultAddress = this.wrapper.instance._quadTree_getResultAddress();
        this.results = this.getResultArray();
    }
    static createOneF32(wrapper, maxDepth, maxElementsPerNode, maximumResultCount) {
        return new SharedQuadTree(wrapper, maxDepth, maxElementsPerNode, maximumResultCount);
    }
    getResults() {
        if (DEBUG_MODE) {
            return RcJsUtilDebug.protectedViews
                .getValue(this)
                .createProtectedView(this.results);
        }
        else {
            return this.results;
        }
    }
    addBoundingBox(aabb, entityId, dataId, filterMask) {
        this.sharedQuadElement.update(entityId, dataId, filterMask);
        this.sharedRange2d.update(aabb);
        this.wrapper.instance._f32QuadTree_insertRange(this.sharedObject.getPtr(), this.sharedRange2d.sharedObject.getPtr(), this.sharedQuadElement.sharedObject.getPtr());
    }
    setTopLevel(range2d) {
        this.sharedRange2d.update(range2d);
        this.wrapper.instance._f32QuadTree_setTopLevel(this.sharedObject.getPtr(), this.sharedRange2d.sharedObject.getPtr());
    }
    setOptions(maxDepth, maxElementsPerNode) {
        this.wrapper.instance._quadTree_setOptions(this.sharedObject.getPtr(), maxDepth, maxElementsPerNode);
    }
    queryPoint(point, filterMask) {
        return this.wrapper.instance._f32QuadTree_queryPoint(this.sharedObject.getPtr(), point.getX(), point.getY(), filterMask);
    }
    getQuadElementCount() {
        return this.wrapper.instance._quadTree_getQuadElementCount(this.sharedObject.getPtr());
    }
    getResultArray() {
        return new Uint32Array(this.wrapper.memory.buffer, this.resultAddress, this.maximumResultCount);
    }
    static getResultCount(maximumResultCount) {
        const theoreticalMax = 4096 * 4 * quad_element_shared_object_1.QuadElementSharedObject.byteSize;
        return rc_js_util_1._Math.min(maximumResultCount !== null && maximumResultCount !== void 0 ? maximumResultCount : theoreticalMax, theoreticalMax);
    }
}
exports.SharedQuadTree = SharedQuadTree;


/***/ }),

/***/ "./src/plugins/cartesian2d/scene2d-category-sorted.ts":
/*!************************************************************!*\
  !*** ./src/plugins/cartesian2d/scene2d-category-sorted.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene2dCategorySorted = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class Scene2dCategorySorted {
    constructor(update2dGroup) {
        this.update2dGroup = update2dGroup;
    }
    getSortedCategories(updateGroup) {
        return updateGroup.categories
            .toArray()
            .slice()
            .sort((a, b) => a.zIndex - b.zIndex);
    }
    getEntitiesByComponents(category) {
        const entitiesByCollection = rc_js_util_1._Array.collect(category.getEntities(), new Map(), (entitiesByComponent, entity) => {
            const component = this.update2dGroup.graphicsComponents.getComponent(entity);
            this.collectComponents(entitiesByComponent, component, entity);
        });
        return Array.from(entitiesByCollection.entries());
    }
    collectComponents(entitiesByComponent, component, entity) {
        const subComponents = component.subComponents;
        if (subComponents != null && component.groupUpdatesByEntity !== true) {
            const components = subComponents.getSubComponents();
            for (let i = 0, iEnd = components.length; i < iEnd; ++i) {
                this.collectComponents(entitiesByComponent, components[i], entity);
            }
        }
        else {
            rc_js_util_1._Map.push(entitiesByComponent, component, entity);
        }
    }
    update() {
        const zRange = this.getZRange(this.update2dGroup);
        const squashFactor = -1 / rc_js_util_1._Math.max(zRange, 1);
        let prev = 0;
        const categories = this.getSortedCategories(this.update2dGroup);
        for (let i = 0, iEnd = categories.length; i < iEnd; i++) {
            const category = categories[i];
            const entities = category.getEntities();
            for (let j = 0, jEnd = entities.length; j < jEnd; j++) {
                const settings = entities[j].graphicsSettings;
                DEBUG_MODE && rc_js_util_1._Debug.assert(settings.zIndexRel >= 0, "expected ZIndexRel to be set");
                settings.zIndexAbs = (prev + settings.zIndexRel) * squashFactor;
            }
            prev += category.entityZIndexRange + 1;
        }
    }
    getZRange(updateGroup) {
        let range = 0;
        const categories = updateGroup.categories.toArray();
        for (let i = 0, iEnd = categories.length; i < iEnd; i++) {
            const category = categories[i];
            if (category.getEntities().length !== 0) {
                range += category.entityZIndexRange + 1;
            }
        }
        return range;
    }
}
exports.Scene2dCategorySorted = Scene2dCategorySorted;


/***/ }),

/***/ "./src/plugins/cartesian2d/series/canvas-line-graphics-component.ts":
/*!**************************************************************************!*\
  !*** ./src/plugins/cartesian2d/series/canvas-line-graphics-component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasLineGraphicsComponent = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
class CanvasLineGraphicsComponent {
    constructor() {
        this.specification = {};
    }
    getCacheId() {
        return "CanvasLine";
    }
    initialize() {
        // no action needed
    }
    resetState() {
        // no action needed
    }
    onBeforeUpdate() {
        // no action needed
    }
    update(entity, renderer, updateArg) {
        if (entity.data.getLength() < 2) {
            return;
        }
        renderer.context.save();
        if (entity.data.getLength() < 3 || entity.data.offsets.size == null) {
            CanvasLineGraphicsComponent.drawConstantSizeLine(entity, renderer.context, updateArg);
        }
        else {
            CanvasLineGraphicsComponent.drawLineWithPointSize(entity, renderer.context, updateArg, entity.data.offsets.size);
        }
        renderer.context.restore();
    }
    /**#
     * Only works with 3 points or more.
     */
    static drawLineWithPointSize(entity, context, updateArg, sizeOffset) {
        context.fillStyle = rc_js_util_1.RgbaColorPacker.makeDomColorString(entity.graphicsSettings.pointDisplay
            .getColor()
            .getPackedRGBAColor(true));
        const connector = entity.data;
        const xOffset = connector.offsets.x;
        const yOffset = connector.offsets.y;
        const colorOffset = connector.offsets.color;
        const dataWorld = updateArg.drawTransforms.dataToInteractiveArea;
        const sizeTransform = entity.graphicsSettings.pointSizeNormalizer.getSizeToPixelTransform();
        const start = connector.getStart();
        const getPoint = (index) => {
            return rc_js_util_1.Vec2.f64.factory.createOne(dataWorld.getVec3MultiplyX(connector.getValue(index, xOffset)), dataWorld.getVec3MultiplyY(connector.getValue(index, yOffset)));
        };
        let p1 = getPoint(start);
        const p1size = sizeTransform.getVec2MultiplyX(connector.getValue(start, sizeOffset)) * 0.5;
        let p2 = getPoint(start + 1);
        let p2size = sizeTransform.getVec2MultiplyX(connector.getValue(start + 1, sizeOffset)) * 0.5;
        let p3 = getPoint(start + 2);
        let l1Normal = CanvasLineGraphicsComponent.getLineNormal(p1, p2, rc_js_util_1.Vec2.f64.factory.createOneEmpty());
        let l2Normal = CanvasLineGraphicsComponent.getLineNormal(p2, p3, rc_js_util_1.Vec2.f64.factory.createOneEmpty());
        const cap = CanvasLineGraphicsComponent.normalOfAddition(l1Normal, l2Normal, rc_js_util_1.Vec2.f64.factory.createOneEmpty());
        context.beginPath();
        CanvasLineGraphicsComponent.moveTo(context, p1, l1Normal, -p1size);
        CanvasLineGraphicsComponent.lineTo(context, p1, l1Normal, p1size);
        for (let i = start + 2, iEnd = connector.getEnd() - 1; i < iEnd; ++i) {
            CanvasLineGraphicsComponent.lineTo(context, p2, cap, p2size);
            CanvasLineGraphicsComponent.lineTo(context, p2, cap, -p2size);
            CanvasLineGraphicsComponent.closeSegment(connector, context, colorOffset, i);
            CanvasLineGraphicsComponent.moveTo(context, p2, cap, -p2size);
            CanvasLineGraphicsComponent.lineTo(context, p2, cap, p2size);
            const pointTmp = p1;
            p1 = p2;
            p2 = p3;
            p2size = sizeTransform.getVec2MultiplyX(connector.getValue(i, sizeOffset)) * 0.5;
            const lineTmp = l1Normal;
            l1Normal = l2Normal;
            pointTmp[0] = dataWorld.getVec3MultiplyX(connector.getValue(i + 1, xOffset));
            pointTmp[1] = dataWorld.getVec3MultiplyY(connector.getValue(i + 1, yOffset));
            p3 = pointTmp;
            l2Normal = CanvasLineGraphicsComponent.getLineNormal(p2, p3, lineTmp);
            CanvasLineGraphicsComponent.normalOfAddition(l1Normal, l2Normal, cap);
        }
        CanvasLineGraphicsComponent.lineTo(context, p2, cap, p2size);
        CanvasLineGraphicsComponent.lineTo(context, p2, cap, -p2size);
        CanvasLineGraphicsComponent.closeSegment(connector, context, colorOffset, connector.getEnd() - 2);
        const last = connector.getEnd() - 1;
        p3 = getPoint(last);
        const p3size = sizeTransform.getVec2MultiplyX(connector.getValue(last, sizeOffset)) * 0.5;
        l2Normal = CanvasLineGraphicsComponent.getLineNormal(p2, p3, l2Normal);
        CanvasLineGraphicsComponent.moveTo(context, p2, cap, p2size);
        CanvasLineGraphicsComponent.lineTo(context, p2, cap, -p2size);
        CanvasLineGraphicsComponent.lineTo(context, p3, l2Normal, -p3size);
        CanvasLineGraphicsComponent.lineTo(context, p3, l2Normal, p3size);
        CanvasLineGraphicsComponent.closeSegment(connector, context, colorOffset, connector.getEnd() - 1);
        if (colorOffset == null) {
            context.fillStyle = rc_js_util_1.RgbaColorPacker.makeDomColorString(entity.graphicsSettings.pointDisplay.getColor().getPackedRGBAColor());
            context.fill();
        }
    }
    static closeSegment(connector, context, colorOffset, index) {
        context.closePath();
        if (colorOffset != null) {
            context.fillStyle = rc_js_util_1.RgbaColorPacker.makeDomColorString(connector.getValue(index, colorOffset));
            context.fill();
            context.beginPath();
        }
    }
    static normalOfAddition(a, b, result) {
        return a
            .add(b, CanvasLineGraphicsComponent.tmp)
            .normalize(result);
    }
    static getLineNormal(p1, p2, result) {
        return p2
            .subtract(p1, CanvasLineGraphicsComponent.tmp)
            .normalize(CanvasLineGraphicsComponent.tmp)
            .getNormal(result);
    }
    static moveTo(context, vec, offset, scaleFactor) {
        offset.scalarMultiply(scaleFactor, CanvasLineGraphicsComponent.tmp);
        vec.add(CanvasLineGraphicsComponent.tmp, CanvasLineGraphicsComponent.tmp);
        context.moveTo(CanvasLineGraphicsComponent.tmp.getX(), CanvasLineGraphicsComponent.tmp.getY());
    }
    static lineTo(context, vec, offset, scaleFactor) {
        offset.scalarMultiply(scaleFactor, CanvasLineGraphicsComponent.tmp);
        vec.add(CanvasLineGraphicsComponent.tmp, CanvasLineGraphicsComponent.tmp);
        context.lineTo(CanvasLineGraphicsComponent.tmp.getX(), CanvasLineGraphicsComponent.tmp.getY());
    }
    static drawConstantSizeLine(entity, context, updateArg) {
        const getLineColorFromData = CanvasLineGraphicsComponent.getLineColorFromData;
        const connector = entity.data;
        const xOffset = connector.offsets.x;
        const yOffset = connector.offsets.y;
        const colorOffset = connector.offsets.color;
        const dataWorld = updateArg.drawTransforms.dataToInteractiveArea;
        const startIndex = connector.getStart();
        let xCanvas = dataWorld.getVec3MultiplyX(connector.getValue(startIndex, xOffset));
        let yCanvas = dataWorld.getVec3MultiplyY(connector.getValue(startIndex, yOffset));
        const defaultColor = rc_js_util_1.RgbaColorPacker.makeDomColorString(entity.graphicsSettings.pointDisplay
            .getColor()
            .getPackedRGBAColor(true));
        if (colorOffset == null) {
            context.strokeStyle = defaultColor;
        }
        context.beginPath();
        context.moveTo(xCanvas, yCanvas);
        for (let i = startIndex + 1, iEnd = connector.getEnd(); i < iEnd; ++i) {
            xCanvas = dataWorld.getVec3MultiplyX(connector.getValue(i, xOffset));
            yCanvas = dataWorld.getVec3MultiplyY(connector.getValue(i, yOffset));
            if (colorOffset != null) {
                context.strokeStyle = getLineColorFromData(connector, i, colorOffset);
                context.lineTo(xCanvas, yCanvas);
                context.stroke();
                context.beginPath();
                context.moveTo(xCanvas, yCanvas);
            }
            else {
                context.lineTo(xCanvas, yCanvas);
            }
        }
        if (colorOffset != null) {
            context.stroke();
        }
    }
    static getLineColorFromData(connector, index, offset) {
        return rc_js_util_1.RgbaColorPacker.makeDomColorString(connector.getValue(index, offset));
    }
}
exports.CanvasLineGraphicsComponent = CanvasLineGraphicsComponent;
CanvasLineGraphicsComponent.tmp = new rc_js_util_1.Vec2.f64();


/***/ }),

/***/ "./src/plugins/cartesian2d/series/gl-capless-line-graphics-component.ts":
/*!******************************************************************************!*\
  !*** ./src/plugins/cartesian2d/series/gl-capless-line-graphics-component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlCaplessLineGraphicsComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const generate2_lined_normal_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/generate2-lined-normal-shader */ "./src/core/rendering/gl/shaders/generate2-lined-normal-shader.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const gl_mat3_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat3-uniform */ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts");
const mat3_multiply_vec2_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/mat3-multiply-vec2-shader */ "./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
class GlCaplessLineGraphicsComponent {
    constructor(cameraBinder, indexedDataBinder) {
        this.cameraBinder = cameraBinder;
        this.indexedDataBinder = indexedDataBinder;
        DEBUG_MODE && rc_js_util_1._Debug.assert(indexedDataBinder.pointsBound === 2, "requires 2 point binder");
        this.specification = gl_program_specification_1.GlProgramSpecification.mergeProgramSpecifications([
            cameraBinder.specification,
            indexedDataBinder.specification,
            caplessProgramSpecification,
        ]);
        this.bindings = GlCaplessLineGraphicsComponent.getBindings();
    }
    getCacheId() {
        return [
            "CaplessLine",
            this.cameraBinder.getCacheId(),
            this.indexedDataBinder.getCacheId(),
        ].join("_");
    }
    initialize(entityRenderer) {
        this.cameraBinder.initialize(entityRenderer);
        this.indexedDataBinder.initialize(entityRenderer);
        this.bindings.trianglePositionAttribute.initialize(entityRenderer);
        this.bindings.canvasToClipUniform.initialize(entityRenderer);
    }
    resetState(entityRenderer) {
        this.indexedDataBinder.resetInstancing(entityRenderer);
    }
    onBeforeUpdate(entityRenderer, updateArg) {
        this.bindings.trianglePositionAttribute.bind(entityRenderer, entityRenderer.context.STATIC_DRAW);
        this.bindings.canvasToClipUniform.setData(updateArg.canvasDimensions.pixelToClipSize);
        this.bindings.canvasToClipUniform.bind(entityRenderer);
    }
    update(entity, entityRenderer, updateArg) {
        if (entity.data.getLength() < 2) {
            // nothing to draw
            return;
        }
        this.cameraBinder.setZ(entity);
        this.cameraBinder.update(updateArg.drawTransforms, entityRenderer);
        // draw odds
        this.indexedDataBinder.updateInstanced(entity, entityRenderer, 1);
        this.indexedDataBinder.overrideColors(entityRenderer, entity);
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, (entity.data.getLength() * 0.5) | 0);
        // draw evens
        this.indexedDataBinder.setPointers(entity.data.getStart() + 1, entity.data.getBlockByteSize());
        this.indexedDataBinder.bindInstanced(entityRenderer, 1);
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, ((entity.data.getLength() - 1) * 0.5) | 0);
    }
    static getBindings() {
        const trianglePosition = new gl_float_attribute_1.GlFloatAttribute("caplessLine_trianglePosition", new gl_buffer_1.GlBuffer(new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            1, 1,
        ])), 2);
        return {
            trianglePositionAttribute: trianglePosition,
            canvasToClipUniform: new gl_mat3_uniform_1.GlMat3Uniform("caplessLine_canvasToClipSize", new rc_js_util_1.Mat3.f32()),
        };
    }
}
(0, tslib_1.__decorate)([
    rc_js_util_1.Once
], GlCaplessLineGraphicsComponent.prototype, "getCacheId", null);
exports.GlCaplessLineGraphicsComponent = GlCaplessLineGraphicsComponent;
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
const vertexShaderPartial = new gl_shader_1.GlShader(
// @formatter:off
`
/* === capless line === */
ATTRIBUTE lowp vec2 caplessLine_trianglePosition;
uniform highp mat3 caplessLine_canvasToClipSize;
VARYING lowp vec4 caplessLine_lineColor;

float caplessLine_getSize(vec2 sizes)
{
    return mix(sizes[0], sizes[1], caplessLine_trianglePosition.y);
}

vec2 caplessLine_getAdjustedPoistion(vec2 p1, vec2 p2, vec2 sizes)
{
    vec2 normal = generate2dLineNormal(p1, p2, vec2(1));
    vec2 position = mix(p1, p2, caplessLine_trianglePosition.y);

    float xSign = caplessLine_trianglePosition.x * 2. - 1.;
    vec2 pixelWidthOffset = xSign * caplessLine_getSize(sizes) * normal;

    return position + mat3MultiplyVec2(caplessLine_canvasToClipSize, pixelWidthOffset);
}

vec4 caplessLine_getColor(vec4 p1Color, vec4 p2Color)
{
    return mix(p1Color, p2Color, caplessLine_trianglePosition.y);
}

void main()
{
    vec3 p1 = v_2dCamera_getClipspaceCoords2d(pointConnector_getPosition());
    vec3 p2 = v_2dCamera_getClipspaceCoords2d(pointConnector_getPosition1());
    vec2 sizes = vec2(pointConnector_getSize(), pointConnector_getSize1()) * 0.5;

    gl_Position = vec4(caplessLine_getAdjustedPoistion(p1.xy, p2.xy, sizes), p1.z, 1);
    
    vec4 p1Color = pointConnector_getColor();
    vec4 p2Color = pointConnector_getColor1();
    caplessLine_lineColor = caplessLine_getColor(p1Color, p2Color);
}
`);
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define VARYING in \n #define TEXTURE2D texture \n #else \n #define VARYING varying \n #define TEXTURE2D texture2D \n #endif \n void setFragmentColor(in lowp vec4 color);"
const fragmentShaderSource = new gl_shader_1.GlShader(
// @formatter:off
`
VARYING lowp vec4 caplessLine_lineColor;

void main()
{
    setFragmentColor(caplessLine_lineColor);
}
`);
const caplessProgramSpecification = new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders([
    generate2_lined_normal_shader_1.generate2LinedNormalShader,
    mat3_multiply_vec2_shader_1.mat3MultiplyVec2Shader,
    vertexShaderPartial,
]), fragmentShaderSource, ["ANGLE_instanced_arrays"]);


/***/ }),

/***/ "./src/plugins/cartesian2d/series/gl-line-size-capped-graphics-component.ts":
/*!**********************************************************************************!*\
  !*** ./src/plugins/cartesian2d/series/gl-line-size-capped-graphics-component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlLineFlatCapGraphicsComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const generate2_lined_normal_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/generate2-lined-normal-shader */ "./src/core/rendering/gl/shaders/generate2-lined-normal-shader.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const gl_mat3_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat3-uniform */ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts");
const mat3_multiply_vec2_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/mat3-multiply-vec2-shader */ "./src/core/rendering/gl/shaders/mat3-multiply-vec2-shader.ts");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
class GlLineFlatCapGraphicsComponent {
    constructor(cameraBinder, indexedDataBinder) {
        this.cameraBinder = cameraBinder;
        this.indexedDataBinder = indexedDataBinder;
        DEBUG_MODE && rc_js_util_1._Debug.assert(indexedDataBinder.pointsBound === 3, "requires 3 point binder");
        this.specification = gl_program_specification_1.GlProgramSpecification.mergeProgramSpecifications([
            cameraBinder.specification,
            indexedDataBinder.specification,
            caplessProgramSpecification,
        ]);
        this.bindings = GlLineFlatCapGraphicsComponent.getBindings();
    }
    getCacheId() {
        return [
            "GlFlatCapLine",
            this.cameraBinder.getCacheId(),
            this.indexedDataBinder.getCacheId(),
        ].join("_");
    }
    resetState(entityRenderer) {
        this.indexedDataBinder.resetInstancing(entityRenderer);
    }
    initialize(entityRenderer) {
        this.cameraBinder.initialize(entityRenderer);
        this.indexedDataBinder.initialize(entityRenderer);
        this.bindings.capGeometryAttribute.initialize(entityRenderer);
        this.bindings.canvasToClipUniform.initialize(entityRenderer);
    }
    onBeforeUpdate(entityRenderer, updateArg) {
        this.bindings.capGeometryAttribute.bind(entityRenderer, entityRenderer.context.STATIC_DRAW);
        this.bindings.canvasToClipUniform.setData(updateArg.canvasDimensions.pixelToClipSize);
        this.bindings.canvasToClipUniform.bind(entityRenderer);
    }
    update(entity, entityRenderer, updateArg) {
        const length = entity.data.getLength();
        if (length < 3) {
            // nothing to draw
            return;
        }
        this.cameraBinder.setZ(entity);
        this.cameraBinder.update(updateArg.drawTransforms, entityRenderer);
        // draw 1st set
        this.indexedDataBinder.updateInstanced(entity, entityRenderer, 1);
        this.indexedDataBinder.overrideColors(entityRenderer, entity);
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, (length * 0.3333333333333333) | 0);
        const startIndex = entity.data.getStart();
        // draw 2nd set
        this.indexedDataBinder.setPointers(startIndex + 1, entity.data.getBlockByteSize());
        this.indexedDataBinder.bindInstanced(entityRenderer, 1);
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, ((length - 1) * 0.3333333333333333) | 0);
        // draw 3nd set
        this.indexedDataBinder.updatePointers(entity);
        this.indexedDataBinder.setPointers(startIndex + 2, entity.data.getBlockByteSize());
        this.indexedDataBinder.bindInstanced(entityRenderer, 1);
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_STRIP, 0, 4, ((length - 2) * 0.3333333333333333) | 0);
    }
    static getBindings() {
        const trianglePosition = new gl_float_attribute_1.GlFloatAttribute("caplessLine_trianglePosition", new gl_buffer_1.GlBuffer(new Float32Array([
            1, 0,
            0, 0,
            1, 1,
            0, 1,
        ])), 2);
        return {
            capGeometryAttribute: trianglePosition,
            canvasToClipUniform: new gl_mat3_uniform_1.GlMat3Uniform("caplessLine_canvasToClipSize", new rc_js_util_1.Mat3.f32()),
        };
    }
}
(0, tslib_1.__decorate)([
    rc_js_util_1.Once
], GlLineFlatCapGraphicsComponent.prototype, "getCacheId", null);
exports.GlLineFlatCapGraphicsComponent = GlLineFlatCapGraphicsComponent;
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
const vertexShaderPartial = new gl_shader_1.GlShader(
// @formatter:off
`
/* === capless line === */
ATTRIBUTE lowp vec2 caplessLine_trianglePosition;
uniform highp mat3 caplessLine_canvasToClipSize;
VARYING lowp vec4 caplessLine_lineColor;

vec2 caplessLine_getAdjustedPoistion(vec2 p1, vec2 p2, vec2 p3, float p2Size)
{
    vec2 l1Normal = generate2dLineNormal(p1, p2, vec2(1));
    vec2 l2Normal = generate2dLineNormal(p2, p3, vec2(1));
    vec2 normal = mix(l2Normal, l1Normal, caplessLine_trianglePosition.y);

    float xSign = caplessLine_trianglePosition.x * 2. - 1.;
    vec2 pixelWidthOffset = xSign * p2Size * normal;

    return p2 + mat3MultiplyVec2(caplessLine_canvasToClipSize, pixelWidthOffset);
}

void main()
{
    vec3 p1 = v_2dCamera_getClipspaceCoords2d(pointConnector_getPosition());
    vec3 p2 = v_2dCamera_getClipspaceCoords2d(pointConnector_getPosition1());
    vec3 p3 = v_2dCamera_getClipspaceCoords2d(pointConnector_getPosition2());
    float p2Size =  pointConnector_getSize1() * 0.5;

    gl_Position = vec4(caplessLine_getAdjustedPoistion(p1.xy, p2.xy, p3.xy, p2Size), p1.z, 1);
    
    vec4 p2Color = pointConnector_getColor1();
    caplessLine_lineColor = p2Color;
}
`);
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define VARYING in \n #define TEXTURE2D texture \n #else \n #define VARYING varying \n #define TEXTURE2D texture2D \n #endif \n void setFragmentColor(in lowp vec4 color);"
const fragmentShaderSource = new gl_shader_1.GlShader(
// @formatter:off
`
    VARYING highp vec4 caplessLine_lineColor;

    void main()
    {
        setFragmentColor(caplessLine_lineColor);
    }
    `);
const caplessProgramSpecification = new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders([
    generate2_lined_normal_shader_1.generate2LinedNormalShader,
    mat3_multiply_vec2_shader_1.mat3MultiplyVec2Shader,
    vertexShaderPartial,
]), fragmentShaderSource, ["ANGLE_instanced_arrays"]);


/***/ }),

/***/ "./src/plugins/cartesian2d/series/gl-point-graphics-component.ts":
/*!***********************************************************************!*\
  !*** ./src/plugins/cartesian2d/series/gl-point-graphics-component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlPointGraphicsComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const gl_float_attribute_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-float-attribute */ "./src/core/rendering/gl/attributes/gl-float-attribute.ts");
const gl_program_specification_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-program-specification */ "./src/core/rendering/gl/gl-program-specification.ts");
const gl_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/gl-shader */ "./src/core/rendering/gl/gl-shader.ts");
const gl_buffer_1 = __webpack_require__(/*! ../../../core/rendering/gl/attributes/gl-buffer */ "./src/core/rendering/gl/attributes/gl-buffer.ts");
const gl_mat3_uniform_1 = __webpack_require__(/*! ../../../core/rendering/gl/uniforms/gl-mat3-uniform */ "./src/core/rendering/gl/uniforms/gl-mat3-uniform.ts");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const mat2_multiply_value_shader_1 = __webpack_require__(/*! ../../../core/rendering/gl/shaders/mat2-multiply-value-shader */ "./src/core/rendering/gl/shaders/mat2-multiply-value-shader.ts");
class GlPointGraphicsComponent {
    constructor(cameraBinder, pointBinder) {
        this.cameraBinder = cameraBinder;
        this.pointBinder = pointBinder;
        this.outerVertices = 40;
        this.specification = this.getSpec();
        this.bindings = this.getBindings();
    }
    getCacheId() {
        return [
            "Point",
            this.cameraBinder.getCacheId(),
            this.pointBinder.getCacheId(),
        ].join("_");
    }
    initialize(entityRenderer) {
        this.pointBinder.initialize(entityRenderer);
        this.cameraBinder.initialize(entityRenderer);
        this.bindings.circleGeometryAttribute.initialize(entityRenderer);
        this.bindings.canvasToClipSizeUniform.initialize(entityRenderer);
    }
    resetState(entityRenderer) {
        this.pointBinder.resetInstancing(entityRenderer);
    }
    onBeforeUpdate(entityRenderer, updateArg) {
        this.bindings.circleGeometryAttribute.bind(entityRenderer);
        this.bindings.canvasToClipSizeUniform.setData(updateArg.canvasDimensions.pixelToClipSize);
        this.bindings.canvasToClipSizeUniform.bind(entityRenderer);
    }
    update(entity, entityRenderer, updateArg) {
        this.pointBinder.updateInstanced(entity, entityRenderer, 1);
        this.pointBinder.overrideColors(entityRenderer, entity);
        this.cameraBinder.setZ(entity);
        this.cameraBinder.update(updateArg.drawTransforms, entityRenderer);
        // draw
        entityRenderer.drawInstancedArrays(entityRenderer.context.TRIANGLE_FAN, 0, this.outerVertices + 1, entity.data.getLength());
    }
    static generateCircleGeometry(vertexCount) {
        // using index therefore not 2 pi
        const increment = Math.PI / (vertexCount - 1);
        const end = vertexCount * 2 + 2;
        const vertexes = new Float32Array(end);
        for (let i = 2; i < end; i += 2) {
            const step = increment * i;
            vertexes[i] = Math.cos(step);
            vertexes[i + 1] = Math.sin(step);
        }
        return vertexes;
    }
    getSpec() {
        return gl_program_specification_1.GlProgramSpecification.mergeProgramSpecifications([
            this.cameraBinder.specification,
            this.pointBinder.specification,
            new gl_program_specification_1.GlProgramSpecification(gl_shader_1.GlShader.combineShaders([
                mat2_multiply_value_shader_1.mat2MultiplyValueShader,
                vertexShaderPartial,
            ]), fragmentShaderSource, ["ANGLE_instanced_arrays"]),
        ]);
    }
    getBindings() {
        const geometry = GlPointGraphicsComponent.generateCircleGeometry(this.outerVertices);
        return {
            circleGeometryAttribute: new gl_float_attribute_1.GlFloatAttribute("pointGc_position", new gl_buffer_1.GlBuffer(geometry), 2),
            canvasToClipSizeUniform: new gl_mat3_uniform_1.GlMat3Uniform("pointGc_canvasToClipSize", new rc_js_util_1.Mat3.f32()),
        };
    }
}
(0, tslib_1.__decorate)([
    rc_js_util_1.Once
], GlPointGraphicsComponent.prototype, "getCacheId", null);
exports.GlPointGraphicsComponent = GlPointGraphicsComponent;
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define ATTRIBUTE in \n #define VARYING out \n #else \n #define ATTRIBUTE attribute \n #define VARYING varying \n #endif"
const vertexShaderPartial = new gl_shader_1.GlShader(
// @formatter:off
`
ATTRIBUTE lowp vec2 pointGc_position;
uniform highp mat3 pointGc_canvasToClipSize;
VARYING lowp vec4 pointGc_color;

vec2 pointGc_getOffset()
{
    return mat3MultiplyVec2(pointGc_canvasToClipSize, pointGc_position * pointConnector_getSize()) * 0.5;
}

void main()
{
    vec3 position = v_2dCamera_getClipspaceCoords2d(pointConnector_getPosition());
    gl_Position = vec4(pointGc_getOffset() + position.xy, position.z, 1);
    pointGc_color = pointConnector_getColor();
}
`);
// language=GLSL prefix="#if __VERSION__ >=300 && __VERSION__ < 400 \n #define VARYING in \n #define TEXTURE2D texture \n #else \n #define VARYING varying \n #define TEXTURE2D texture2D \n #endif \n void setFragmentColor(in lowp vec4 color);"
const fragmentShaderSource = new gl_shader_1.GlShader(
// @formatter:off
`
VARYING highp vec4 pointGc_color;

void main()
{
    setFragmentColor(pointGc_color);
}
`);


/***/ }),

/***/ "./src/plugins/cartesian2d/sorted2d-update-strategy.ts":
/*!*************************************************************!*\
  !*** ./src/plugins/cartesian2d/sorted2d-update-strategy.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sorted2dUpdateStrategy = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const render_list_1 = __webpack_require__(/*! ../../core/update/render-list */ "./src/core/update/render-list.ts");
const entity_update_grouping_1 = __webpack_require__(/*! ../../core/update/entity-update-grouping */ "./src/core/update/entity-update-grouping.ts");
const on_entity_added_to_group_1 = __webpack_require__(/*! ../../core/plot/events/on-entity-added-to-group */ "./src/core/plot/events/on-entity-added-to-group.ts");
const on_entity_removed_from_group_1 = __webpack_require__(/*! ../../core/plot/events/on-entity-removed-from-group */ "./src/core/plot/events/on-entity-removed-from-group.ts");
const on_entity_modified_1 = __webpack_require__(/*! ../../core/plot/events/on-entity-modified */ "./src/core/plot/events/on-entity-modified.ts");
class Sorted2dUpdateStrategy {
    constructor(plot, updateGroup, scene) {
        this.plot = plot;
        this.scene = scene;
        this.renderLists = [];
        this.isDirty = true;
        this.updateGroup = updateGroup;
        // no possibility of changing, so no need for unregistering
        on_entity_added_to_group_1.OnEntityAddedToGroup.registerListener(this.plot, () => this.isDirty = true);
        on_entity_removed_from_group_1.OnEntityRemovedFromGroup.registerListener(this.plot, () => this.isDirty = true);
        on_entity_modified_1.OnEntityModified.registerListener(this.plot, () => this.isDirty = true);
    }
    update(canvasDims, renderer) {
        if (this.isDirty) {
            this.scene.update();
            this.updateRenderList(renderer);
            this.isDirty = false;
        }
        this.draw(renderer, canvasDims);
    }
    updateRenderList(renderer) {
        const categories = this.scene.getSortedCategories(this.updateGroup);
        const renderLists = this.renderLists = rc_js_util_1._Array.map(categories, category => new render_list_1.RenderList(category.updateHooks));
        const createEntityGrouping = Sorted2dUpdateStrategy.createEntityGrouping;
        for (let i = 0, iEnd = categories.length; i < iEnd; ++i) {
            const category = categories[i];
            const renderList = renderLists[i];
            const entitiesByComponents = this.scene.getEntitiesByComponents(category);
            for (let j = 0, jEnd = entitiesByComponents.length; j < jEnd; ++j) {
                const entitiesByComponent = entitiesByComponents[j];
                const graphicsComponent = entitiesByComponent[0];
                const entities = entitiesByComponent[1];
                renderList.addGrouping(createEntityGrouping(graphicsComponent, renderer));
                for (let k = 0, kEnd = entities.length; k < kEnd; ++k) {
                    renderList.addEntity(entities[k]);
                }
            }
            renderList.build();
        }
    }
    static createEntityGrouping(graphicsComponent, renderer) {
        return new entity_update_grouping_1.EntityUpdateGrouping(graphicsComponent, renderer.entityRendererProvider.getRenderer(graphicsComponent));
    }
    draw(renderer, canvasDims) {
        const updateArg = this.updateGroup.updateArgProvider.getUpdateArg(this.plot, canvasDims);
        const renderLists = this.renderLists;
        const drawEntityGrouping = Sorted2dUpdateStrategy.drawEntityGrouping;
        for (let i = 0, iEnd = renderLists.length; i < iEnd; ++i) {
            const renderList = renderLists[i];
            renderList.updateGroupHooks.onBeforeUpdate(renderer, updateArg);
            const entitiesInGroup = renderList.entitiesInGroup;
            for (let j = 0, jEnd = entitiesInGroup.length; j < jEnd; ++j) {
                entitiesInGroup[j].onBeforeUpdate(updateArg);
            }
            const updateGroupings = renderList.groupings;
            for (let j = 0, jEnd = updateGroupings.length; j < jEnd; ++j) {
                const updateGrouping = updateGroupings[j];
                drawEntityGrouping(updateGrouping[0], updateGrouping[1], updateArg);
            }
            renderList.updateGroupHooks.onAfterUpdate(renderer, updateArg);
        }
    }
    static drawEntityGrouping(updateGrouping, entities, updateArg) {
        const graphicsComponent = updateGrouping.graphicsComponent;
        if (graphicsComponent.groupUpdatesByEntity === true) {
            Sorted2dUpdateStrategy.drawEntitiesPerEntity(graphicsComponent, entities, updateArg);
        }
        else {
            Sorted2dUpdateStrategy.drawEntitiesByComponent(updateGrouping, entities, updateArg);
        }
    }
    static drawEntitiesByComponent(updateGrouping, entities, updateArg) {
        const entityRenderer = updateGrouping.entityRenderer;
        const graphicsComponent = updateGrouping.graphicsComponent;
        entityRenderer.onBeforeDraw();
        graphicsComponent.onBeforeUpdate(entityRenderer, updateArg);
        for (let i = 0, iEnd = entities.length; i < iEnd; ++i) {
            graphicsComponent.update(entities[i], entityRenderer, updateArg);
        }
        graphicsComponent.resetState(entityRenderer);
        entityRenderer.onAfterDraw();
    }
    static drawEntitiesPerEntity(graphicsComponent, entities, updateArg) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const subComponents = graphicsComponent.subComponents;
        const graphicsComponents = subComponents.getSubComponents();
        const entityRenderers = subComponents.entityRenderers;
        for (let i = 0, iEnd = entities.length; i < iEnd; ++i) {
            for (let j = 0, jEnd = graphicsComponents.length; j < jEnd; ++j) {
                const graphicsComponent = graphicsComponents[j];
                const entityRenderer = entityRenderers[j];
                entityRenderer.onBeforeDraw();
                graphicsComponent.onBeforeUpdate(entityRenderer, updateArg);
                graphicsComponent.update(entities[i], entityRenderer, updateArg);
                graphicsComponent.resetState(entityRenderer);
                entityRenderer.onAfterDraw();
            }
        }
    }
}
exports.Sorted2dUpdateStrategy = Sorted2dUpdateStrategy;


/***/ }),

/***/ "./src/plugins/cartesian2d/traits/t-point2d-display-settings-trait.ts":
/*!****************************************************************************!*\
  !*** ./src/plugins/cartesian2d/traits/t-point2d-display-settings-trait.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Point2dDisplaySettings = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
/**
 * @public
 * Point config where not specified per point.
 */
class Point2dDisplaySettings extends rc_js_util_1.Mat4.f32 {
    constructor(pixelSize, 
    /**
     * RGBA unit32.
     */
    color) {
        super();
        // todo jack28: no good for canvas, a map maybe? that said you could draw over the top?
        this.colorOverrides = null;
        this.color = null;
        this.setSize(pixelSize);
        this.setColor(color);
    }
    setSize(size) {
        this[0] = size;
    }
    setColor(RgbaColor) {
        // 0.00392156862745098 = 1 / 255
        this[4] = rc_js_util_1.RgbaColorPacker.unpackR(RgbaColor) * 0.00392156862745098;
        this[5] = rc_js_util_1.RgbaColorPacker.unpackG(RgbaColor) * 0.00392156862745098;
        this[6] = rc_js_util_1.RgbaColorPacker.unpackB(RgbaColor) * 0.00392156862745098;
        this[7] = rc_js_util_1.RgbaColorPacker.unpackA(RgbaColor) * 0.00392156862745098;
    }
    getColor() {
        if (this.color == null) {
            this.color = new rc_js_util_1.Vec4.f32();
        }
        return this.getRow(1, this.color);
    }
    getPixelSize() {
        return this[0];
    }
}
exports.Point2dDisplaySettings = Point2dDisplaySettings;


/***/ }),

/***/ "./src/plugins/cartesian2d/traits/t-point2d-size-normalizer-trait.ts":
/*!***************************************************************************!*\
  !*** ./src/plugins/cartesian2d/traits/t-point2d-size-normalizer-trait.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Point2dSizeNormalizer = void 0;
class Point2dSizeNormalizer {
    constructor(pixelSizeRange) {
        this.pixelSizeRange = pixelSizeRange;
        this.tmpRange = pixelSizeRange.slice();
        this.sizeRange = pixelSizeRange.slice();
        this.sizeRange.update(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
        this.transform = this.sizeRange.getRangeTransform(this.pixelSizeRange);
        this.requiresInitialization = true;
    }
    getSizeToPixelTransform() {
        if (this.requiresInitialization) {
            this.sizeRange.getRangeTransform(this.pixelSizeRange, this.transform);
            this.requiresInitialization = false;
        }
        return this.transform;
    }
    extendDataRange(min, max) {
        this.tmpRange.update(min, max);
        this.sizeRange.unionRange(this.tmpRange, this.sizeRange);
    }
}
exports.Point2dSizeNormalizer = Point2dSizeNormalizer;


/***/ }),

/***/ "./src/plugins/cartesian2d/update-2d-group.ts":
/*!****************************************************!*\
  !*** ./src/plugins/cartesian2d/update-2d-group.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Update2dGroup = void 0;
const category_store_1 = __webpack_require__(/*! ../../core/entities/categories/category-store */ "./src/core/entities/categories/category-store.ts");
const a_entity_group_1 = __webpack_require__(/*! ../../core/entities/groups/a-entity-group */ "./src/core/entities/groups/a-entity-group.ts");
const entity_component_store_1 = __webpack_require__(/*! ../../core/entities/entity-component-store */ "./src/core/entities/entity-component-store.ts");
class Update2dGroup extends a_entity_group_1.AEntityGroup {
    constructor(updateArgProvider, categories = new category_store_1.CategoryStore()) {
        super();
        this.updateArgProvider = updateArgProvider;
        this.categories = categories;
        this.entitiesInGroup = new Set();
        this.graphicsComponents = new entity_component_store_1.EntityComponentStore();
    }
    onEntityAdded(entity, options) {
        this.graphicsComponents.setComponent(entity, options.graphicsComponent);
        this.entitiesInGroup.add(entity);
    }
    onEntityRemoved(entity) {
        this.graphicsComponents.deleteComponent(entity);
        this.entitiesInGroup.delete(entity);
        const categories = this.categories.toArray();
        for (let i = 0, iEnd = categories.length; i < iEnd; ++i) {
            categories[i].removeEntity(entity);
        }
    }
}
exports.Update2dGroup = Update2dGroup;


/***/ }),

/***/ "./src/plugins/data-connectors/indexable/get-range-from-indexed-connector.ts":
/*!***********************************************************************************!*\
  !*** ./src/plugins/data-connectors/indexable/get-range-from-indexed-connector.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRangeFromIndexedConnector = void 0;
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
function getRangeFromIndexedConnector(connector, result = new rc_js_util_1.Range1d.f64()) {
    const sizeOffset = connector.offsets.size;
    if (sizeOffset == null) {
        return null;
    }
    for (let i = connector.getStart(), iEnd = connector.getEnd(); i < iEnd; ++i) {
        result.extendRange(connector.getValue(i, sizeOffset), result);
    }
    return result;
}
exports.getRangeFromIndexedConnector = getRangeFromIndexedConnector;


/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js":
/*!****************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./build/safe-heap-module.js":
/*!***********************************!*\
  !*** ./build/safe-heap-module.js ***!
  \***********************************/
/***/ ((module) => {


var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Module) {
  Module = Module || {};

var Module = typeof Module !== "undefined" ? Module : {};

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise(function(resolve, reject) {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
});

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_sbrk")) {
 Object.defineProperty(Module["ready"], "_sbrk", {
  configurable: true,
  get: function() {
   abort("You are getting _sbrk on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_sbrk", {
  configurable: true,
  set: function() {
   abort("You are setting _sbrk on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_end")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_end", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_end", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_free")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_free", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_free", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_base")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_base", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_get_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_base", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_get_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_init")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_init", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_init", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackSave")) {
 Object.defineProperty(Module["ready"], "_stackSave", {
  configurable: true,
  get: function() {
   abort("You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_stackSave", {
  configurable: true,
  set: function() {
   abort("You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackRestore")) {
 Object.defineProperty(Module["ready"], "_stackRestore", {
  configurable: true,
  get: function() {
   abort("You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_stackRestore", {
  configurable: true,
  set: function() {
   abort("You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackAlloc")) {
 Object.defineProperty(Module["ready"], "_stackAlloc", {
  configurable: true,
  get: function() {
   abort("You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_stackAlloc", {
  configurable: true,
  set: function() {
   abort("You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___wasm_call_ctors")) {
 Object.defineProperty(Module["ready"], "___wasm_call_ctors", {
  configurable: true,
  get: function() {
   abort("You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___wasm_call_ctors", {
  configurable: true,
  set: function() {
   abort("You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fflush")) {
 Object.defineProperty(Module["ready"], "_fflush", {
  configurable: true,
  get: function() {
   abort("You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fflush", {
  configurable: true,
  set: function() {
   abort("You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___errno_location")) {
 Object.defineProperty(Module["ready"], "___errno_location", {
  configurable: true,
  get: function() {
   abort("You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___errno_location", {
  configurable: true,
  set: function() {
   abort("You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_get_sbrk_ptr")) {
 Object.defineProperty(Module["ready"], "_emscripten_get_sbrk_ptr", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_get_sbrk_ptr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_get_sbrk_ptr", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_get_sbrk_ptr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_memalign")) {
 Object.defineProperty(Module["ready"], "_memalign", {
  configurable: true,
  get: function() {
   abort("You are getting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_memalign", {
  configurable: true,
  set: function() {
   abort("You are setting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_builtin_memalign")) {
 Object.defineProperty(Module["ready"], "_emscripten_builtin_memalign", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_builtin_memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_builtin_memalign", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_builtin_memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_builtin_malloc")) {
 Object.defineProperty(Module["ready"], "_emscripten_builtin_malloc", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_builtin_malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_builtin_malloc", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_builtin_malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_builtin_free")) {
 Object.defineProperty(Module["ready"], "_emscripten_builtin_free", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_builtin_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_builtin_free", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_builtin_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___heap_base")) {
 Object.defineProperty(Module["ready"], "___heap_base", {
  configurable: true,
  get: function() {
   abort("You are getting ___heap_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___heap_base", {
  configurable: true,
  set: function() {
   abort("You are setting ___heap_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___global_base")) {
 Object.defineProperty(Module["ready"], "___global_base", {
  configurable: true,
  get: function() {
   abort("You are getting ___global_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___global_base", {
  configurable: true,
  set: function() {
   abort("You are setting ___global_base on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_malloc")) {
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  get: function() {
   abort("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  set: function() {
   abort("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_free")) {
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  get: function() {
   abort("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  set: function() {
   abort("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_memset")) {
 Object.defineProperty(Module["ready"], "_memset", {
  configurable: true,
  get: function() {
   abort("You are getting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_memset", {
  configurable: true,
  set: function() {
   abort("You are setting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_jsUtilEndProgram")) {
 Object.defineProperty(Module["ready"], "_jsUtilEndProgram", {
  configurable: true,
  get: function() {
   abort("You are getting _jsUtilEndProgram on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_jsUtilEndProgram", {
  configurable: true,
  set: function() {
   abort("You are setting _jsUtilEndProgram on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_jsUtilMalloc")) {
 Object.defineProperty(Module["ready"], "_jsUtilMalloc", {
  configurable: true,
  get: function() {
   abort("You are getting _jsUtilMalloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_jsUtilMalloc", {
  configurable: true,
  set: function() {
   abort("You are setting _jsUtilMalloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_jsUtilCalloc")) {
 Object.defineProperty(Module["ready"], "_jsUtilCalloc", {
  configurable: true,
  get: function() {
   abort("You are getting _jsUtilCalloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_jsUtilCalloc", {
  configurable: true,
  set: function() {
   abort("You are setting _jsUtilCalloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_jsUtilFree")) {
 Object.defineProperty(Module["ready"], "_jsUtilFree", {
  configurable: true,
  get: function() {
   abort("You are getting _jsUtilFree on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_jsUtilFree", {
  configurable: true,
  set: function() {
   abort("You are setting _jsUtilFree on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32Interleaved2dLineQuadIndexer_index")) {
 Object.defineProperty(Module["ready"], "_f32Interleaved2dLineQuadIndexer_index", {
  configurable: true,
  get: function() {
   abort("You are getting _f32Interleaved2dLineQuadIndexer_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32Interleaved2dLineQuadIndexer_index", {
  configurable: true,
  set: function() {
   abort("You are setting _f32Interleaved2dLineQuadIndexer_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64Interleaved2dLineQuadIndexer_index")) {
 Object.defineProperty(Module["ready"], "_f64Interleaved2dLineQuadIndexer_index", {
  configurable: true,
  get: function() {
   abort("You are getting _f64Interleaved2dLineQuadIndexer_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64Interleaved2dLineQuadIndexer_index", {
  configurable: true,
  set: function() {
   abort("You are setting _f64Interleaved2dLineQuadIndexer_index on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32Interleaved2dLineQuadIndexer_getOffsets")) {
 Object.defineProperty(Module["ready"], "_f32Interleaved2dLineQuadIndexer_getOffsets", {
  configurable: true,
  get: function() {
   abort("You are getting _f32Interleaved2dLineQuadIndexer_getOffsets on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32Interleaved2dLineQuadIndexer_getOffsets", {
  configurable: true,
  set: function() {
   abort("You are setting _f32Interleaved2dLineQuadIndexer_getOffsets on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64Interleaved2dLineQuadIndexer_getOffsets")) {
 Object.defineProperty(Module["ready"], "_f64Interleaved2dLineQuadIndexer_getOffsets", {
  configurable: true,
  get: function() {
   abort("You are getting _f64Interleaved2dLineQuadIndexer_getOffsets on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64Interleaved2dLineQuadIndexer_getOffsets", {
  configurable: true,
  set: function() {
   abort("You are setting _f64Interleaved2dLineQuadIndexer_getOffsets on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32InterleavedConnector_createOne")) {
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_createOne", {
  configurable: true,
  get: function() {
   abort("You are getting _f32InterleavedConnector_createOne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_createOne", {
  configurable: true,
  set: function() {
   abort("You are setting _f32InterleavedConnector_createOne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32InterleavedConnector_setStart")) {
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_setStart", {
  configurable: true,
  get: function() {
   abort("You are getting _f32InterleavedConnector_setStart on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_setStart", {
  configurable: true,
  set: function() {
   abort("You are setting _f32InterleavedConnector_setStart on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32InterleavedConnector_setLength")) {
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_setLength", {
  configurable: true,
  get: function() {
   abort("You are getting _f32InterleavedConnector_setLength on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_setLength", {
  configurable: true,
  set: function() {
   abort("You are setting _f32InterleavedConnector_setLength on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32InterleavedConnector_delete")) {
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_delete", {
  configurable: true,
  get: function() {
   abort("You are getting _f32InterleavedConnector_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32InterleavedConnector_delete", {
  configurable: true,
  set: function() {
   abort("You are setting _f32InterleavedConnector_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64InterleavedConnector_createOne")) {
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_createOne", {
  configurable: true,
  get: function() {
   abort("You are getting _f64InterleavedConnector_createOne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_createOne", {
  configurable: true,
  set: function() {
   abort("You are setting _f64InterleavedConnector_createOne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64InterleavedConnector_setStart")) {
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_setStart", {
  configurable: true,
  get: function() {
   abort("You are getting _f64InterleavedConnector_setStart on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_setStart", {
  configurable: true,
  set: function() {
   abort("You are setting _f64InterleavedConnector_setStart on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64InterleavedConnector_setLength")) {
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_setLength", {
  configurable: true,
  get: function() {
   abort("You are getting _f64InterleavedConnector_setLength on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_setLength", {
  configurable: true,
  set: function() {
   abort("You are setting _f64InterleavedConnector_setLength on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64InterleavedConnector_delete")) {
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_delete", {
  configurable: true,
  get: function() {
   abort("You are getting _f64InterleavedConnector_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64InterleavedConnector_delete", {
  configurable: true,
  set: function() {
   abort("You are setting _f64InterleavedConnector_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32QuadTree_createTree")) {
 Object.defineProperty(Module["ready"], "_f32QuadTree_createTree", {
  configurable: true,
  get: function() {
   abort("You are getting _f32QuadTree_createTree on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32QuadTree_createTree", {
  configurable: true,
  set: function() {
   abort("You are setting _f32QuadTree_createTree on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32QuadTree_setTopLevel")) {
 Object.defineProperty(Module["ready"], "_f32QuadTree_setTopLevel", {
  configurable: true,
  get: function() {
   abort("You are getting _f32QuadTree_setTopLevel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32QuadTree_setTopLevel", {
  configurable: true,
  set: function() {
   abort("You are setting _f32QuadTree_setTopLevel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32QuadTree_queryPoint")) {
 Object.defineProperty(Module["ready"], "_f32QuadTree_queryPoint", {
  configurable: true,
  get: function() {
   abort("You are getting _f32QuadTree_queryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32QuadTree_queryPoint", {
  configurable: true,
  set: function() {
   abort("You are setting _f32QuadTree_queryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32QuadTree_insertRange")) {
 Object.defineProperty(Module["ready"], "_f32QuadTree_insertRange", {
  configurable: true,
  get: function() {
   abort("You are getting _f32QuadTree_insertRange on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32QuadTree_insertRange", {
  configurable: true,
  set: function() {
   abort("You are setting _f32QuadTree_insertRange on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32QuadTree_delete")) {
 Object.defineProperty(Module["ready"], "_f32QuadTree_delete", {
  configurable: true,
  get: function() {
   abort("You are getting _f32QuadTree_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32QuadTree_delete", {
  configurable: true,
  set: function() {
   abort("You are setting _f32QuadTree_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_quadTree_setOptions")) {
 Object.defineProperty(Module["ready"], "_quadTree_setOptions", {
  configurable: true,
  get: function() {
   abort("You are getting _quadTree_setOptions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_quadTree_setOptions", {
  configurable: true,
  set: function() {
   abort("You are setting _quadTree_setOptions on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_quadTree_getResultAddress")) {
 Object.defineProperty(Module["ready"], "_quadTree_getResultAddress", {
  configurable: true,
  get: function() {
   abort("You are getting _quadTree_getResultAddress on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_quadTree_getResultAddress", {
  configurable: true,
  set: function() {
   abort("You are setting _quadTree_getResultAddress on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_quadTree_getQuadElementCount")) {
 Object.defineProperty(Module["ready"], "_quadTree_getQuadElementCount", {
  configurable: true,
  get: function() {
   abort("You are getting _quadTree_getQuadElementCount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_quadTree_getQuadElementCount", {
  configurable: true,
  set: function() {
   abort("You are setting _quadTree_getQuadElementCount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32SharedArray_createOne")) {
 Object.defineProperty(Module["ready"], "_f32SharedArray_createOne", {
  configurable: true,
  get: function() {
   abort("You are getting _f32SharedArray_createOne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32SharedArray_createOne", {
  configurable: true,
  set: function() {
   abort("You are setting _f32SharedArray_createOne on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32SharedArray_getArrayAddress")) {
 Object.defineProperty(Module["ready"], "_f32SharedArray_getArrayAddress", {
  configurable: true,
  get: function() {
   abort("You are getting _f32SharedArray_getArrayAddress on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32SharedArray_getArrayAddress", {
  configurable: true,
  set: function() {
   abort("You are setting _f32SharedArray_getArrayAddress on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f32SharedArray_delete")) {
 Object.defineProperty(Module["ready"], "_f32SharedArray_delete", {
  configurable: true,
  get: function() {
   abort("You are getting _f32SharedArray_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f32SharedArray_delete", {
  configurable: true,
  set: function() {
   abort("You are setting _f32SharedArray_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_f64SharedArray_delete")) {
 Object.defineProperty(Module["ready"], "_f64SharedArray_delete", {
  configurable: true,
  get: function() {
   abort("You are getting _f64SharedArray_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_f64SharedArray_delete", {
  configurable: true,
  set: function() {
   abort("You are setting _f64SharedArray_delete on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___set_stack_limits")) {
 Object.defineProperty(Module["ready"], "___set_stack_limits", {
  configurable: true,
  get: function() {
   abort("You are getting ___set_stack_limits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___set_stack_limits", {
  configurable: true,
  set: function() {
   abort("You are setting ___set_stack_limits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  get: function() {
   abort("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  set: function() {
   abort("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

var moduleOverrides = {};

var key;

for (key in Module) {
 if (Module.hasOwnProperty(key)) {
  moduleOverrides[key] = Module[key];
 }
}

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = function(status, toThrow) {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = true;

var ENVIRONMENT_IS_WORKER = false;

var ENVIRONMENT_IS_NODE = false;

var ENVIRONMENT_IS_SHELL = false;

if (Module["ENVIRONMENT"]) {
 throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

if (ENVIRONMENT_IS_SHELL) {
 if (typeof process === "object" && "function" === "function" || typeof window === "object" || typeof importScripts === "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 if (typeof read != "undefined") {
  read_ = function shell_read(f) {
   return read(f);
  };
 }
 readBinary = function readBinary(f) {
  var data;
  if (typeof readbuffer === "function") {
   return new Uint8Array(readbuffer(f));
  }
  data = read(f, "binary");
  assert(typeof data === "object");
  return data;
 };
 readAsync = function readAsync(f, onload, onerror) {
  setTimeout(function() {
   onload(readBinary(f));
  }, 0);
 };
 if (typeof scriptArgs != "undefined") {
  arguments_ = scriptArgs;
 } else if (typeof arguments != "undefined") {
  arguments_ = arguments;
 }
 if (typeof quit === "function") {
  quit_ = function(status) {
   quit(status);
  };
 }
 if (typeof print !== "undefined") {
  if (typeof console === "undefined") console = {};
  console.log = print;
  console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document !== "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 if (!(typeof window === "object" || typeof importScripts === "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 {
  read_ = function(url) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   };
  }
  readAsync = function(url, onload, onerror) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = function() {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
 setWindowTitle = function(title) {
  document.title = title;
 };
} else {
 throw new Error("environment detection error");
}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.warn.bind(console);

for (key in moduleOverrides) {
 if (moduleOverrides.hasOwnProperty(key)) {
  Module[key] = moduleOverrides[key];
 }
}

moduleOverrides = null;

if (Module["arguments"]) arguments_ = Module["arguments"];

if (!Object.getOwnPropertyDescriptor(Module, "arguments")) {
 Object.defineProperty(Module, "arguments", {
  configurable: true,
  get: function() {
   abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) {
 Object.defineProperty(Module, "thisProgram", {
  configurable: true,
  get: function() {
   abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (Module["quit"]) quit_ = Module["quit"];

if (!Object.getOwnPropertyDescriptor(Module, "quit")) {
 Object.defineProperty(Module, "quit", {
  configurable: true,
  get: function() {
   abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");

assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");

assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");

assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");

assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");

if (!Object.getOwnPropertyDescriptor(Module, "read")) {
 Object.defineProperty(Module, "read", {
  configurable: true,
  get: function() {
   abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) {
 Object.defineProperty(Module, "readAsync", {
  configurable: true,
  get: function() {
   abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) {
 Object.defineProperty(Module, "readBinary", {
  configurable: true,
  get: function() {
   abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) {
 Object.defineProperty(Module, "setWindowTitle", {
  configurable: true,
  get: function() {
   abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";

var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";

var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";

var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";

assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");

var STACK_ALIGN = 16;

function alignMemory(size, factor) {
 if (!factor) factor = STACK_ALIGN;
 return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
 switch (type) {
 case "i1":
 case "i8":
  return 1;

 case "i16":
  return 2;

 case "i32":
  return 4;

 case "i64":
  return 8;

 case "float":
  return 4;

 case "double":
  return 8;

 default:
  {
   if (type[type.length - 1] === "*") {
    return 4;
   } else if (type[0] === "i") {
    var bits = Number(type.substr(1));
    assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
    return bits / 8;
   } else {
    return 0;
   }
  }
 }
}

function warnOnce(text) {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
}

function convertJsFunctionToWasm(func, sig) {
 if (typeof WebAssembly.Function === "function") {
  var typeNames = {
   "i": "i32",
   "j": "i64",
   "f": "f32",
   "d": "f64"
  };
  var type = {
   parameters: [],
   results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
  };
  for (var i = 1; i < sig.length; ++i) {
   type.parameters.push(typeNames[sig[i]]);
  }
  return new WebAssembly.Function(type, func);
 }
 var typeSection = [ 1, 0, 1, 96 ];
 var sigRet = sig.slice(0, 1);
 var sigParam = sig.slice(1);
 var typeCodes = {
  "i": 127,
  "j": 126,
  "f": 125,
  "d": 124
 };
 typeSection.push(sigParam.length);
 for (var i = 0; i < sigParam.length; ++i) {
  typeSection.push(typeCodes[sigParam[i]]);
 }
 if (sigRet == "v") {
  typeSection.push(0);
 } else {
  typeSection = typeSection.concat([ 1, typeCodes[sigRet] ]);
 }
 typeSection[1] = typeSection.length - 2;
 var bytes = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0 ].concat(typeSection, [ 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0 ]));
 var module = new WebAssembly.Module(bytes);
 var instance = new WebAssembly.Instance(module, {
  "e": {
   "f": func
  }
 });
 var wrappedFunc = instance.exports["f"];
 return wrappedFunc;
}

var freeTableIndexes = [];

var functionsInTableMap;

function getEmptyTableSlot() {
 if (freeTableIndexes.length) {
  return freeTableIndexes.pop();
 }
 try {
  wasmTable.grow(1);
 } catch (err) {
  if (!(err instanceof RangeError)) {
   throw err;
  }
  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
 }
 return wasmTable.length - 1;
}

function addFunctionWasm(func, sig) {
 if (!functionsInTableMap) {
  functionsInTableMap = new WeakMap();
  for (var i = 0; i < wasmTable.length; i++) {
   var item = wasmTable.get(i);
   if (item) {
    functionsInTableMap.set(item, i);
   }
  }
 }
 if (functionsInTableMap.has(func)) {
  return functionsInTableMap.get(func);
 }
 for (var i = 0; i < wasmTable.length; i++) {
  assert(wasmTable.get(i) != func, "function in Table but not functionsInTableMap");
 }
 var ret = getEmptyTableSlot();
 try {
  wasmTable.set(ret, func);
 } catch (err) {
  if (!(err instanceof TypeError)) {
   throw err;
  }
  assert(typeof sig !== "undefined", "Missing signature argument to addFunction: " + func);
  var wrapped = convertJsFunctionToWasm(func, sig);
  wasmTable.set(ret, wrapped);
 }
 functionsInTableMap.set(func, ret);
 return ret;
}

function removeFunction(index) {
 functionsInTableMap.delete(wasmTable.get(index));
 freeTableIndexes.push(index);
}

function addFunction(func, sig) {
 assert(typeof func !== "undefined");
 if (typeof sig === "undefined") {
  err("warning: addFunction(): You should provide a wasm function signature string as a second argument. This is not necessary for asm.js and asm2wasm, but can be required for the LLVM wasm backend, so it is recommended for full portability.");
 }
 return addFunctionWasm(func, sig);
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
 tempRet0 = value;
};

var getTempRet0 = function() {
 return tempRet0;
};

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) {
 Object.defineProperty(Module, "wasmBinary", {
  configurable: true,
  get: function() {
   abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

var noExitRuntime = Module["noExitRuntime"] || false;

if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) {
 Object.defineProperty(Module, "noExitRuntime", {
  configurable: true,
  get: function() {
   abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (typeof WebAssembly !== "object") {
 abort("no native wasm support detected");
}

function setValue(ptr, value, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 if (noSafe) {
  switch (type) {
  case "i1":
   HEAP8[ptr >> 0] = value;
   break;

  case "i8":
   HEAP8[ptr >> 0] = value;
   break;

  case "i16":
   HEAP16[ptr >> 1] = value;
   break;

  case "i32":
   HEAP32[ptr >> 2] = value;
   break;

  case "i64":
   tempI64 = [ value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
   break;

  case "float":
   HEAPF32[ptr >> 2] = value;
   break;

  case "double":
   HEAPF64[ptr >> 3] = value;
   break;

  default:
   abort("invalid type for setValue: " + type);
  }
 } else {
  switch (type) {
  case "i1":
   SAFE_HEAP_STORE(ptr | 0, value | 0, 1);
   break;

  case "i8":
   SAFE_HEAP_STORE(ptr | 0, value | 0, 1);
   break;

  case "i16":
   SAFE_HEAP_STORE(ptr | 0, value | 0, 2);
   break;

  case "i32":
   SAFE_HEAP_STORE(ptr | 0, value | 0, 4);
   break;

  case "i64":
   tempI64 = [ value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   SAFE_HEAP_STORE(ptr | 0, tempI64[0] | 0, 4), SAFE_HEAP_STORE(ptr + 4 | 0, tempI64[1] | 0, 4);
   break;

  case "float":
   SAFE_HEAP_STORE_D(ptr | 0, Math.fround(value), 4);
   break;

  case "double":
   SAFE_HEAP_STORE_D(ptr | 0, +value, 8);
   break;

  default:
   abort("invalid type for setValue: " + type);
  }
 }
}

function getValue(ptr, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 if (noSafe) {
  switch (type) {
  case "i1":
   return HEAP8[ptr >> 0];

  case "i8":
   return HEAP8[ptr >> 0];

  case "i16":
   return HEAP16[ptr >> 1];

  case "i32":
   return HEAP32[ptr >> 2];

  case "i64":
   return HEAP32[ptr >> 2];

  case "float":
   return HEAPF32[ptr >> 2];

  case "double":
   return HEAPF64[ptr >> 3];

  default:
   abort("invalid type for getValue: " + type);
  }
 } else {
  switch (type) {
  case "i1":
   return SAFE_HEAP_LOAD(ptr | 0, 1, 0) | 0;

  case "i8":
   return SAFE_HEAP_LOAD(ptr | 0, 1, 0) | 0;

  case "i16":
   return SAFE_HEAP_LOAD(ptr | 0, 2, 0) | 0;

  case "i32":
   return SAFE_HEAP_LOAD(ptr | 0, 4, 0) | 0;

  case "i64":
   return SAFE_HEAP_LOAD(ptr | 0, 8, 0) | 0;

  case "float":
   return Math.fround(SAFE_HEAP_LOAD_D(ptr | 0, 4, 0));

  case "double":
   return +SAFE_HEAP_LOAD_D(ptr | 0, 8, 0);

  default:
   abort("invalid type for getValue: " + type);
  }
 }
 return null;
}

function getSafeHeapType(bytes, isFloat) {
 switch (bytes) {
 case 1:
  return "i8";

 case 2:
  return "i16";

 case 4:
  return isFloat ? "float" : "i32";

 case 8:
  return "double";

 default:
  assert(0);
 }
}

function SAFE_HEAP_STORE(dest, value, bytes, isFloat) {
 if (dest <= 0) abort("segmentation fault storing " + bytes + " bytes to address " + dest);
 if (dest % bytes !== 0) abort("alignment error storing to address " + dest + ", which was expected to be aligned to a multiple of " + bytes);
 if (runtimeInitialized) {
  var brk = _sbrk() >>> 0;
  if (dest + bytes > brk) abort("segmentation fault, exceeded the top of the available dynamic heap when storing " + bytes + " bytes to address " + dest + ". DYNAMICTOP=" + brk);
  assert(brk >= _emscripten_stack_get_base());
  assert(brk <= HEAP8.length);
 }
 setValue(dest, value, getSafeHeapType(bytes, isFloat), 1);
 return value;
}

function SAFE_HEAP_STORE_D(dest, value, bytes) {
 return SAFE_HEAP_STORE(dest, value, bytes, true);
}

function SAFE_HEAP_LOAD(dest, bytes, unsigned, isFloat) {
 if (dest <= 0) abort("segmentation fault loading " + bytes + " bytes from address " + dest);
 if (dest % bytes !== 0) abort("alignment error loading from address " + dest + ", which was expected to be aligned to a multiple of " + bytes);
 if (runtimeInitialized) {
  var brk = _sbrk() >>> 0;
  if (dest + bytes > brk) abort("segmentation fault, exceeded the top of the available dynamic heap when loading " + bytes + " bytes from address " + dest + ". DYNAMICTOP=" + brk);
  assert(brk >= _emscripten_stack_get_base());
  assert(brk <= HEAP8.length);
 }
 var type = getSafeHeapType(bytes, isFloat);
 var ret = getValue(dest, type, 1);
 if (unsigned) ret = unSign(ret, parseInt(type.substr(1), 10));
 return ret;
}

function SAFE_HEAP_LOAD_D(dest, bytes, unsigned) {
 return SAFE_HEAP_LOAD(dest, bytes, unsigned, true);
}

function SAFE_FT_MASK(value, mask) {
 var ret = value & mask;
 if (ret !== value) {
  abort("Function table mask error: function pointer is " + value + " which is masked by " + mask + ", the likely cause of this is that the function pointer is being called by the wrong type.");
 }
 return ret;
}

function segfault() {
 abort("segmentation fault");
}

function alignfault() {
 abort("alignment fault");
}

function ftfault() {
 abort("Function table mask error");
}

var wasmMemory;

var ABORT = false;

var EXITSTATUS;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed: " + text);
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") return UTF8ToString(ret);
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 assert(returnType !== "array", 'Return type should not be "array".');
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var ret = func.apply(null, cArgs);
 ret = convertReturnValue(ret);
 if (stack !== 0) stackRestore(stack);
 return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
 return function() {
  return ccall(ident, returnType, argTypes, arguments, opts);
 };
}

var ALLOC_NORMAL = 0;

var ALLOC_STACK = 1;

function allocate(slab, allocator) {
 var ret;
 assert(typeof allocator === "number", "allocate no longer takes a type argument");
 assert(typeof slab !== "number", "allocate no longer takes a number as arg0");
 if (allocator == ALLOC_STACK) {
  ret = stackAlloc(slab.length);
 } else {
  ret = _malloc(slab.length);
 }
 if (slab.subarray || slab.slice) {
  HEAPU8.set(slab, ret);
 } else {
  HEAPU8.set(new Uint8Array(slab), ret);
 }
 return ret;
}

var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
  return UTF8Decoder.decode(heap.subarray(idx, endPtr));
 } else {
  var str = "";
  while (idx < endPtr) {
   var u0 = heap[idx++];
   if (!(u0 & 128)) {
    str += String.fromCharCode(u0);
    continue;
   }
   var u1 = heap[idx++] & 63;
   if ((u0 & 224) == 192) {
    str += String.fromCharCode((u0 & 31) << 6 | u1);
    continue;
   }
   var u2 = heap[idx++] & 63;
   if ((u0 & 240) == 224) {
    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
   } else {
    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
   }
   if (u0 < 65536) {
    str += String.fromCharCode(u0);
   } else {
    var ch = u0 - 65536;
    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
   }
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++] = 192 | u >> 6;
   heap[outIdx++] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++] = 224 | u >> 12;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   if (u >= 2097152) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).");
   heap[outIdx++] = 240 | u >> 18;
   heap[outIdx++] = 128 | u >> 12 & 63;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  }
 }
 heap[outIdx] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

function AsciiToString(ptr) {
 var str = "";
 while (1) {
  var ch = SAFE_HEAP_LOAD(ptr++ | 0, 1, 1) >>> 0;
  if (!ch) return str;
  str += String.fromCharCode(ch);
 }
}

function stringToAscii(str, outPtr) {
 return writeAsciiToMemory(str, outPtr, false);
}

var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
 assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
 var endPtr = ptr;
 var idx = endPtr >> 1;
 var maxIdx = idx + maxBytesToRead / 2;
 while (!(idx >= maxIdx) && SAFE_HEAP_LOAD(idx * 2, 2, 1)) ++idx;
 endPtr = idx << 1;
 if (endPtr - ptr > 32 && UTF16Decoder) {
  return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
 } else {
  var str = "";
  for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
   var codeUnit = SAFE_HEAP_LOAD(ptr + i * 2 | 0, 2, 0) | 0;
   if (codeUnit == 0) break;
   str += String.fromCharCode(codeUnit);
  }
  return str;
 }
}

function stringToUTF16(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 2) return 0;
 maxBytesToWrite -= 2;
 var startPtr = outPtr;
 var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
 for (var i = 0; i < numCharsToWrite; ++i) {
  var codeUnit = str.charCodeAt(i);
  SAFE_HEAP_STORE(outPtr | 0, codeUnit | 0, 2);
  outPtr += 2;
 }
 SAFE_HEAP_STORE(outPtr | 0, 0 | 0, 2);
 return outPtr - startPtr;
}

function lengthBytesUTF16(str) {
 return str.length * 2;
}

function UTF32ToString(ptr, maxBytesToRead) {
 assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
 var i = 0;
 var str = "";
 while (!(i >= maxBytesToRead / 4)) {
  var utf32 = SAFE_HEAP_LOAD(ptr + i * 4 | 0, 4, 0) | 0;
  if (utf32 == 0) break;
  ++i;
  if (utf32 >= 65536) {
   var ch = utf32 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  } else {
   str += String.fromCharCode(utf32);
  }
 }
 return str;
}

function stringToUTF32(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 4) return 0;
 var startPtr = outPtr;
 var endPtr = startPtr + maxBytesToWrite - 4;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) {
   var trailSurrogate = str.charCodeAt(++i);
   codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
  }
  SAFE_HEAP_STORE(outPtr | 0, codeUnit | 0, 4);
  outPtr += 4;
  if (outPtr + 4 > endPtr) break;
 }
 SAFE_HEAP_STORE(outPtr | 0, 0 | 0, 4);
 return outPtr - startPtr;
}

function lengthBytesUTF32(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
  len += 4;
 }
 return len;
}

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function allocateUTF8OnStack(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function writeStringToMemory(string, buffer, dontAddNull) {
 warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
 var lastChar, end;
 if (dontAddNull) {
  end = buffer + lengthBytesUTF8(string);
  lastChar = SAFE_HEAP_LOAD(end, 1, 0);
 }
 stringToUTF8(string, buffer, Infinity);
 if (dontAddNull) SAFE_HEAP_STORE(end, lastChar, 1);
}

function writeArrayToMemory(array, buffer) {
 assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
 HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
  SAFE_HEAP_STORE(buffer++ | 0, str.charCodeAt(i) | 0, 1);
 }
 if (!dontAddNull) SAFE_HEAP_STORE(buffer | 0, 0 | 0, 1);
}

function alignUp(x, multiple) {
 if (x % multiple > 0) {
  x += multiple - x % multiple;
 }
 return x;
}

var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBufferAndViews(buf) {
 buffer = buf;
 Module["HEAP8"] = HEAP8 = new Int8Array(buf);
 Module["HEAP16"] = HEAP16 = new Int16Array(buf);
 Module["HEAP32"] = HEAP32 = new Int32Array(buf);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");

var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;

if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) {
 Object.defineProperty(Module, "INITIAL_MEMORY", {
  configurable: true,
  get: function() {
   abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined, "JS engine does not provide full typed array support");

if (Module["wasmMemory"]) {
 wasmMemory = Module["wasmMemory"];
} else {
 wasmMemory = new WebAssembly.Memory({
  "initial": INITIAL_MEMORY / 65536,
  "maximum": 2147483648 / 65536
 });
}

if (wasmMemory) {
 buffer = wasmMemory.buffer;
}

INITIAL_MEMORY = buffer.byteLength;

assert(INITIAL_MEMORY % 65536 === 0);

updateGlobalBufferAndViews(buffer);

var wasmTable;

function writeStackCookie() {
 var max = _emscripten_stack_get_end();
 assert((max & 3) == 0);
 SAFE_HEAP_STORE(((max >> 2) + 1) * 4, 34821223, 4);
 SAFE_HEAP_STORE(((max >> 2) + 2) * 4, 2310721022, 4);
}

function checkStackCookie() {
 if (ABORT) return;
 var max = _emscripten_stack_get_end();
 var cookie1 = SAFE_HEAP_LOAD(((max >> 2) + 1) * 4, 4, 1);
 var cookie2 = SAFE_HEAP_LOAD(((max >> 2) + 2) * 4, 4, 1);
 if (cookie1 != 34821223 || cookie2 != 2310721022) {
  abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
 }
}

(function() {
 var h16 = new Int16Array(1);
 var h8 = new Int8Array(h16.buffer);
 h16[0] = 25459;
 if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
})();

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

var runtimeExited = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
 return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 checkStackCookie();
 assert(!runtimeInitialized);
 runtimeInitialized = true;
 ___set_stack_limits(_emscripten_stack_get_base(), _emscripten_stack_get_end());
 callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
 checkStackCookie();
 callRuntimeCallbacks(__ATEXIT__);
 runtimeExited = true;
}

function postRun() {
 checkStackCookie();
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
 __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
 __ATEXIT__.unshift(cb);
}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

function getUniqueRunDependency(id) {
 var orig = id;
 while (1) {
  if (!runDependencyTracking[id]) return id;
  id = orig + Math.random();
 }
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
   runDependencyWatcher = setInterval(function() {
    if (ABORT) {
     clearInterval(runDependencyWatcher);
     runDependencyWatcher = null;
     return;
    }
    var shown = false;
    for (var dep in runDependencyTracking) {
     if (!shown) {
      shown = true;
      err("still waiting on run dependencies:");
     }
     err("dependency: " + dep);
    }
    if (shown) {
     err("(end of list)");
    }
   }, 1e4);
  }
 } else {
  err("warning: run dependency added without ID");
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
 } else {
  err("warning: run dependency removed without ID");
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

Module["preloadedImages"] = {};

Module["preloadedAudios"] = {};

function abort(what) {
 if (Module["onAbort"]) {
  Module["onAbort"](what);
 }
 what += "";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 var output = "abort(" + what + ") at " + stackTrace();
 what = output;
 var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var FS = {
 error: function() {
  abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
 },
 init: function() {
  FS.error();
 },
 createDataFile: function() {
  FS.error();
 },
 createPreloadedFile: function() {
  FS.error();
 },
 createLazyFile: function() {
  FS.error();
 },
 open: function() {
  FS.error();
 },
 mkdev: function() {
  FS.error();
 },
 registerDevice: function() {
  FS.error();
 },
 analyzePath: function() {
  FS.error();
 },
 loadFilesFromDB: function() {
  FS.error();
 },
 ErrnoError: function ErrnoError() {
  FS.error();
 }
};

Module["FS_createDataFile"] = FS.createDataFile;

Module["FS_createPreloadedFile"] = FS.createPreloadedFile;

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return filename.startsWith(dataURIPrefix);
}

function isFileURI(filename) {
 return filename.startsWith("file://");
}

function createExportWrapper(name, fixedasm) {
 return function() {
  var displayName = name;
  var asm = fixedasm;
  if (!fixedasm) {
   asm = Module["asm"];
  }
  assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
  assert(!runtimeExited, "native function `" + displayName + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  if (!asm[name]) {
   assert(asm[name], "exported native function `" + displayName + "` not found");
  }
  return asm[name].apply(null, arguments);
 };
}

var wasmBinaryFile;

wasmBinaryFile = "safe-heap-module.wasm";

if (!isDataURI(wasmBinaryFile)) {
 wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
 try {
  if (file == wasmBinaryFile && wasmBinary) {
   return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
   return readBinary(file);
  } else {
   throw "both async and sync fetching of the wasm failed";
  }
 } catch (err) {
  abort(err);
 }
}

function getBinaryPromise() {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch === "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
    }
    return response["arrayBuffer"]();
   }).catch(function() {
    return getBinary(wasmBinaryFile);
   });
  }
 }
 return Promise.resolve().then(function() {
  return getBinary(wasmBinaryFile);
 });
}

var wasmSourceMap;

function WasmSourceMap(sourceMap) {
 this.version = sourceMap.version;
 this.sources = sourceMap.sources;
 this.names = sourceMap.names;
 this.mapping = {};
 this.offsets = [];
 var vlqMap = {};
 "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").forEach(function(c, i) {
  vlqMap[c] = i;
 });
 function decodeVLQ(string) {
  var result = [];
  var shift = 0;
  var value = 0;
  for (var i = 0; i < string.length; ++i) {
   var integer = vlqMap[string[i]];
   if (integer === undefined) {
    throw new Error("Invalid character (" + string[i] + ")");
   }
   value += (integer & 31) << shift;
   if (integer & 32) {
    shift += 5;
   } else {
    var negate = value & 1;
    value >>= 1;
    result.push(negate ? -value : value);
    value = shift = 0;
   }
  }
  return result;
 }
 var offset = 0, src = 0, line = 1, col = 1, name = 0;
 sourceMap.mappings.split(",").forEach(function(segment, index) {
  if (!segment) return;
  var data = decodeVLQ(segment);
  var info = {};
  offset += data[0];
  if (data.length >= 2) info.source = src += data[1];
  if (data.length >= 3) info.line = line += data[2];
  if (data.length >= 4) info.column = col += data[3];
  if (data.length >= 5) info.name = name += data[4];
  this.mapping[offset] = info;
  this.offsets.push(offset);
 }, this);
 this.offsets.sort(function(a, b) {
  return a - b;
 });
}

WasmSourceMap.prototype.lookup = function(offset) {
 var normalized = this.normalizeOffset(offset);
 if (!wasmOffsetConverter.isSameFunc(offset, normalized)) {
  return null;
 }
 var info = this.mapping[normalized];
 if (!info) {
  return null;
 }
 return {
  source: this.sources[info.source],
  line: info.line,
  column: info.column,
  name: this.names[info.name]
 };
};

WasmSourceMap.prototype.normalizeOffset = function(offset) {
 var lo = 0;
 var hi = this.offsets.length;
 var mid;
 while (lo < hi) {
  mid = Math.floor((lo + hi) / 2);
  if (this.offsets[mid] > offset) {
   hi = mid;
  } else {
   lo = mid + 1;
  }
 }
 return this.offsets[lo - 1];
};

var wasmSourceMapFile = "safe-heap-module.wasm.map";

if (!isDataURI(wasmBinaryFile)) {
 wasmSourceMapFile = locateFile(wasmSourceMapFile);
}

function getSourceMap() {
 try {
  return JSON.parse(read_(wasmSourceMapFile));
 } catch (err) {
  abort(err);
 }
}

function getSourceMapPromise() {
 if ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
  return fetch(wasmSourceMapFile, {
   credentials: "same-origin"
  }).then(function(response) {
   return response["json"]();
  }).catch(function() {
   return getSourceMap();
  });
 }
 return new Promise(function(resolve, reject) {
  resolve(getSourceMap());
 });
}

var wasmOffsetConverter;

function WasmOffsetConverter(wasmBytes, wasmModule) {
 var offset = 8;
 var funcidx = 0;
 this.offset_map = {};
 this.func_starts = [];
 this.name_map = {};
 this.import_functions = 0;
 var buffer = wasmBytes;
 function unsignedLEB128() {
  var result = 0;
  var shift = 0;
  do {
   var byte = buffer[offset++];
   result += (byte & 127) << shift;
   shift += 7;
  } while (byte & 128);
  return result;
 }
 function skipLimits() {
  var flags = unsignedLEB128();
  unsignedLEB128();
  var hasMax = (flags & 1) != 0;
  if (hasMax) {
   unsignedLEB128();
  }
 }
 binary_parse: while (offset < buffer.length) {
  var start = offset;
  var type = buffer[offset++];
  var end = unsignedLEB128() + offset;
  switch (type) {
  case 2:
   var count = unsignedLEB128();
   while (count-- > 0) {
    offset = unsignedLEB128() + offset;
    offset = unsignedLEB128() + offset;
    switch (buffer[offset++]) {
    case 0:
     ++funcidx;
     unsignedLEB128();
     break;

    case 1:
     ++offset;
     skipLimits();
     break;

    case 2:
     skipLimits();
     break;

    case 3:
     offset += 2;
     break;

    default:
     throw "bad import kind";
    }
   }
   this.import_functions = funcidx;
   break;

  case 10:
   var count = unsignedLEB128();
   while (count-- > 0) {
    var size = unsignedLEB128();
    this.offset_map[funcidx++] = offset;
    this.func_starts.push(offset);
    offset += size;
   }
   break binary_parse;
  }
  offset = end;
 }
 var sections = WebAssembly.Module.customSections(wasmModule, "name");
 for (var i = 0; i < sections.length; ++i) {
  buffer = new Uint8Array(sections[i]);
  if (buffer[0] != 1) continue;
  offset = 1;
  unsignedLEB128();
  var count = unsignedLEB128();
  while (count-- > 0) {
   var index = unsignedLEB128();
   var length = unsignedLEB128();
   this.name_map[index] = UTF8ArrayToString(buffer, offset, length);
   offset += length;
  }
 }
}

WasmOffsetConverter.prototype.convert = function(funcidx, offset) {
 return this.offset_map[funcidx] + offset;
};

WasmOffsetConverter.prototype.getIndex = function(offset) {
 var lo = 0;
 var hi = this.func_starts.length;
 var mid;
 while (lo < hi) {
  mid = Math.floor((lo + hi) / 2);
  if (this.func_starts[mid] > offset) {
   hi = mid;
  } else {
   lo = mid + 1;
  }
 }
 return lo + this.import_functions - 1;
};

WasmOffsetConverter.prototype.isSameFunc = function(offset1, offset2) {
 return this.getIndex(offset1) == this.getIndex(offset2);
};

WasmOffsetConverter.prototype.getName = function(offset) {
 var index = this.getIndex(offset);
 return this.name_map[index] || "wasm-function[" + index + "]";
};

function createWasm() {
 var info = {
  "env": asmLibraryArg,
  "wasi_snapshot_preview1": asmLibraryArg
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  Module["asm"] = exports;
  wasmTable = Module["asm"]["__indirect_function_table"];
  assert(wasmTable, "table not found in wasm exports");
  addOnInit(Module["asm"]["__wasm_call_ctors"]);
  removeRunDependency("wasm-instantiate");
 }
 addRunDependency("wasm-instantiate");
 addRunDependency("source-map");
 function receiveSourceMapJSON(sourceMap) {
  wasmSourceMap = new WasmSourceMap(sourceMap);
  removeRunDependency("source-map");
 }
 addRunDependency("offset-converter");
 var trueModule = Module;
 function receiveInstantiationResult(result) {
  assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
  trueModule = null;
  receiveInstance(result["instance"]);
 }
 function instantiateArrayBuffer(receiver) {
  return getBinaryPromise().then(function(binary) {
   var result = WebAssembly.instantiate(binary, info);
   result.then(function(instance) {
    wasmOffsetConverter = new WasmOffsetConverter(binary, instance.module);
    removeRunDependency("offset-converter");
   });
   return result;
  }).then(receiver, function(reason) {
   err("failed to asynchronously prepare wasm: " + reason);
   if (isFileURI(wasmBinaryFile)) {
    err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
   }
   abort(reason);
  });
 }
 function instantiateAsync() {
  if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    var result = WebAssembly.instantiateStreaming(response, info);
    Promise.all([ response.clone().arrayBuffer(), result ]).then(function(results) {
     wasmOffsetConverter = new WasmOffsetConverter(new Uint8Array(results[0]), results[1].module);
     removeRunDependency("offset-converter");
    }, function(reason) {
     err("failed to initialize offset-converter: " + reason);
    });
    return result.then(receiveInstantiationResult, function(reason) {
     err("wasm streaming compile failed: " + reason);
     err("falling back to ArrayBuffer instantiation");
     return instantiateArrayBuffer(receiveInstantiationResult);
    });
   });
  } else {
   return instantiateArrayBuffer(receiveInstantiationResult);
  }
 }
 if (Module["instantiateWasm"]) {
  try {
   var exports = Module["instantiateWasm"](info, receiveInstance);
   wasmOffsetConverter = {
    getName: function() {
     return "unknown-due-to-instantiateWasm";
    }
   };
   removeRunDependency("offset-converter");
   return exports;
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   return false;
  }
 }
 instantiateAsync().catch(readyPromiseReject);
 getSourceMapPromise().then(receiveSourceMapJSON);
 return {};
}

var tempDouble;

var tempI64;

var ASM_CONSTS = {};

function Debug_error(message) {
 RcJsUtilDebug.error(UTF8ToString(message));
}

function Debug_onAllocate() {
 RcJsUtilDebug.onAllocate.emit();
}

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback(Module);
   continue;
  }
  var func = callback.func;
  if (typeof func === "number") {
   if (callback.arg === undefined) {
    wasmTable.get(func)();
   } else {
    wasmTable.get(func)(callback.arg);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}

function demangle(func) {
 warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
 return func;
}

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

function jsStackTrace() {
 var error = new Error();
 if (!error.stack) {
  try {
   throw new Error();
  } catch (e) {
   error = e;
  }
  if (!error.stack) {
   return "(no stack trace available)";
  }
 }
 return error.stack.toString();
}

function stackTrace() {
 var js = jsStackTrace();
 if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
 return demangleAll(js);
}

function unSign(value, bits) {
 if (value >= 0) {
  return value;
 }
 return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value;
}

function ___cxa_allocate_exception(size) {
 return _malloc(size + 16) + 16;
}

function ExceptionInfo(excPtr) {
 this.excPtr = excPtr;
 this.ptr = excPtr - 16;
 this.set_type = function(type) {
  SAFE_HEAP_STORE(this.ptr + 4 | 0, type | 0, 4);
 };
 this.get_type = function() {
  return SAFE_HEAP_LOAD(this.ptr + 4 | 0, 4, 0) | 0;
 };
 this.set_destructor = function(destructor) {
  SAFE_HEAP_STORE(this.ptr + 8 | 0, destructor | 0, 4);
 };
 this.get_destructor = function() {
  return SAFE_HEAP_LOAD(this.ptr + 8 | 0, 4, 0) | 0;
 };
 this.set_refcount = function(refcount) {
  SAFE_HEAP_STORE(this.ptr | 0, refcount | 0, 4);
 };
 this.set_caught = function(caught) {
  caught = caught ? 1 : 0;
  SAFE_HEAP_STORE(this.ptr + 12 | 0, caught | 0, 1);
 };
 this.get_caught = function() {
  return (SAFE_HEAP_LOAD(this.ptr + 12 | 0, 1, 0) | 0) != 0;
 };
 this.set_rethrown = function(rethrown) {
  rethrown = rethrown ? 1 : 0;
  SAFE_HEAP_STORE(this.ptr + 13 | 0, rethrown | 0, 1);
 };
 this.get_rethrown = function() {
  return (SAFE_HEAP_LOAD(this.ptr + 13 | 0, 1, 0) | 0) != 0;
 };
 this.init = function(type, destructor) {
  this.set_type(type);
  this.set_destructor(destructor);
  this.set_refcount(0);
  this.set_caught(false);
  this.set_rethrown(false);
 };
 this.add_ref = function() {
  var value = SAFE_HEAP_LOAD(this.ptr | 0, 4, 0) | 0;
  SAFE_HEAP_STORE(this.ptr | 0, value + 1 | 0, 4);
 };
 this.release_ref = function() {
  var prev = SAFE_HEAP_LOAD(this.ptr | 0, 4, 0) | 0;
  SAFE_HEAP_STORE(this.ptr | 0, prev - 1 | 0, 4);
  assert(prev > 0);
  return prev === 1;
 };
}

var exceptionLast = 0;

var uncaughtExceptionCount = 0;

function ___cxa_throw(ptr, type, destructor) {
 var info = new ExceptionInfo(ptr);
 info.init(type, destructor);
 exceptionLast = ptr;
 uncaughtExceptionCount++;
 throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s NO_DISABLE_EXCEPTION_CATCHING or -s EXCEPTION_CATCHING_ALLOWED=[..] to catch.";
}

function ___handle_stack_overflow() {
 abort("stack overflow");
}

function _abort() {
 abort();
}

function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.copyWithin(dest, src, src + num);
}

var _emscripten_get_now;

_emscripten_get_now = function() {
 return performance.now();
};

function emscripten_realloc_buffer(size) {
 try {
  wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
  updateGlobalBufferAndViews(wasmMemory.buffer);
  return 1;
 } catch (e) {
  console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
 }
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = HEAPU8.length;
 requestedSize = requestedSize >>> 0;
 assert(requestedSize > oldSize);
 var maxHeapSize = 2147483648;
 if (requestedSize > maxHeapSize) {
  err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
  return false;
 }
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var t0 = _emscripten_get_now();
  var replacement = emscripten_realloc_buffer(newSize);
  var t1 = _emscripten_get_now();
  console.log("Heap resize call from " + oldSize + " to " + newSize + " took " + (t1 - t0) + " msecs. Success: " + !!replacement);
  if (replacement) {
   return true;
  }
 }
 err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
 return false;
}

function _exit(status) {
 exit(status);
}

var ASSERTIONS = true;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   if (ASSERTIONS) {
    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
   }
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}

var asmLibraryArg = {
 "Debug_error": Debug_error,
 "Debug_onAllocate": Debug_onAllocate,
 "__cxa_allocate_exception": ___cxa_allocate_exception,
 "__cxa_throw": ___cxa_throw,
 "__handle_stack_overflow": ___handle_stack_overflow,
 "abort": _abort,
 "alignfault": alignfault,
 "emscripten_memcpy_big": _emscripten_memcpy_big,
 "emscripten_resize_heap": _emscripten_resize_heap,
 "exit": _exit,
 "memory": wasmMemory,
 "segfault": segfault
};

var asm = createWasm();

var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

var _jsUtilEndProgram = Module["_jsUtilEndProgram"] = createExportWrapper("jsUtilEndProgram");

var _jsUtilMalloc = Module["_jsUtilMalloc"] = createExportWrapper("jsUtilMalloc");

var _malloc = Module["_malloc"] = createExportWrapper("malloc");

var _jsUtilCalloc = Module["_jsUtilCalloc"] = createExportWrapper("jsUtilCalloc");

var _jsUtilFree = Module["_jsUtilFree"] = createExportWrapper("jsUtilFree");

var _free = Module["_free"] = createExportWrapper("free");

var _f32Interleaved2dLineQuadIndexer_index = Module["_f32Interleaved2dLineQuadIndexer_index"] = createExportWrapper("f32Interleaved2dLineQuadIndexer_index");

var _f64Interleaved2dLineQuadIndexer_index = Module["_f64Interleaved2dLineQuadIndexer_index"] = createExportWrapper("f64Interleaved2dLineQuadIndexer_index");

var _f32Interleaved2dLineQuadIndexer_getOffsets = Module["_f32Interleaved2dLineQuadIndexer_getOffsets"] = createExportWrapper("f32Interleaved2dLineQuadIndexer_getOffsets");

var _f64Interleaved2dLineQuadIndexer_getOffsets = Module["_f64Interleaved2dLineQuadIndexer_getOffsets"] = createExportWrapper("f64Interleaved2dLineQuadIndexer_getOffsets");

var _f32InterleavedConnector_createOne = Module["_f32InterleavedConnector_createOne"] = createExportWrapper("f32InterleavedConnector_createOne");

var _f32InterleavedConnector_setStart = Module["_f32InterleavedConnector_setStart"] = createExportWrapper("f32InterleavedConnector_setStart");

var _f32InterleavedConnector_setLength = Module["_f32InterleavedConnector_setLength"] = createExportWrapper("f32InterleavedConnector_setLength");

var _f32InterleavedConnector_delete = Module["_f32InterleavedConnector_delete"] = createExportWrapper("f32InterleavedConnector_delete");

var _f64InterleavedConnector_createOne = Module["_f64InterleavedConnector_createOne"] = createExportWrapper("f64InterleavedConnector_createOne");

var _f64InterleavedConnector_setStart = Module["_f64InterleavedConnector_setStart"] = createExportWrapper("f64InterleavedConnector_setStart");

var _f64InterleavedConnector_setLength = Module["_f64InterleavedConnector_setLength"] = createExportWrapper("f64InterleavedConnector_setLength");

var _f64InterleavedConnector_delete = Module["_f64InterleavedConnector_delete"] = createExportWrapper("f64InterleavedConnector_delete");

var _f32QuadTree_createTree = Module["_f32QuadTree_createTree"] = createExportWrapper("f32QuadTree_createTree");

var _f32QuadTree_setTopLevel = Module["_f32QuadTree_setTopLevel"] = createExportWrapper("f32QuadTree_setTopLevel");

var _f32QuadTree_queryPoint = Module["_f32QuadTree_queryPoint"] = createExportWrapper("f32QuadTree_queryPoint");

var _f32QuadTree_insertRange = Module["_f32QuadTree_insertRange"] = createExportWrapper("f32QuadTree_insertRange");

var _f32QuadTree_delete = Module["_f32QuadTree_delete"] = createExportWrapper("f32QuadTree_delete");

var _quadTree_setOptions = Module["_quadTree_setOptions"] = createExportWrapper("quadTree_setOptions");

var _quadTree_getResultAddress = Module["_quadTree_getResultAddress"] = createExportWrapper("quadTree_getResultAddress");

var _quadTree_getQuadElementCount = Module["_quadTree_getQuadElementCount"] = createExportWrapper("quadTree_getQuadElementCount");

var _f32SharedArray_createOne = Module["_f32SharedArray_createOne"] = createExportWrapper("f32SharedArray_createOne");

var _f32SharedArray_getArrayAddress = Module["_f32SharedArray_getArrayAddress"] = createExportWrapper("f32SharedArray_getArrayAddress");

var _f32SharedArray_delete = Module["_f32SharedArray_delete"] = createExportWrapper("f32SharedArray_delete");

var _f64SharedArray_delete = Module["_f64SharedArray_delete"] = createExportWrapper("f64SharedArray_delete");

var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

var _fflush = Module["_fflush"] = createExportWrapper("fflush");

var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
 return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
 return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
 return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
 return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

var _memset = Module["_memset"] = createExportWrapper("memset");

var _sbrk = Module["_sbrk"] = createExportWrapper("sbrk");

var _memalign = Module["_memalign"] = createExportWrapper("memalign");

var _emscripten_builtin_malloc = Module["_emscripten_builtin_malloc"] = createExportWrapper("emscripten_builtin_malloc");

var _emscripten_builtin_free = Module["_emscripten_builtin_free"] = createExportWrapper("emscripten_builtin_free");

var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = createExportWrapper("emscripten_builtin_memalign");

var _emscripten_get_sbrk_ptr = Module["_emscripten_get_sbrk_ptr"] = createExportWrapper("emscripten_get_sbrk_ptr");

var ___set_stack_limits = Module["___set_stack_limits"] = createExportWrapper("__set_stack_limits");

var ___heap_base = Module["___heap_base"] = 5442176;

var ___global_base = Module["___global_base"] = 1024;

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() {
 abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() {
 abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() {
 abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() {
 abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() {
 abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() {
 abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() {
 abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() {
 abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() {
 abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() {
 abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() {
 abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() {
 abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() {
 abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() {
 abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() {
 abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() {
 abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() {
 abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() {
 abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() {
 abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() {
 abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() {
 abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() {
 abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() {
 abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() {
 abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() {
 abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() {
 abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() {
 abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() {
 abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() {
 abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() {
 abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() {
 abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() {
 abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() {
 abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() {
 abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() {
 abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() {
 abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() {
 abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
 abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() {
 abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
 abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() {
 abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() {
 abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() {
 abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() {
 abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() {
 abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() {
 abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() {
 abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() {
 abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "WasmOffsetConverter")) Module["WasmOffsetConverter"] = function() {
 abort("'WasmOffsetConverter' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "WasmSourceMap")) Module["WasmSourceMap"] = function() {
 abort("'WasmSourceMap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() {
 abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() {
 abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() {
 abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() {
 abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() {
 abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() {
 abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() {
 abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() {
 abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() {
 abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() {
 abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() {
 abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() {
 abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() {
 abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() {
 abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() {
 abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() {
 abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() {
 abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() {
 abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() {
 abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() {
 abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() {
 abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() {
 abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() {
 abort("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() {
 abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() {
 abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() {
 abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() {
 abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() {
 abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() {
 abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() {
 abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() {
 abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() {
 abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() {
 abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
 abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() {
 abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() {
 abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() {
 abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() {
 abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() {
 abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() {
 abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() {
 abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() {
 abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() {
 abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() {
 abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() {
 abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() {
 abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() {
 abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() {
 abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() {
 abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() {
 abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() {
 abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() {
 abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() {
 abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() {
 abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() {
 abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() {
 abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() {
 abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() {
 abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() {
 abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() {
 abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() {
 abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() {
 abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() {
 abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() {
 abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() {
 abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() {
 abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() {
 abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() {
 abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() {
 abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() {
 abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() {
 abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() {
 abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() {
 abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() {
 abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() {
 abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() {
 abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() {
 abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() {
 abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() {
 abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() {
 abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() {
 abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() {
 abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() {
 abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() {
 abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() {
 abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() {
 abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() {
 abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() {
 abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() {
 abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() {
 abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() {
 abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() {
 abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() {
 abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() {
 abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() {
 abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() {
 abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() {
 abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() {
 abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() {
 abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() {
 abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() {
 abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() {
 abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() {
 abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() {
 abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() {
 abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() {
 abort("'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() {
 abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() {
 abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() {
 abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() {
 abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() {
 abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() {
 abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() {
 abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() {
 abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() {
 abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() {
 abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() {
 abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() {
 abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() {
 abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() {
 abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() {
 abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() {
 abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() {
 abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() {
 abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
 abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() {
 abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() {
 abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() {
 abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() {
 abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() {
 abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() {
 abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() {
 abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() {
 abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() {
 abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() {
 abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() {
 abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() {
 abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() {
 abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() {
 abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() {
 abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() {
 abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() {
 abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() {
 abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() {
 abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() {
 abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() {
 abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() {
 abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() {
 abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() {
 abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() {
 abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() {
 abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() {
 abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() {
 abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() {
 abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() {
 abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() {
 abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() {
 abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() {
 abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() {
 abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() {
 abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() {
 abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() {
 abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() {
 abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() {
 abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() {
 abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() {
 abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() {
 abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() {
 abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() {
 abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() {
 abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() {
 abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() {
 abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() {
 abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() {
 abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["writeStackCookie"] = writeStackCookie;

Module["checkStackCookie"] = checkStackCookie;

if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", {
 configurable: true,
 get: function() {
  abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
 }
});

if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", {
 configurable: true,
 get: function() {
  abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
 }
});

var calledRun;

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function stackCheckInit() {
 _emscripten_stack_init();
 writeStackCookie();
}

function run(args) {
 args = args || arguments_;
 if (runDependencies > 0) {
  return;
 }
 stackCheckInit();
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
 checkStackCookie();
}

Module["run"] = run;

function exit(status, implicit) {
 EXITSTATUS = status;
 if (keepRuntimeAlive()) {
  if (!implicit) {
   var msg = "program exited (with status: " + status + "), but keepRuntimeAlive() is set (counter=" + runtimeKeepaliveCounter + ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
   readyPromiseReject(msg);
   err(msg);
  }
 } else {
  exitRuntime();
  if (Module["onExit"]) Module["onExit"](status);
  ABORT = true;
 }
 quit_(status, new ExitStatus(status));
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

run();


  return Module.ready
}
);
})();
if (true)
  module.exports = Module;
else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/test/main.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.glTestChartGo = exports.canvasTestChartGo = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.es6.js");
const rc_js_util_1 = __webpack_require__(/*! rc-js-util */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/index.js");
const canvas_line_graphics_component_1 = __webpack_require__(/*! ../plugins/cartesian2d/series/canvas-line-graphics-component */ "./src/plugins/cartesian2d/series/canvas-line-graphics-component.ts");
const canvas_cartesian_plot_factory_1 = __webpack_require__(/*! ../plugins/cartesian2d/canvas-cartesian-plot-factory */ "./src/plugins/cartesian2d/canvas-cartesian-plot-factory.ts");
const chart_data_entity_1 = __webpack_require__(/*! ../core/entities/chart-data-entity */ "./src/core/entities/chart-data-entity.ts");
const gl_cartesian2d_camera_binder_1 = __webpack_require__(/*! ../plugins/cartesian2d/gl-cartesian2d-camera-binder */ "./src/plugins/cartesian2d/gl-cartesian2d-camera-binder.ts");
const gl2_context_adapter_1 = __webpack_require__(/*! ../core/rendering/gl/context/gl2-context-adapter */ "./src/core/rendering/gl/context/gl2-context-adapter.ts");
const gl_renderer_options_1 = __webpack_require__(/*! ../core/rendering/gl/gl-renderer-options */ "./src/core/rendering/gl/gl-renderer-options.ts");
const gl_cartesian2d_update_arg_provider_1 = __webpack_require__(/*! ../plugins/cartesian2d/categories/gl-cartesian2d-update-arg-provider */ "./src/plugins/cartesian2d/categories/gl-cartesian2d-update-arg-provider.ts");
const canvas_chart_factory_1 = __webpack_require__(/*! ../plugins/cartesian2d/canvas-chart-factory */ "./src/plugins/cartesian2d/canvas-chart-factory.ts");
const canvas_cartesian2d_update_arg_provider_1 = __webpack_require__(/*! ../plugins/cartesian2d/categories/canvas-cartesian2d-update-arg-provider */ "./src/plugins/cartesian2d/categories/canvas-cartesian2d-update-arg-provider.ts");
const gl_chart_factory_1 = __webpack_require__(/*! ../plugins/cartesian2d/gl-chart-factory */ "./src/plugins/cartesian2d/gl-chart-factory.ts");
const gl_cartesian_plot_factory_1 = __webpack_require__(/*! ../plugins/cartesian2d/gl-cartesian-plot-factory */ "./src/plugins/cartesian2d/gl-cartesian-plot-factory.ts");
const hit_always_allowed_component_1 = __webpack_require__(/*! ../core/eventing/user-interaction/hit-test/hit-always-allowed-component */ "./src/core/eventing/user-interaction/hit-test/hit-always-allowed-component.ts");
const chart_config_1 = __webpack_require__(/*! ../core/chart-config */ "./src/core/chart-config.ts");
const shared_interleaved2d_line_quad_indexer_1 = __webpack_require__(/*! ../plugins/cartesian2d/interleaved-point-connector/shared-interleaved2d-line-quad-indexer */ "./src/plugins/cartesian2d/interleaved-point-connector/shared-interleaved2d-line-quad-indexer.ts");
const shared_interleaved_connector_1 = __webpack_require__(/*! ../plugins/cartesian2d/interleaved-point-connector/shared-interleaved-connector */ "./src/plugins/cartesian2d/interleaved-point-connector/shared-interleaved-connector.ts");
const set_debug_app_test_flags_1 = __webpack_require__(/*! rc-js-util/bin/src/debug/impl/set-debug-app-test-flags */ "../../common/temp/node_modules/.pnpm/rc-js-util@7.1.0/node_modules/rc-js-util/bin/src/debug/impl/set-debug-app-test-flags.js");
const cartesian2d_plot_shared_quad_tree_1 = __webpack_require__(/*! ../plugins/cartesian2d/cartesian2d-plot-shared-quad-tree */ "./src/plugins/cartesian2d/cartesian2d-plot-shared-quad-tree.ts");
const point2d_subcategory_1 = __webpack_require__(/*! ../plugins/cartesian2d/point2d-subcategory */ "./src/plugins/cartesian2d/point2d-subcategory.ts");
const get_test_plot_options_1 = __webpack_require__(/*! ../extract/get-test-plot-options */ "./src/extract/get-test-plot-options.ts");
const populate_test_data_1 = __webpack_require__(/*! ../extract/populate-test-data */ "./src/extract/populate-test-data.ts");
const gl_interleaved2d_point_binder_1 = __webpack_require__(/*! ../plugins/cartesian2d/interleaved-point-connector/gl-interleaved2d-point-binder */ "./src/plugins/cartesian2d/interleaved-point-connector/gl-interleaved2d-point-binder.ts");
const hit_testable_shared_interleaved_point_1 = __webpack_require__(/*! ../plugins/cartesian2d/interleaved-point-connector/hit-testable-shared-interleaved-point */ "./src/plugins/cartesian2d/interleaved-point-connector/hit-testable-shared-interleaved-point.ts");
const gl_point_graphics_component_1 = __webpack_require__(/*! ../plugins/cartesian2d/series/gl-point-graphics-component */ "./src/plugins/cartesian2d/series/gl-point-graphics-component.ts");
const gl_line_size_capped_graphics_component_1 = __webpack_require__(/*! ../plugins/cartesian2d/series/gl-line-size-capped-graphics-component */ "./src/plugins/cartesian2d/series/gl-line-size-capped-graphics-component.ts");
const gl_capless_line_graphics_component_1 = __webpack_require__(/*! ../plugins/cartesian2d/series/gl-capless-line-graphics-component */ "./src/plugins/cartesian2d/series/gl-capless-line-graphics-component.ts");
const cartesian2d_plot_range_1 = __webpack_require__(/*! ../plugins/cartesian2d/cartesian2d-plot-range */ "./src/plugins/cartesian2d/cartesian2d-plot-range.ts");
const t_point2d_display_settings_trait_1 = __webpack_require__(/*! ../plugins/cartesian2d/traits/t-point2d-display-settings-trait */ "./src/plugins/cartesian2d/traits/t-point2d-display-settings-trait.ts");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const testModule = __webpack_require__(/*! safe-heap-module */ "./build/safe-heap-module.js");
(0, set_debug_app_test_flags_1.setDefaultAppTestFlags)();
const rnd = new rc_js_util_1.Mulberry32Generator(79769);
window.onload = () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const emscriptenModule = yield (0, rc_js_util_1.getEmscriptenWrapper)(new WebAssembly.Memory({ initial: 256, maximum: 8192 }), testModule);
    canvasTestChartGo(emscriptenModule);
    glTestChartGo(emscriptenModule);
});
function canvasTestChartGo(emscriptenModule) {
    const dataRange = rc_js_util_1.Range2d.f64.factory.createOne(-2, 2, -2, 2);
    const someData = shared_interleaved_connector_1.SharedInterleavedConnector.createOneF32(emscriptenModule, 40, { offsets: { x: 0, y: 1, size: 2, color: 3 }, blockElementCount: 4 });
    (0, populate_test_data_1.populateTestData)(someData, dataRange, 255, rnd);
    const chart = canvas_chart_factory_1.CanvasChartFactory.createOne(document.getElementById("canvas-chart"), new chart_config_1.ChartConfig());
    const pointSubcategory = new point2d_subcategory_1.Point2dSubcategory(rc_js_util_1.Range1d.f64.factory.createOne(10, 20));
    const graphicsSettings = {
        pointDisplay: new t_point2d_display_settings_trait_1.Point2dDisplaySettings(1, rc_js_util_1.RgbaColorPacker.packColor(255, 0, 0, 255)),
        pointSizeNormalizer: pointSubcategory.normalization,
        zIndexAbs: 0,
        zIndexRel: 0,
    };
    if (chart == null) {
        throw new Error("failed to create renderer");
    }
    const canvasLineGraphicsComponent = new canvas_line_graphics_component_1.CanvasLineGraphicsComponent();
    const plot1 = chart.addPlot(canvas_cartesian_plot_factory_1.CanvasCartesianPlotFactory.createOne(chart, (0, get_test_plot_options_1.getTestPlotOptions)(new canvas_cartesian2d_update_arg_provider_1.CanvasCartesian2dUpdateArgProvider(), rc_js_util_1.Range2d.f32.factory.createOne(-1, 0, -1, 0), "plot lower left", cartesian2d_plot_range_1.Cartesian2dPlotRange.createOneF64(rc_js_util_1.Range2d.f64.factory.createOne(-4, 4, -4, 4), dataRange.slice(), 4, chart.attachPoint.canvasDims))));
    plot1.dataCategory.addEntity(new chart_data_entity_1.ChartDataEntity(someData, graphicsSettings, chart.changeIdFactory), canvasLineGraphicsComponent, pointSubcategory);
    const plot2 = chart.addPlot(canvas_cartesian_plot_factory_1.CanvasCartesianPlotFactory.createOne(chart, (0, get_test_plot_options_1.getTestPlotOptions)(new canvas_cartesian2d_update_arg_provider_1.CanvasCartesian2dUpdateArgProvider(), rc_js_util_1.Range2d.f32.factory.createOne(0, 1, 0, 1), "plot upper right", cartesian2d_plot_range_1.Cartesian2dPlotRange.createOneF64(rc_js_util_1.Range2d.f64.factory.createOne(-4, 4, -4, 4), dataRange.slice(), 4, chart.attachPoint.canvasDims))));
    plot2.dataCategory.addEntity(new chart_data_entity_1.ChartDataEntity(someData, graphicsSettings, chart.changeIdFactory), canvasLineGraphicsComponent, pointSubcategory);
    const plot2InteractionHandler = new cartesian2d_plot_shared_quad_tree_1.Cartesian2dPlotSharedQuadTree(plot2, { yieldTime: 16 });
    plot2InteractionHandler.setQuadTreeInteractionHandler(emscriptenModule, chart);
    chart.updateImmediate();
    chart.updateInteractionHandlers();
    window.addEventListener("resize", rc_js_util_1._Fp.debounce(250, false, () => {
        chart.updateOnNextFrame();
    }));
}
exports.canvasTestChartGo = canvasTestChartGo;
function glTestChartGo(emscriptenModule) {
    const dataRange = rc_js_util_1.Range2d.f32.factory.createOne(3, 5, 3, 5);
    const someData = shared_interleaved_connector_1.SharedInterleavedConnector.createOneF32(emscriptenModule, 40, { offsets: { x: 0, y: 1, size: 2, color: 3 }, blockElementCount: 4 });
    (0, populate_test_data_1.populateTestData)(someData, dataRange, 0, rnd);
    const chart = gl_chart_factory_1.GlChartFactory.createOne(document.getElementById("gl-chart"), gl2_context_adapter_1.Gl2ContextAdapter, new chart_config_1.ChartConfig(), new gl_renderer_options_1.GlRendererOptions([], { preserveDrawingBuffer: true }));
    if (chart == null) {
        throw new Error("failed to create renderer");
    }
    const pointSubcategory = new point2d_subcategory_1.Point2dSubcategory(rc_js_util_1.Range1d.f32.factory.createOne(10, 20));
    const graphicsSettings = {
        pointDisplay: new t_point2d_display_settings_trait_1.Point2dDisplaySettings(1, rc_js_util_1.RgbaColorPacker.packColor(255, 0, 0, 255)),
        pointSizeNormalizer: pointSubcategory.normalization,
        zIndexAbs: 0,
        zIndexRel: 0,
    };
    const interleavedPointTester = {
        hitAllowedComponent: new hit_always_allowed_component_1.HitAlwaysAllowedComponent(),
        hitTestComponent: new hit_testable_shared_interleaved_point_1.HitTestableSharedInterleavedPoint(shared_interleaved2d_line_quad_indexer_1.SharedInterleaved2dLineQuadIndexer.createOneF32(emscriptenModule)),
    };
    const pointBinder = new gl_interleaved2d_point_binder_1.GlInterleaved2dPointBinder(someData.getDescriptor(), { pointsToBind: 1 });
    const pointPairBinder = new gl_interleaved2d_point_binder_1.GlInterleaved2dPointBinder(someData.getDescriptor(), { pointsToBind: 2, byteStride: someData.getBlockByteSize() * 2 });
    const pointTripletBinder = new gl_interleaved2d_point_binder_1.GlInterleaved2dPointBinder(someData.getDescriptor(), { pointsToBind: 3, byteStride: someData.getBlockByteSize() * 3 });
    pointPairBinder.mergeTracePositionBuffers([pointTripletBinder]);
    const gc = chart.renderer
        .createCompositeGraphicsComponent(new gl_line_size_capped_graphics_component_1.GlLineFlatCapGraphicsComponent(new gl_cartesian2d_camera_binder_1.GlCartesian2dCameraBinder(), pointTripletBinder))
        .addComponent(new gl_capless_line_graphics_component_1.GlCaplessLineGraphicsComponent(new gl_cartesian2d_camera_binder_1.GlCartesian2dCameraBinder(), pointPairBinder))
        .addComponent(new gl_point_graphics_component_1.GlPointGraphicsComponent(new gl_cartesian2d_camera_binder_1.GlCartesian2dCameraBinder(), pointBinder));
    gc.groupUpdatesByEntity = true;
    const plot1 = chart.addPlot(gl_cartesian_plot_factory_1.GlCartesianPlotFactory.createOne(chart, (0, get_test_plot_options_1.getTestPlotOptions)(new gl_cartesian2d_update_arg_provider_1.GlCartesian2dUpdateArgProvider(), rc_js_util_1.Range2d.f32.factory.createOne(-1, 0, -1, 0), "plot lower left", cartesian2d_plot_range_1.Cartesian2dPlotRange.createOneF32(rc_js_util_1.Range2d.f32.factory.createOne(-4, 4, -4, 4), dataRange.slice(), 4, chart.attachPoint.canvasDims))));
    plot1.dataCategory.addEntity(new chart_data_entity_1.ChartDataEntity(someData, graphicsSettings, chart.changeIdFactory), gc, pointSubcategory);
    const plot2 = chart.addPlot(gl_cartesian_plot_factory_1.GlCartesianPlotFactory.createOne(chart, (0, get_test_plot_options_1.getTestPlotOptions)(new gl_cartesian2d_update_arg_provider_1.GlCartesian2dUpdateArgProvider(), rc_js_util_1.Range2d.f32.factory.createOne(-1, 1, -1, 1), "plot upper right", cartesian2d_plot_range_1.Cartesian2dPlotRange.createOneF32(rc_js_util_1.Range2d.f32.factory.createOne(-5, 5, -5, 5), dataRange.slice(), Infinity, chart.attachPoint.canvasDims))));
    const plot2InteractionHandler = new cartesian2d_plot_shared_quad_tree_1.Cartesian2dPlotSharedQuadTree(plot2, { yieldTime: 16 });
    plot2InteractionHandler.setQuadTreeInteractionHandler(emscriptenModule, chart, {
        onHover(newlyHovered, stillHovered, noLongerHovered) {
            // todo jack28: sanitize this shit
            for (let i = 0, iEnd = newlyHovered.length; i < iEnd; ++i) {
                const target = newlyHovered[i];
                target.entity.updateChangeId();
                for (const segmentId of target.segmentIds) {
                    graphicsSettings.pointDisplay.colorOverrides = [
                        [segmentId, new Float32Array(1)],
                        [segmentId + 1, new Float32Array(1)],
                    ];
                }
            }
            for (let i = 0, iEnd = stillHovered.length; i < iEnd; ++i) {
                const target = stillHovered[i];
                target.entity.updateChangeId();
                for (const segmentId of target.segmentIds) {
                    graphicsSettings.pointDisplay.colorOverrides = [
                        [segmentId, new Float32Array(1)],
                        [segmentId + 1, new Float32Array(1)],
                    ];
                }
            }
            for (let i = 0, iEnd = noLongerHovered.length; i < iEnd; ++i) {
                noLongerHovered[i].entity.updateChangeId();
                graphicsSettings.pointDisplay.colorOverrides = [];
            }
            chart.updateOnNextFrame(plot2);
        },
    });
    const entity = new chart_data_entity_1.ChartDataEntity(someData, graphicsSettings, chart.changeIdFactory);
    plot2.dataCategory.addEntity(entity, gc, pointSubcategory);
    plot2InteractionHandler.interactionGroups.clickable.addEntityToGroup(entity, interleavedPointTester);
    plot2InteractionHandler.interactionGroups.hoverable.addEntityToGroup(entity, interleavedPointTester);
    chart.updateImmediate();
    chart.updateInteractionHandlers();
    window.addEventListener("resize", rc_js_util_1._Fp.debounce(250, false, () => {
        chart.updateOnNextFrame();
    }));
}
exports.glTestChartGo = glTestChartGo;

})();

/******/ })()
;
//# sourceMappingURL=main.js.map