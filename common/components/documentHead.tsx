

import Head from "next/head";
import React, { memo } from 'react';

interface Props {
    title: string;
    description: string;
    keywords: string;
}
const DocumentHead: React.FC<Props> = ({
    title,
    description,
    keywords
} ) => {

    return (
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content={description}
                />
                <meta
                    name="keywords"
                    content={keywords}
                />
            </Head>
      
    );
}
export default memo(DocumentHead);