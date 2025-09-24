import { Lead, LeadTag, Tag } from './types';

export const enrichLeadsWithTags = (
  leads: Lead[],
  leadTags: LeadTag[],
  tags: Tag[]
) => {
  const tagMap: Record<string, Tag> = {};
  tags.forEach((tag) => {
    tagMap[tag.$id] = tag;
  });

  const enrichedLeads = leads.map((lead) => {
    const leadTagEntries = leadTags.filter(
      (leadTag) => leadTag.lead_id === lead.$id
    );

    const tags = leadTagEntries
      .map((leadTag) => tagMap[leadTag.tag_id])
      .filter((tag): tag is Tag => tag !== undefined);

    return {
      ...lead,
      tags,
    };
  });

  return enrichedLeads;
};