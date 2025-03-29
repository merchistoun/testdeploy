import i18next from "i18next";
import { useCallback } from "react";
import { GROUP, NAMESPACE } from "../localization/model";

export { GROUP, NAMESPACE };

export type Options = {
  group?: GROUP;
  namespace?: NAMESPACE;
  placeholders?: Record<string, string | number>;
};

export interface UseTranslate {
  translate: (key: string, options?: Options) => string;
}

const getId = (key: string, group?: GROUP, namespace?: NAMESPACE): string =>
  `${namespace}:${group}.${key}`;

export const useTranslate = (
  namespace: NAMESPACE = NAMESPACE.default,
  group: GROUP = GROUP.default
): UseTranslate => {
  const defaultNamespace = namespace;
  const defaultGroup = group;

  const translateId = useCallback(
    (key: string, group?: GROUP, namespace?: NAMESPACE): string =>
      getId(key, group || defaultGroup, namespace || defaultNamespace),
    [defaultGroup, defaultNamespace]
  );

  /**
   * Provides a translation for a given key
   *
   * @param key - The key in the translation json file
   * @param options - Options for the translation:
   * @param options.placeholders - Object of key/value pairs { key1: "value1", key2: "value2" } to be replaced in the translation. The placeholder should be identified with double curly-braces: Replace {{key1}} and {{key2}} in the json file.
   * @param options.group - The group in the translation json file (default: GROUP.default)
   * @param options.namespace - The namespace in the translation json file (default: NAMESPACE.default)
   */
  const translate = useCallback(
    (key: string, options?: Options): string =>
      i18next.t(
        translateId(key, options?.group, options?.namespace),
        options?.placeholders
      ),
    [translateId]
  );

  return {
    translate,
  };
};
