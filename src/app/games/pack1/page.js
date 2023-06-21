'use client'

import { useRouter } from 'next/navigation';
import { Button, Center, Image, Card, Box, Text, Grid, SimpleGrid, BackgroundImage, Group, brightness, createStyles, useMantineColorScheme, Title, Badge, Divider, Notification, Stack } from '@mantine/core';

export default function PackOne() {
    const router = useRouter();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <BackgroundImage src="/pack1banner.png" alt="Pack One Banner" position="center" size="contain" h={"100%"}>
            <Center h={"100%"}>
                <Card h={"80%"} w={"80%"} bg={colorScheme == "dark" ? "#0a1420" : "#ffffff"} radius="xl">
                    <Stack>
                        <Center>
                            <Group>
                                <Title color="accent" order={1}>The Jackbox Party Pack 1</Title>
                                <Badge color="green" variant="dot" radius="xl" size="lg">Installed</Badge>
                            </Group>
                        </Center>
                        <Center>
                            <Group>
                                <Button color="green">Play</Button>
                                <Button color="accent">Open Mods Folder</Button>
                                <Button color="red">Restore</Button>
                            </Group>
                        </Center>
                        <Center>
                            <Grid w={"100%"}>
                                <Grid.Col span={6}>
                                    <Center>
                                        <Text>
                                            Games
                                        </Text>
                                    </Center>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Center>
                                        <Text>
                                            Mods
                                        </Text>
                                    </Center>
                                </Grid.Col>
                            </Grid>
                        </Center>
                    </Stack>
                </Card>
            </Center>
        </BackgroundImage>
        // <Grid justify='center'>
        //     <Grid.Col span={4} maw={500} miw={368}>
        //         <Image src="/pack1banner.png" alt="Pack One Banner"/>
        //     </Grid.Col>
        //     <Grid.Col span="auto">
        //         <Text>Pack 1</Text>
        //     </Grid.Col>
        // </Grid>
    )
}