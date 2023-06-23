'use client';

import { Badge } from "@mantine/core";

export function ModdedBadge() {
    return (
        <Badge variant="filled" color="accent" radius="xl" size="xs" sx={{
            verticalAlign: "text-top"
        }}>MODDED</Badge>
    )
}