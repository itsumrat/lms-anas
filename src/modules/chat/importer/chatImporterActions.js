import importerActions from "modules/shared/importer/importerActions";
import selectors from "modules/chat/importer/chatImporterSelectors";
import ChatService from "modules/chat/chatService";
import fields from "modules/chat/importer/chatImporterFields";
import { i18n } from "i18n";

export default importerActions(
  "Chat_IMPORTER",
  selectors,
  ChatService.import,
  fields,
  i18n("entities.Chat.importer.fileName")
);
