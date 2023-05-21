const Newsletter = () => {
  return (
    <div className=" bg-gradient-to-r from-teal-400 to-gray-500 text-center py-8 space-y-4 rounded-xl ">
      <h1 className=" text-3xl font-semibold text-gray-100 p-4 rounded-lg">
        Subscribe To Newsletter
      </h1>
      <p className="text-gray-300">Sign up for newsletter</p>
      <div><input className="p-3 rounded-lg" type="email" placeholder="Your email address" /> <button className="btn">Submit</button></div>
    </div>
  );
};

export default Newsletter;
