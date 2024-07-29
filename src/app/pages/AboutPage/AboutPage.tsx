/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AboutContainer, Content, Section, ServiceItem, ServiceList, Title } from './styles';

const AboutPage = () => (
    <AboutContainer>
        <Section>
            <Title>About Our Barber Shop</Title>
            <Content>
                Welcome to our barber shop, where we offer the finest in men's grooming services. Our experienced barber
                is dedicated to providing top-notch haircuts, beard trims, and other grooming services to keep you
                looking sharp. We also specialize in laser treatments to help you achieve the look you desire.
            </Content>
        </Section>
        <Section>
            <Title>Our Services</Title>
            <ServiceList>
                <ServiceItem>Precision Haircuts</ServiceItem>
                <ServiceItem>Beard Trims and Shaping</ServiceItem>
                <ServiceItem>Hot Towel Shaves</ServiceItem>
                <ServiceItem>Laser Hair Removal</ServiceItem>
                <ServiceItem>Skin Treatments</ServiceItem>
            </ServiceList>
        </Section>
        <Section>
            <Title>Why Choose Us?</Title>
            <Content>
                Our barber shop is committed to offering exceptional services with a personalized touch. We use
                high-quality products and the latest techniques to ensure you leave feeling confident and satisfied.
                Whether you're here for a quick trim or a complete grooming experience, we've got you covered.
            </Content>
        </Section>
    </AboutContainer>
);

export default AboutPage;
