import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { Link } from '../../../../atoms/Link/Link';

type Props = React.ComponentPropsWithoutRef<'section'>;

const Links = (props: Props) => {
  const { current: items } = useRef<
    {
      href: string;
      icon: IconDefinition;
      label: string;
      newTab: boolean;
    }[]
  >([
    {
      href: 'https://github.com/succie',
      icon: faGithub,
      label: 'GitHub',
      newTab: true,
    },
    {
      href: 'https://twitter.com/succie319',
      icon: faTwitter,
      label: 'Twitter',
      newTab: true,
    },
  ]);

  return (
    <section {...props}>
      <ul className="list">
        {items.map((item) => (
          <li className="item" key={item.href}>
            <Link className="itemLink" href={item.href} newTab={item.newTab}>
              <FontAwesomeIcon icon={item.icon} size="2x" className="itemIcon" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const StyledLinks = styled(Links)`
  & {
    margin: 16px 0;
  }

  .list {
    padding: 0;
    list-style: none;
  }

  .item + .item {
    margin-top: 16px;
  }

  .itemLink {
    display: inline-flex;
    align-items: center;
  }

  .itemLink:hover {
    color: #c2e0f2;
  }

  .itemIcon {
    margin-right: 6px;
  }
`;

export default StyledLinks;
