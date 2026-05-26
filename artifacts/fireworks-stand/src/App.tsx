import StarField from "@/components/StarField";
import FireworksCanvas from "@/components/FireworksCanvas";
import Home from "@/pages/Home";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarField />
      <FireworksCanvas />
      <div style={{ position: "relative", zIndex: 5 }}>
        <Home />
      </div>
    </div>
  );
}
