document.addEventListener('DOMContentLoaded', () => {
    const teamContainer = document.getElementById('teamContainer');

    // Function to create social links HTML
    const createSocialLinks = (social) => {
        return Object.entries(social).map(([platform, link]) => `
            <a href="${link}" target="_blank">
                <i class="fab fa-${platform}"></i>
            </a>
        `).join('');
    };

    // Function to create member card HTML
    const createMemberCard = (member) => `
        <div class="team-member">
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}">
                <div class="member-overlay">
                    <div class="member-social">
                        ${createSocialLinks(member.social)}
                    </div>
                </div>
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        </div>
    `;

    // Function to create category section
    const createCategorySection = (title, members) => `
        <div class="team-category">
            <h2 class="category-title">${title}</h2>
            <div class="team-grid">
                ${members.map(member => createMemberCard(member)).join('')}
            </div>
        </div>
    `;

    // Render all sections
    teamContainer.innerHTML = `
        ${createCategorySection('Lead Organizers', teamData.leadOrganizers)}
        ${createCategorySection('Core Team', teamData.coreTeam)}
        ${createCategorySection('Team Members', teamData.teamMembers)}
    `;

    // Initialize animations
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            const overlay = member.querySelector('.member-overlay');
            const socialLinks = member.querySelectorAll('.member-social a');
            
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3
            });
            
            gsap.from(socialLinks, {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1
            });
        });

        member.addEventListener('mouseleave', () => {
            const overlay = member.querySelector('.member-overlay');
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3
            });
        });
    });
});