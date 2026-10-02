import template from "./template.html.twig";

const { Component } = Shopware;

Component.override("sw-admin-menu", {
  template,
  inject: ["acl"],
});
