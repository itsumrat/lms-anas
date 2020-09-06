import ChatService from "modules/chat/chatService";
import paginationAction from "modules/shared/pagination/paginationAction";
import selectors from "modules/chat/list/chatListSelectors";
import { i18n } from "i18n";
import exporterFields from "modules/chat/list/chatListExporterFields";

const prefix = "MATTER_LIST";

export default paginationAction(
  prefix,
  ChatService.list,
  selectors,
  i18n("entities.Chat.exporterFileName"),
  exporterFields
);
