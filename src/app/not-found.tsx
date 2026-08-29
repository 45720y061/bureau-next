import { NotFoundView } from "@/components/site/NotFoundView";
import { requestLocale } from "@/lib/request-locale";

export default function NotFound() {
  return <NotFoundView locale={requestLocale()} />;
}
