import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Define Product type (adjust based on your backend)
type Product = {
  _id: string;
  // id?: string;
  name: string;
  price: number;
  images?: string[];
};

// ✅ Define state type
type ProductState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};

// ✅ Async thunk using fetch
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch products");
        console.log('It did not fetch')
      }

      const data = await res.json();
      console.log('It fetched successfully', data);
      return data.data;
    } catch (error: unknown) {
  if (error instanceof Error) {
    return rejectWithValue(error.message);
  }
  return rejectWithValue("Something went wrong");
}
  }
);

// ✅ Initial state
const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;