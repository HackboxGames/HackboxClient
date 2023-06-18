'use client'

import { useRouter } from 'next/navigation';
import { Button, Center, Text } from '@mantine/core';

export default function Games() {
    const router = useRouter();
    return (
        <>
            <Center>
                <Button onClick={() => router.push('/')}>bingus!</Button>
            </Center>
        </>
    )
}