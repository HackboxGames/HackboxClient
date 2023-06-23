'use client'

import { useRouter } from 'next/navigation';
import { Button, Center } from '@mantine/core';

export default function NewMod() {
    const router = useRouter();
    return (
        <Center>
            <Button color="accent" onClick={() => router.push('/')}>new mod</Button>
        </Center>
    )
}