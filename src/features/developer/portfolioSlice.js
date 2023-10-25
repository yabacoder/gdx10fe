
import { apiSlice } from '../../app/api/apiSlice';

export const portfolioApiSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadPortfolio: builder.query({
            query: () => ({
                url: '/developer/portfolio',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Portfolio', }
        }),
        getPortfolio: builder.query({
            query: (id) => ({
                url: `/developer/portfolio/${id}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Portfolio', id: arg.id }
            ]
        }),
        updatePortfolio: builder.mutation({
            query: portfolio => ({
                url: '/developer/portfolio/update',
                method: 'POST',
                body: {
                    ...portfolio
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Portfolio', id: arg.id }
            ]
        }),
        deletePortfolio: builder.mutation({
            query: portfolio => ({
                url: '/developer/portfolio/delete',
                method: 'POST',
                body: {
                    ...portfolio
                }
            }),
            // invalidatesTags: (result, error, arg) => [
            //     { type: 'Portfolio', id: arg.id }
            // ]
        }),
 
    })
});

export const {
    useGetPortfolioQuery, 
    useGetPortfolioEditQuery, 
    useAddPortfolioMutation,
    useUpdatePortfolioMutation,
    useGetDevSkillQuery,
    useUpdateSkillMutation,
    useGetDevAvailabilityQuery,
    useUpdateDevAvailabilityMutation
} = portfolioApiSplice;
