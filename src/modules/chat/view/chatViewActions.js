import viewActions from "modules/shared/view/viewActions";
import ChatService from "modules/chat/chatService";

const prefix = "MATTER_VIEW";

export default viewActions({
  prefix,
  findFn: ChatService.find,
  redirectToOnError: "/Chat",
});
