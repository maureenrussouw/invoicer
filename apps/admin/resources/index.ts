import { usersResource } from "./users/users";
import { blogsResource } from "./blogs/blogs";
import { customerResource } from "./customers/customers";
import { invoiceItemResource } from "./invoice-items/invoice-items";
import { invoiceResource } from "./invoices/invoices";
// grit:resources

import type { ResourceDefinition } from "@/lib/resource";

export const resources: ResourceDefinition[] = [
  usersResource,
  blogsResource,
  customerResource,
  invoiceItemResource,
  invoiceResource,
  // grit:resource-list
];

export function getResource(slug: string): ResourceDefinition | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceByEndpoint(endpoint: string): ResourceDefinition | undefined {
  return resources.find((r) => r.endpoint === endpoint);
}
