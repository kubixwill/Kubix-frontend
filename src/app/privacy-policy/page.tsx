"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiArrowUpRight, FiArrowUp, FiMenu, FiX } from "react-icons/fi";

const Page = styled.section`
  --bg: #ffffff;
  --text: #121212;
  --muted: #4b4b4b;
  --accent: #ffb600;
  --card: #f7f7f7;

  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  line-height: 1.7;
  padding: 80px;

  @media (max-width: 1200px) { padding: 80px 40px; }
  @media (max-width: 768px) { padding: 80px 20px; }
  @media (max-width: 480px) { padding: 80px 12px; }
`;

const Header = styled.header`
  max-width: 1100px;
  margin: 0 auto 28px auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;

  @media (max-width: 768px) { font-size: 32px; }
  @media (max-width: 480px) { font-size: 26px; }
`;

const Underline = styled.span`
  display: block;
  width: 96px;
  height: 6px;
  background: var(--accent);
  margin: 0 auto 24px auto;
  border-radius: 999px;
`;

const Meta = styled.p`
  color: var(--muted);
  font-weight: 600;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;


const TocCard = styled.nav`
  position: sticky;
  top: 24px;
  align-self: start;
  background: var(--card);
  border: 1px solid #e9e9e9;
  border-radius: 20px;
  padding: 18px;
  max-height: fit-content; /* Ensures height matches content */
  
  @media (max-width: 1024px) {
    position: relative; /* Remove sticky on small screens */
    top: auto;
    margin-bottom: 24px;
  }
`;

const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li a {
    display: flex; /* Use flex instead of grid */
    align-items: center; /* Align icon and text vertically */
    gap: 8px; /* Space between icon and text */
    padding: 8px 10px;
    border-radius: 10px;
    color: var(--text);
    text-decoration: none;
    transition: background 0.2s ease;
    font-weight: 600; /* Make text consistent */
    font-size: 0.95rem;
  }

  li a:hover {
    background: #ededed;
  }
`;

const TocTitle = styled.p`
  font-weight: 800;
  margin: 6px 0 12px 0;
`;


const TocToggle = styled.button`
  display: none;
  background: var(--card);
  border: 1px solid #e9e9e9;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const Content = styled.article`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.04);

  @media (max-width: 768px) { padding: 18px; }
`;

const Section = styled.section`
  scroll-margin-top: 90px;
  &:not(:first-child) { margin-top: 28px; }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin: 8px 0 14px 0;

  @media (max-width: 768px) { font-size: 22px; }
  @media (max-width: 480px) { font-size: 20px; }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0 0 14px 0;
`;

const List = styled.ul`
  padding-left: 20px;
  margin: 0 0 14px 0;
  li { margin: 6px 0; }
`;

const InlineLink = styled.a`
  color: var(--text);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid rgba(255, 182, 0, .55);
  &:hover { border-color: rgba(255, 182, 0, 1); }
`;

const FooterActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #047a1c;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 12px 18px;
  border-radius: 12px;
  text-decoration: none;
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #101010;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 12px 18px;
  border-radius: 12px;
`;

const BackToTop = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e6e6e6;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px rgba(0,0,0,.08);
  z-index: 999;
