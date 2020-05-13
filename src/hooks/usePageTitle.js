import { useEffect } from "react";

function usePageTitle(title, nameModifier) {
  useEffect(() => {
    document.title = nameModifier ? title + nameModifier : title;
  });
}

export default usePageTitle;
