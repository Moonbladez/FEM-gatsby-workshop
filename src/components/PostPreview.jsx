import React from 'react';
import { css } from '@emotion/core';
import ReadLink from '../components/ReadLink';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      padding-bottom: 1rem;
      display: flex;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 200px;
      `}
    >
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      ></Image>
    </Link>

    <div>
      <Link to={post.slug}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Read this post</ReadLink>
    </div>
  </article>
);

export default PostPreview;
