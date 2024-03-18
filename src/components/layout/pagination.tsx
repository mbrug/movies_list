import {useAppDispatch} from "../../store/actionTypes.ts";
import {useSelector} from "react-redux";
import {selectSearchParams} from "../../store/actions/movieActions.ts";
import {useMemo} from "react";
import {setSearchPage} from "../../store/reducers/moviesReducer.ts";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const { totalResults, page } = useSelector(selectSearchParams);
    const maxPagesToShow = 10;

    const totalPages = useMemo(() => {
        return Math.ceil(totalResults / 10);
    }, [totalResults]);


    const calculatePagesRange = () => {
        let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        const rangeLength = endPage - startPage + 1;
        if (rangeLength < maxPagesToShow) {
            if (page <= Math.ceil(maxPagesToShow / 2)) {
                endPage = Math.min(totalPages, maxPagesToShow);
            } else {
                startPage = Math.max(1, totalPages - maxPagesToShow + 1);
            }
        }

        return { startPage, endPage };
    };

    const { startPage, endPage } = useMemo(calculatePagesRange, [page, totalPages]);

    const goToPage = (pageNumber: number) => {
        dispatch(setSearchPage(pageNumber));
    };

    return (
        <div className="w-full flex justify-center py-4">
            {page > 1 && (
                <button
                    key="prev"
                    className="p-2 border border-gray-300 rounded-md mx-2"
                    onClick={() => goToPage(page - 1)}
                >
                    prev
                </button>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage).map(
                (pageItem) => (
                    <button
                        key={pageItem}
                        className={`p-2 border border-gray-300 rounded-md mx-2 ${
                            pageItem === page && "bg-blue-500"
                        }`}
                        onClick={() => goToPage(pageItem)}
                    >
                        {pageItem}
                    </button>
                )
            )}
            {page < totalPages && (
                <button
                    key="next"
                    className="p-2 border border-gray-300 rounded-md mx-2"
                    onClick={() => goToPage(page + 1)}
                >
                    next
                </button>
            )}
        </div>
    );
};
export default Pagination;