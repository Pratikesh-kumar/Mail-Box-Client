import AuthForm from "./Components/AuthForm/AuthForm";
import TextEditing from "./Components/TextEditing/TextEditing";
import InboxPage from "./Components/InboxPage.js/InboxPage";
import { Route, Routes, Navigate } from "react-router-dom";
import SentMessage from "./Components/SendMessage/SendMessage";
import { useEffect } from "react";
import InboxList from "./Components/InboxPage.js/InboxList";
import { useSelector, useDispatch } from "react-redux";
import { UpdateMySentItem } from "./Store/Mail-thunk";
import { useNavigate } from "react-router-dom";

function App() {
  let loginlocalstore = localStorage.getItem("islogin") === "true";
  // console.log(loginlocalstore);
  const navi = useNavigate();
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (loginlocalstore || islogin) {
      navi("/main/text-edit");
      console.log(" navi");
    }
    if (!loginlocalstore) {
      navi("/login");
    }
  }, [loginlocalstore]);

  const sentItem = useSelector((state) => state.mymail.sentItem);
  const sendcount = useSelector((state) => state.mymail.sendcount);
  useEffect(() => {
    Dispatch(UpdateMySentItem(sentItem));
  }, [sendcount]);
  // console.log("app", sentItem);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthForm />}></Route>
        {loginlocalstore && (
          <Route path="/main/*" element={<InboxPage />}>
            <Route path="inboxlist" element={<InboxList />} />
            <Route path="text-edit" element={<TextEditing />} />
            <Route path="sentmessage" element={<SentMessage />} />
          </Route>
        )}
        {!loginlocalstore && (
          <Route element={<Navigate replace to="login" />} />
        )}

        {/* <TextEditing></TextEditing> */}
      </Routes>
    </div>
  );
}

export default App;