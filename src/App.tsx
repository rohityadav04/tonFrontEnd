import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";
import WebApp from "@twa-dev/sdk";

function App() {
  const { contract_address, counter_value, sendIncrement } = useMainContract();
  const { connected } = useTonConnect();

  const showAlert = () => {
    WebApp.showAlert("Hey there!");
  };
  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className="Card">
          <b>{WebApp.platform}</b>
          <b>Our contract Address</b>
          <div className="Hint">{contract_address?.slice(0, 30) + "..."}</div>
        </div>

        <div className="Card">
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>

        {connected && (
          <a
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </a>
        )}
        <a
          onClick={() => {
            showAlert();
          }}
        >
          Show Alert
        </a>
      </div>
    </div>
  );
}

export default App;
