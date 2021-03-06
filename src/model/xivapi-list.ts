import { Pagination } from './pagination';

/**
 * Model for data list when you call and endpoint without an id.
 */
export interface XivapiList<T> {
    /**
     * List of the results you're getting.
     */
    results: T[];

    /**
     * Pagination informations.
     */
    pagination: Pagination;
}