`;


const TermsAndConditions: React.FC = () => {
  const [tocOpen, setTocOpen] = useState(false);
  const items = [
    { id: "intro", label: "1. Introduction" },
    { id: "scope", label: "2. Scope of This Privacy Policy" },
    { id: "info", label: "3. Information We Collect" },
    { id: "collection", label: "4. How We Collect Your Data" },
    { id: "purpose", label: "5. Purpose of Collecting Your Data" },
    { id: "legalbasis", label: "6. Legal Basis for Processing Your Data (GDPR Compliance)" },
    { id: "sharing", label: "7. How We Share Your Data" },
    { id: "international", label: "8. International Data Transfers" },
    { id: "rights", label: "9. Your Rights Over Your Data" },
    { id: "security", label: "10. Data Security" },
    { id: "retention", label: "11. Data Retention" },
    { id: "cookies", label: "12. Cookies & Tracking Technologies" },
    { id: "thirdparty", label: "13. Third-Party Links" },
    { id: "children", label: "14. Children’s Privacy" },
    { id: "changes", label: "15. Changes to This Privacy Policy" },
    { id: "contact", label: "16. Contact Us" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
     <Page>
      <Header>
        <Title>Privacy Policy</Title>
        <Underline />
        <Meta><strong>Last Updated:</strong> 06th March 2025</Meta>
      </Header>

      <Layout>
                <div>
                 {/* <TocToggle onClick={() => setTocOpen(!tocOpen)}>
                   {tocOpen ? <FiX /> : <FiMenu />} {tocOpen ? "Close" : "Menu"}
                 </TocToggle> */}
                 <TocCard>
                   <TocTitle>Quick navigation</TocTitle>
                   <TocList>
                     {items.map((it) => (
                       <li key={it.id}>
                         <a href={`#${it.id}`}> <FiChevronRight /> {it.label}</a>
                       </li>
                     ))}
                   </TocList>
                 </TocCard>
               </div>

        <Content>
          <Section id="intro">
            <SectionTitle>1. Introduction</SectionTitle>
            <Paragraph>
              Welcome to Kubix, The Indian Education Review ("Kubix", "we", "us", or "our"). Kubix respects your privacy and is committed to protecting it through this Privacy Policy. This policy outlines how we collect, use, disclose, store, and protect your personal data when you visit our website <InlineLink href="https://www.kubix.com" target="_blank" rel="noreferrer noopener">www.kubix.com</InlineLink> (the "Platform"). It also informs you about your rights regarding your data. By using our Platform, you consent to the data practices described in this Privacy Policy.
            </Paragraph>
          </Section>

          <Section id="scope">
            <SectionTitle>2. Scope of This Privacy Policy</SectionTitle>
            <List>
              <li>Visitors and users of our website, applications, and services.</li>
              <li>Individuals who interact with us via email, social media, and customer support.</li>
              <li>Business partners, vendors, and service providers.</li>
            </List>
          </Section>

          <Section id="info">
            <SectionTitle>3. Information We Collect</SectionTitle>
            <Paragraph><strong>A. Personal Data (Personally Identifiable Information - PII)</strong></Paragraph>
            <List>
              <li>Identity Information: Full name, date of birth, gender, profile photo.</li>
              <li>Contact Information: Email address, phone number, mailing address.</li>
              <li>Payment &amp; Financial Information: Billing details, UPI ID, transaction data (processed via third-party payment gateways).</li>
              <li>Education &amp; Employment Data: Academic records, qualifications, job history (if applying for a position).</li>
              <li>User-Generated Content: Reviews, comments, surveys, testimonials.</li>
              <li>Social Media Data: If you interact with us via social media, we may collect your public profile data.</li>
            </List>
            <Paragraph><strong>B. Non-Personal Data (Collected Automatically)</strong></Paragraph>
            <List>
              <li>Device Data: IP address, browser type, operating system.</li>
              <li>Usage Data: Pages visited, session time, referral sources, clicks.</li>
              <li>Cookies &amp; Tracking Data: See Section 12 for details on cookies.</li>
            </List>
            <Paragraph>We do not collect sensitive data such as religious beliefs, sexual orientation, political affiliations, or biometric data.</Paragraph>
          </Section>

          <Section id="collection">
            <SectionTitle>4. How We Collect Your Data</SectionTitle>
            <List>
              <li>Direct interactions (e.g., when you sign up, contact us, or fill out a form).</li>
              <li>Automated tracking (e.g., cookies, analytics tools like Google Analytics).</li>
              <li>Third-party integrations (e.g., when you connect via Google, Facebook, LinkedIn).</li>
              <li>Publicly available sources (e.g., LinkedIn profiles).</li>
            </List>
            <Paragraph>
              By submitting your contact details via forms on our website, you explicitly consent to receiving communications from Kubix and its representatives via Email, SMS, WhatsApp, or Calls, even if your phone number is registered under DND/NDNC regulations.
            </Paragraph>
          </Section>

          <Section id="purpose">
            <SectionTitle>5. Purpose of Collecting Your Data</SectionTitle>
            <List>
              <li>To provide and improve our services (e.g., personalize user experience, improve website functionality).</li>
              <li>To communicate with you (e.g., respond to inquiries, send newsletters, updates, and promotions).</li>
              <li>To process payments and transactions securely.</li>
              <li>For security &amp; fraud prevention (e.g., detect and prevent malicious activities).</li>
              <li>For analytics and research (e.g., track user engagement, measure ad effectiveness).</li>
              <li>To comply with legal obligations (e.g., tax and accounting laws).</li>
            </List>
            <Paragraph>We will never sell your personal data to third parties.</Paragraph>
          </Section>

          <Section id="legalbasis">
            <SectionTitle>6. Legal Basis for Processing Your Data (GDPR Compliance)</SectionTitle>
            <List>
              <li>Your consent (e.g., when you sign up for newsletters).</li>
              <li>Legitimate interests (e.g., improving security, fraud prevention).</li>
              <li>Contractual obligations (e.g., to process payments for services).</li>
              <li>Legal compliance (e.g., to comply with law enforcement or taxation requirements).</li>
            </List>
            <Paragraph>If you are based in the EU, you have the right to withdraw consent at any time (See Section 9).</Paragraph>
          </Section>

          <Section id="sharing">
            <SectionTitle>7. How We Share Your Data</SectionTitle>
            <List>
              <li>Service providers (e.g., payment processors, hosting providers, email services).</li>
              <li>Marketing partners (if you have given explicit consent).</li>
              <li>Legal authorities (when required by law or to prevent fraud).</li>
            </List>
            <Paragraph>
              Communication Consent: By providing your contact details, you consent to receiving communications from Kubix via Call, SMS, WhatsApp, and Email, even if your number is registered under DND/NDNC. This is necessary for important service updates and relevant information. You may opt-out by contacting us at <InlineLink href="mailto:info@kubix.com">info@kubix.com</InlineLink>.
            </Paragraph>
          </Section>

          <Section id="international">
            <SectionTitle>8. International Data Transfers</SectionTitle>
            <Paragraph>
              If you access our Platform from outside India, please note that your data may be transferred to and processed in India and other jurisdictions where data protection laws may differ from those in your country. We ensure adequate safeguards (such as Standard Contractual Clauses under GDPR) for cross-border data transfers.
            </Paragraph>
          </Section>

          <Section id="rights">
            <SectionTitle>9. Your Rights Over Your Data</SectionTitle>
            <Paragraph><strong>For Indian Users (IT Act, 2000 &amp; DPDP Act 2023)</strong></Paragraph>
            <List>
              <li>Right to access your data.</li>
              <li>Right to correct inaccurate data.</li>
              <li>Right to withdraw consent for marketing.</li>
            </List>
            <Paragraph><strong>For EU Users (GDPR Rights)</strong></Paragraph>
            <List>
              <li>Right to be informed about data collection.</li>
              <li>Right to access a copy of your personal data.</li>
              <li>Right to rectification (correct inaccuracies).</li>
              <li>Right to erasure ("Right to be Forgotten").</li>
              <li>Right to data portability (request transfer of data).</li>
              <li>Right to object to data processing.</li>
              <li>Right to not be subject to automated decision-making.</li>
            </List>
            <Paragraph>To exercise your rights, email us at <InlineLink href="mailto:info@kubix.com">info@kubix.com</InlineLink>.</Paragraph>
          </Section>

          <Section id="security">
            <SectionTitle>10. Data Security</SectionTitle>
            <List>
              <li>Encryption of sensitive data.</li>
              <li>Regular security audits and penetration testing.</li>
              <li>Access controls &amp; authentication mechanisms.</li>
            </List>
            <Paragraph>Despite these measures, no system is 100% secure.</Paragraph>
          </Section>

          <Section id="retention">
            <SectionTitle>11. Data Retention</SectionTitle>
            <Paragraph>We retain your data only as long as necessary for the purposes outlined in this policy. Inactive accounts may be deleted after 5 years unless required for legal compliance.</Paragraph>
          </Section>

          <Section id="cookies">
            <SectionTitle>12. Cookies &amp; Tracking Technologies</SectionTitle>
            <Paragraph>Our website uses cookies, web beacons, and third-party trackers to improve functionality and user experience. You can manage cookies through your browser settings or opt-out using <InlineLink href="https://www.aboutads.info" target="_blank" rel="noreferrer noopener">www.aboutads.info</InlineLink>.</Paragraph>
          </Section>

          <Section id="thirdparty">
            <SectionTitle>13. Third-Party Links</SectionTitle>
            <Paragraph>Our Platform may contain links to third-party websites (e.g., partners, advertisers). We are not responsible for their privacy practices.</Paragraph>
          </Section>

          <Section id="children">
            <SectionTitle>14. Children’s Privacy</SectionTitle>
            <Paragraph>Our services are not intended for children under 13 years old. If we discover that a child has provided personal data, we will delete it immediately.</Paragraph>
          </Section>

          <Section id="changes">
            <SectionTitle>15. Changes to This Privacy Policy</SectionTitle>
            <Paragraph>We may update this policy periodically. Any changes will be posted on this page with a “Last Updated” date.</Paragraph>
          </Section>

          <Section id="contact">
            <SectionTitle>16. Contact Us</SectionTitle>
            <Paragraph>
              Email: <InlineLink href="mailto:info@kubix.com">info@kubix.com</InlineLink><br />
              Website: <InlineLink href="https://www.kubix.com" target="_blank" rel="noreferrer noopener">www.kubix.com <FiArrowUpRight aria-hidden /></InlineLink>
            </Paragraph>
            <FooterActions>
              <Button href="/">Go to Home</Button>
              <SecondaryBtn href="#intro">Back to Start</SecondaryBtn>
            </FooterActions>
          </Section>
        </Content>
      </Layout>

      <BackToTop onClick={scrollToTop} aria-label="Back to top">
        <FiArrowUp aria-hidden />
      </BackToTop>
    </Page>
  );
};

export default TermsAndConditions;
