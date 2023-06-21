'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';

export default function PackFour() {
    const router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push('/')}>pack four</Button>
        </Center>
    )
}