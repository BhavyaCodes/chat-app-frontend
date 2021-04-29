import "../styles/globals.css";
import { v4 } from "uuid";
import { useState } from "react";
import { SocketProvider } from "../context/SocketProvider";

function MyApp({ Component, pageProps }) {
  const [id, setId] = useState(v4());
  return (
    <SocketProvider id={id}>
      <Component {...pageProps} />
    </SocketProvider>
  );
}
{
  /* <Editor
  apiKey="69ghvwqw564y6c5ccbxq3w4jdqxp6smlup8xse4dmvn3kvev"
  value={this.usestate.Content}
  init={{
    height: 500,
    menubar: false
  }}
  onEditorChange={this.handleChange}
/> */
}
export default MyApp;
