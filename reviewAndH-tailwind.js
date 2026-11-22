tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            purple: '#7C3AED', pink: '#EC4899', blue: '#0EA5E9',
                            yellow: '#F59E0B', green: '#10B981', bg: '#F3F4F6'
                        }
                    },
                    fontFamily: { cairo: ['Cairo', 'sans-serif'] },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'bounce-slow': 'bounce 2s infinite',
                        'pulse-glow': 'pulseGlow 2s infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        pulseGlow: {
                            '0%, 100%': { boxShadow: '0 0 15px rgba(124, 58, 237, 0.5)' },
                            '50%': { boxShadow: '0 0 25px rgba(236, 72, 153, 0.8)' }
                        }
                    }
                }
            }
        }
