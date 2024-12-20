const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border black p-2 m-2 rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className="border black p-2 m-2 rounded-lg"
          placeholder="message"
        />
        <button className="border black p-2 m-2 rounded-lg bg-gray-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
