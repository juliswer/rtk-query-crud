import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = apiSlice;
