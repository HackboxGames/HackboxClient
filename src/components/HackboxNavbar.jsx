'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Center, Navbar, Image, ScrollArea, NavLink, Text, Stack, Button, Group, Indicator } from "@mantine/core";

const modsData = [
    {
        name: "Create New",
        link: "/mods/new",
    },
]

const gamesData = [
    {
        name: "Jackbox Party Pack 1",
        link: "/games/pack1",
    },
    {
        name: "Jackbox Party Pack 2",
        link: "/games/pack2",
    },
    {
        name: "Jackbox Party Pack 3",
        link: "/games/pack3",
    },
    {
        name: "Jackbox Party Pack 4",
        link: "/games/pack4",
    },
    {
        name: "Jackbox Party Pack 5",
        link: "/games/pack5",
    },
    {
        name: "Jackbox Party Pack 6",
        link: "/games/pack6",
    },
    {
        name: "Jackbox Party Pack 7",
        link: "/games/pack7",
    },
    {
        name: "Jackbox Party Pack 8",
        link: "/games/pack8",
    },
    {
        name: "Jackbox Party Pack 9",
        link: "/games/pack9",
    }
]

export function HackboxNavbar() {
    const router = useRouter();
    const [modTabActive, setModTabActive] = useState(-1);
    const [gameTabActive, setGameTabActive] = useState(-1);

    const mods = modsData.map((mod, index) => {
        return (
            <Indicator key={mod.name} color="green" position="middle-start" offset={-10}>
                <NavLink active={index == modTabActive} label={mod.name} py="xs" color="accent" variant="filled" onClick={() => {
                    setGameTabActive(-1);
                    setModTabActive(index);
                    router.push(mod.link);
                }} />
            </Indicator>
        )
    });

    const games = gamesData.map((game, index) => {
        return (
            <Indicator key={game.name} color="green" position="middle-start" offset={-10}>
                <NavLink active={index == gameTabActive} label={game.name} py="xs" color="accent" variant="filled" onClick={() => {
                    setModTabActive(-1);
                    setGameTabActive(index);
                    router.push(game.link);
                }} />
            </Indicator>
        )
    });

    return (
        <Navbar
            width={{ base: 200 }}
        >
            <Navbar.Section>
                <Center h={60} p="xs">
                    <Image src="/hackbox.png" sx={(theme) => ({
                        cursor: "pointer"
                    })} onClick={() => {
                        setModTabActive(-1);
                        setGameTabActive(-1);
                        router.push("/")
                    }} />
                </Center>
            </Navbar.Section>
            <Navbar.Section grow component={ScrollArea} offsetScrollbars>
                <NavLink label={<Text color={modTabActive == -1 ? null : "accent"}>Hackbox Mods</Text>} variant="subtle">
                    {mods}
                </NavLink>
                <NavLink label={<Text color={gameTabActive == -1 ? null : "accent"}>Jackbox Games</Text>} variant="subtle">
                    {games}
                </NavLink>
            </Navbar.Section>
            <Navbar.Section>
                <Stack align="center" spacing="xs" my="md">
                    <Text>Status: <Text color="yellow" inherit span>Connecting...</Text></Text>
                    <Button color="accent" onClick={() => {
                        setModTabActive(-1);
                        setGameTabActive(-1);
                        router.push("/settings");
                    }}>Settings</Button>
                </Stack>
            </Navbar.Section>
        </Navbar>
    )
}