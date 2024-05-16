import ArrowLeft from "/assets/icon-arrow-left.svg";

const Edit = () => {
  return (
    <>
      <div className=" absolute w-screen px-6 pt-8 pb-16 top-[72px]">
        <div className="flex gap-6 items-center">
          <img src={ArrowLeft} />
          <p className="inputText">Go back</p>
        </div>
        <h1 className="text-[24px] font-bold tracking-[-0.5px] mt-6">
          New Invoice
        </h1>
        <form className="mt-[22px]">
          <div>
            <p className="inputText text-blue ">Bill From</p>
            <label className="labelStyle mt-6 ">Street Adress</label>
            <input className="inputStyle inputText" />
            <div>
              <div className="mt-6 flex gap-6 flex-1">
                <div className=" w-full">
                  <label className="labelStyle ">City</label>
                  <input className="inputStyle inputText" />
                </div>
                <div className="w-full">
                  <label className="labelStyle ">Post Code</label>
                  <input className="inputStyle inputText" />
                </div>
              </div>
              <label className="labelStyle mt-6 ">Country</label>
              <input className="inputStyle inputText" />
            </div>
          </div>
          <div className="mt-[41px]">
            <p className="inputText text-blue ">Bill To</p>
            <label className="labelStyle mt-6 ">Client’s Name</label>
            <input className="inputStyle inputText" />
            <label className="labelStyle mt-6 ">Client’s Email</label>
            <input className="inputStyle inputText" />
            <label className="labelStyle mt-6 ">Street Address</label>
            <input className="inputStyle inputText" />
            <div>
              <div className="mt-6 flex gap-6 flex-1">
                <div className=" w-full">
                  <label className="labelStyle ">City</label>
                  <input className="inputStyle inputText" />
                </div>
                <div className="w-full">
                  <label className="labelStyle ">Post Code</label>
                  <input className="inputStyle inputText" />
                </div>
              </div>
              <label className="labelStyle mt-6 ">Country</label>
              <input className="inputStyle inputText" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
