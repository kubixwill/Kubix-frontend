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
  const items = [
    { id: "intro", label: "1. Introduction" },
    { id: "eligibility", label: "2. Eligibility & User Accounts" },
    { id: "use", label: "3. Use of Services" },
    { id: "ipr", label: "4. Intellectual Property Rights" },
    { id: "ugc", label: "5. User-Generated Content" },
    { id: "privacy", label: "6. Privacy & Data Protection" },
    { id: "payments", label: "7. Payments, Subscriptions & Refunds" },
    { id: "thirdparty", label: "8. Third-Party Links & Services" },
    { id: "disclaimers", label: "9. Disclaimers & Liability" },
    { id: "indemnification", label: "10. Indemnification" },
    { id: "termination", label: "11. Termination & Suspension" },
    { id: "law", label: "12. Governing Law & Disputes" },
    { id: "changes", label: "13. Changes to These Terms" },
    { id: "contact", label: "14. Contact Us" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Page>
      <Header>
        <Title>Terms & Conditions</Title>
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
              Welcome to Kubix, The Indian Education Review ("Kubix", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website <InlineLink href="https://www.kubix.com" target="_blank" rel="noreferrer noopener">www.kubix.com</InlineLink> (the "Platform") and all related services, including articles, newsletters, forums, and other educational content (collectively, the "Services"). By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree, you must discontinue use of our Services immediately.
            </Paragraph>
          </Section>

          <Section id="eligibility">
            <SectionTitle>2. Eligibility &amp; User Accounts</SectionTitle>
            <Paragraph><strong>2.1 Eligibility Criteria</strong></Paragraph>
            <List>
              <li>You must be at least 18 years old or have parental consent to use our Services.</li>
              <li>If you are registering on behalf of an organization, you must have the authority to accept these Terms.</li>
            </List>
            <Paragraph><strong>2.2 Account Registration</strong></Paragraph>
            <List>
              <li>You may need to create an account to access certain features.</li>
              <li>You must provide accurate and up-to-date information.</li>
              <li>You are responsible for safeguarding your login credentials.</li>
            </List>
            <Paragraph><strong>2.3 Account Suspension &amp; Termination</strong></Paragraph>
            <Paragraph>Kubix reserves the right to suspend or terminate your account if:</Paragraph>
            <List>
              <li>You violate these Terms.</li>
              <li>You engage in fraudulent, abusive, or illegal activity.</li>
              <li>We receive complaints regarding misuse of your account.</li>
            </List>
          </Section>

          <Section id="use">
            <SectionTitle>3. Use of Services</SectionTitle>
            <Paragraph>You agree to:</Paragraph>
            <List>
              <li>Use the Platform only for educational and informational purposes.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </List>
            <Paragraph>You must not:</Paragraph>
            <List>
              <li>Copy, modify, distribute, or sell our content without explicit permission.</li>
              <li>Engage in unauthorized advertising, spamming, or solicitation.</li>
              <li>Upload any malware, viruses, or harmful content.</li>
            </List>
            <Paragraph>We reserve the right to monitor, remove, or restrict access to content that violates these Terms.</Paragraph>
          </Section>

          <Section id="ipr">
            <SectionTitle>4. Intellectual Property Rights</SectionTitle>
            <Paragraph>
              All content on the Platform, including articles, graphics, logos, videos, and trademarks, is the exclusive property of Kubix or licensed to us.
            </Paragraph>
            <Paragraph><strong>You may:</strong></Paragraph>
            <List>
              <li>Share publicly available content with proper attribution to Kubix.</li>
            </List>
            <Paragraph><strong>You may not:</strong></Paragraph>
            <List>
              <li>Copy, modify, or use Kubix's content for commercial purposes without our consent.</li>
            </List>
            <Paragraph>
              If you believe that your intellectual property rights are being violated, please contact us at <InlineLink href="mailto:info@kubix.com">info@kubix.com</InlineLink>.
            </Paragraph>
          </Section>

          <Section id="ugc">
            <SectionTitle>5. User-Generated Content</SectionTitle>
            <Paragraph>If you submit content (e.g., comments, reviews, or articles):</Paragraph>
            <List>
              <li>You retain ownership, but grant Kubix a non-exclusive, royalty-free license to use and distribute your content.</li>
              <li>Your content must not infringe any third-party rights or violate community guidelines.</li>
              <li>We may modify or remove user-generated content at our discretion.</li>
            </List>
          </Section>

          <Section id="privacy">
            <SectionTitle>6. Privacy &amp; Data Protection</SectionTitle>
            <Paragraph>Our Privacy Policy governs how we collect, store, and use personal data. By using our Services, you consent to:</Paragraph>
            <List>
              <li>The collection and processing of your data as outlined in our Privacy Policy.</li>
              <li>The use of cookies and tracking technologies to enhance your experience.</li>
            </List>
            <Paragraph>
              Communication Consent: By submitting your contact details via forms on our Platform, you agree to receive communications from Kubix via Call, SMS, WhatsApp, and Email, even if your number is registered under DND/NDNC. You may opt out at any time by contacting us at <InlineLink href="mailto:info@kubix.com">info@kubix.com</InlineLink>.
            </Paragraph>
          </Section>

          <Section id="payments">
            <SectionTitle>7. Payments, Subscriptions &amp; Refunds</SectionTitle>
            <Paragraph><strong>7.1 Payments</strong></Paragraph>
            <List>
              <li>All payments must be processed securely via our authorized payment gateway.</li>
              <li>Prices are subject to change without prior notice.</li>
            </List>
            <Paragraph><strong>7.2 Refund Policy</strong></Paragraph>
            <List>
              <li>Refunds will be considered only if requested within seven days of purchase.</li>
              <li>Refunds are not applicable for partially used services or digital products already accessed.</li>
            </List>
          </Section>

          <Section id="thirdparty">
            <SectionTitle>8. Third-Party Links &amp; Services</SectionTitle>
            <Paragraph>Our Platform may contain links to third-party websites or services.</Paragraph>
            <List>
              <li>We do not control or endorse these third-party platforms.</li>
              <li>You are responsible for reviewing their Terms &amp; Privacy Policies before engaging with them.</li>
              <li>Kubix is not liable for any damage or loss arising from third-party interactions.</li>
            </List>
          </Section>

          <Section id="disclaimers">
            <SectionTitle>9. Disclaimers &amp; Limitations of Liability</SectionTitle>
            <Paragraph><strong>9.1 Educational Content Disclaimer</strong></Paragraph>
            <List>
              <li>Our content is for informational and educational purposes only and does not constitute legal, medical, financial, or professional advice.</li>
            </List>
            <Paragraph><strong>9.2 Service Availability</strong></Paragraph>
            <List>
              <li>We strive to keep the Platform available 24/7, but we do not guarantee uninterrupted access.</li>
              <li>We reserve the right to modify, suspend, or discontinue any service at any time.</li>
            </List>
            <Paragraph><strong>9.3 Limitation of Liability</strong></Paragraph>
            <List>
              <li>To the fullest extent permitted by law, Kubix shall not be liable for any indirect, incidental, or consequential damages.</li>
              <li>We are not liable for any loss of profits, data, or goodwill due to service interruptions.</li>
              <li>We are not responsible for user-generated content posted on the Platform.</li>
            </List>
            <Paragraph>Our total liability shall not exceed the amount paid by you (if any) for our Services.</Paragraph>
          </Section>

          <Section id="indemnification">
            <SectionTitle>10. Indemnification</SectionTitle>
            <Paragraph>You agree to defend, indemnify, and hold harmless Kubix, its officers, directors, employees, and affiliates from any claims, damages, or liabilities arising from:</Paragraph>
            <List>
              <li>Your use of our Platform.</li>
              <li>Your violation of these Terms.</li>
              <li>Any infringement of third-party rights caused by your content.</li>
            </List>
          </Section>

          <Section id="termination">
            <SectionTitle>11. Termination &amp; Suspension of Services</SectionTitle>
            <Paragraph>Kubix reserves the right to terminate, suspend, or restrict your access if:</Paragraph>
            <List>
              <li>You violate these Terms.</li>
              <li>We detect fraudulent or suspicious activity.</li>
              <li>We are required by law to suspend services.</li>
            </List>
            <Paragraph>If your account is terminated, you must stop using our Services immediately.</Paragraph>
          </Section>

          <Section id="law">
            <SectionTitle>12. Governing Law &amp; Dispute Resolution</SectionTitle>
            <Paragraph>These Terms are governed by the laws of India.</Paragraph>
            <Paragraph><strong>12.1 Dispute Resolution</strong></Paragraph>
            <List>
              <li><strong>Informal Resolution:</strong> We encourage resolving disputes amicably by contacting <InlineLink href="mailto:info@kubix.com">info@kubix.com</InlineLink>.</li>
              <li><strong>Arbitration:</strong> If unresolved, disputes shall be settled by binding arbitration in Bangalore, India, in accordance with Indian Arbitration laws.</li>
              <li><strong>Jurisdiction:</strong> Courts in Bangalore, India shall have exclusive jurisdiction over any disputes.</li>
            </List>
          </Section>

          <Section id="changes">
            <SectionTitle>13. Changes to These Terms</SectionTitle>
            <Paragraph>We may update these Terms from time to time. Changes will be effective immediately upon posting. You are responsible for reviewing these Terms periodically. Continued use of our Services after updates constitutes acceptance of the revised Terms.</Paragraph>
          </Section>

          <Section id="contact">
            <SectionTitle>14. Contact Us</SectionTitle>
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
