import {NextUIProvider} from "@nextui-org/react";
import AdminTable from "@/components/admin/AdminTable";

export default function Admin() {
  return (
    <NextUIProvider>
        <AdminTable/>
    </NextUIProvider>
  )
}
