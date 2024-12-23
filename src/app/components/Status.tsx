const Status = ({ isConnected }: { isConnected: boolean }) => {
  return (
    <div className="p-4">
      <p>
        <span
          className={
            `inline-block w-3 h-3 rounded-full mr-2 animate-pulse ` +
            (isConnected ? "bg-green-600" : "bg-red-600")
          }
        />
        {isConnected
          ? "Connected to the Wallet"
          : "Not connected to the Wallet"}
      </p>
    </div>
  );
};

export default Status;
