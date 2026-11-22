tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        playground: {
                            purple: '#8B5CF6',
                            pink: '#EC4899',
                            yellow: '#F59E0B',
                            mint: '#10B981',
                            sky: '#06B6D4',
                            orange: '#F97316'
                        }
                    },
                    fontFamily: {
                        cairo: ['Cairo', 'Tajawal', 'sans-serif'],
                    },
                    animation: {
                        'float-slow': 'float 3s ease-in-out infinite',
                        'bounce-fun': 'bounceFun 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97)',
                        'pulse-glow': 'pulseGlow 1.8s infinite',
                        'pop-in': 'popIn 0.35s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                            '50%': { transform: 'translateY(-10px) rotate(2deg)' },
                        },
                        bounceFun: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-14px) scale(1.05)' },
                        },
                        pulseGlow: {
                            '0%, 100%': { boxShadow: '0 0 12px rgba(245, 158, 11, 0.35)' },
                            '50%': { boxShadow: '0 0 24px rgba(236, 72, 153, 0.7)' }
                        },
                        popIn: {
                            '0%': { opacity: '0', transform: 'scale(0.85)' },
                            '100%': { opacity: '1', transform: 'scale(1)' }
                        }
                    }
                }
            }
        }
