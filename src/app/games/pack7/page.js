'use client'

import { Button, Center, Card, Text, BackgroundImage, Group, useMantineColorScheme, Title, Badge, Stack } from '@mantine/core';
import { ModdedBadge } from '@/components/games/ModdedBadge';

export default function PackSeven() {
    const { colorScheme } = useMantineColorScheme();
    return (
        <BackgroundImage src="/pack7banner.jpg" alt="Pack Seven Banner" position="center" size="contain" h={"100%"}>
            <Center h={"100%"}>
                <Card h={"80%"} w={"80%"} bg={colorScheme == "dark" ? "#0a1420" : "#ffffff"} radius="xl">
                    <Stack h={"100%"}>
                        <Center>
                            <Group position="center">
                                <Title color="accent" order={1} align="center">The Jackbox Party Pack 7</Title>
                                <Badge color="green" variant="dot" radius="xl" size="lg">Installed</Badge>
                            </Group>
                        </Center>
                        <Center>
                            <Group position="center">
                                <Button color="green">Play</Button>
                                <Button color="accent">Open Mods Folder</Button>
                                <Button color="red">Restore</Button>
                            </Group>
                        </Center>
                        <Center h={"100%"}>
                            <Center>
                                <Stack>
                                    <Text>
                                        Quiplash 3
                                    </Text>
                                    <Text>
                                        The Devils and the Details
                                    </Text>
                                    <Text>
                                        Champ'd Up
                                    </Text>
                                    <Text>
                                        Talking Points <ModdedBadge />
                                    </Text>
                                    <Text>
                                        Blather 'Round
                                    </Text>
                                </Stack>
                            </Center>
                        </Center>
                    </Stack>
                </Card>
            </Center>
        </BackgroundImage>
    )
}