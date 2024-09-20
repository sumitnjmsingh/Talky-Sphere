const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-4xl font-semibold text-gray-900">
          Select a chat or start a new conversation
          <div className="mt-12 w-full max-w-5xl flex justify-center">
        {/* Placeholder for Illustration/Image */}
        <img
          src="/images/conversation.svg"
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>
        </h3>
      </div>
    </div>
  );
};
export default EmptyState;
