import { confirmAlert } from "react-confirm-alert";
import { toastifuyErr, toastifuySuccess } from "../toastifuy/toastifuy";

export const customConfirmAlert = (itemId, deletItemServices) => {
  const handelDeleteNews = async (itemId, deletItemServices) => {
    try {
      const { status } = await deletItemServices(itemId);
      if (status == 200) {
        toastifuySuccess("آیتم مورد نظر با موفقیت حذف شده");
        return status;
      }
    } catch (error) {
      toastifuyErr("مشکلی رخ داده است");
    }
  };

  console.log(handelDeleteNews);
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div
          className="p-10 py-7 rounded-lg  border-orange-400
          bg-Main-Blue dark:bg-Dark-MainBg  shadow-lg  border-dotted
          absolute top-[300px]  left-[2%] sm:left-[30%] md:left-[10%]  lg:static"
        >
          <h1 className=" text-2xl text-orange-400">پاک کردن مخاطب</h1>
          <p className=" text-xl my-7 mb-10 text-gray-300">
            مطمئنی که میخوای آیتم مورد نظر رو پاک کنی ؟
          </p>
          <button
            onClick={() => {
              handelDeleteNews(itemId, deletItemServices);
              onClose();
            }}
            className=" shadow rounded p-2 ml-4 text-gray-200 bg-Dark-Teal dark:bg-Main-Blue mx-2"
          >
            مطمئن هستم
          </button>
          <button
            onClick={onClose}
            className=" shadow rounded p-2 text-gray-200  bg-rose-700"
          >
            انصراف
          </button>
        </div>
      );
    },
  });
};
