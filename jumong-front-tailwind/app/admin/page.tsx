import Link from "next/link";
import AdminProductTable from "./product table/AdminProductTable";
// import AdminProductTable from "@/components/admin/AdminProductTable";

const AdminPage = () => {
  
  return (
    <section className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8 mt-[6em]">
          <div>
            <h1 className="text-3xl font-bold">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your ecommerce products
            </p>
          </div>

          <Link
            href="/admin/add-product"
            className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-3 rounded-xl font-semibold"
          >
            + Add Product
          </Link>
        </div>

        {/* REAL PRODUCT DASHBOARD */}
        <div className="bg-white rounded-2xl border shadow-sm">
          <AdminProductTable />
        </div>
      </div>
    </section>
  );
};

export default AdminPage;