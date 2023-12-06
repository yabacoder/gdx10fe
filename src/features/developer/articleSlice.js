
import { apiSlice } from '../../app/api/apiSlice';

export const articleSplice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        loadArticles: builder.query({
            query: () => ({
                url: '/articles',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Article', }
        }),
        loadRecentArticles: builder.query({
            query: () => ({
                url: '/articles/recent',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Article', }
        }),
        loadRelatedArticles: builder.query({
            query: () => ({
                url: '/articles/recent',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                }
            }),
            providesTags: { type: 'Article', }
        }),
        addArticle: builder.mutation({
            query: id => ({
                url: `/developer/articles/${id}/apply`,
                method: 'POST',
                body: { 
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Article' }
            ]
        }),
        deleteArticle: builder.mutation({
            query: id => ({
                url: `/developer/article/delete/${id}`,
                method: 'POST',
                body: {
                    ...id
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Article' }
            ]
        }),
 
    })
});

export const {
   useLoadArticlesQuery,
   useArticleMutation,
   useLoadRecentArticlesQuery,
   useLoadRelatedArticlesQuery 
} = articleSplice;
