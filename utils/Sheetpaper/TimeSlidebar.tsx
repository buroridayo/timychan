const TimeSlidebar = ({
  addList,
  handleDelete,
}: {
  addList: string[];
  handleDelete: (index: number) => void;
}) => {
  return (
    <div className="p-4 space-y-2">
      {addList.length === 0 ? (
        <p className="text-gray-400">No records yet.</p>
      ) : (
        addList.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{item}</span>

            <button
              onClick={() => handleDelete(index)}
              className="text-blue-400 font-bold"
            >
              &minus;
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TimeSlidebar;
